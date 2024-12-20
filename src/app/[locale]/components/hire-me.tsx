"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ContactMeForm } from "./contact-me-form";
import { useMediaQuery } from "@/hooks/use-media-query";

export function HireMe({ trans }: { trans: Record<string, string> }) {
  const isDesktop = useMediaQuery("(min-width: 700px)");

  if (isDesktop) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{trans?.hireMe}</Button>
        </DialogTrigger>
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>{trans?.hireMeTitle}</DialogTitle>
            <DialogDescription>{trans?.hireMeDescription}</DialogDescription>
          </DialogHeader>
          <ContactMeForm trans={trans} type="HIRE ME" />
        </DialogContent>
      </Dialog>
    );
  }

  return <HireMeDrawer  />
}

function HireMeDrawer({ trans }: { trans: Record<string, string> }) {
  const drawerRef = React.useRef(null);

  React.useEffect(() => {
    function onVisualViewportChange() {
      const visualViewportHeight = window.visualViewport.height;
      const keyboardHeight = window.innerHeight - visualViewportHeight;
 
      // Difference between window height and height excluding the keyboard
      const diffFromInitial = window.innerHeight - visualViewportHeight;
 
      const drawerHeight = drawerRef.current.getBoundingClientRect().height || 0;
 
      drawerRef.current.style.height = `${visualViewportHeight - OFFSET}px`;
      drawerRef.current.style.bottom = `${Math.max(diffFromInitial, 0)}px`;
    }
 
    window.visualViewport?.addEventListener("resize", onVisualViewportChange);
 
    return () =>
      window.visualViewport?.removeEventListener(
        "resize",
        onVisualViewportChange,
      );
  }, []);

  return (
    <Drawer ref={drawerRef}>
      <DrawerTrigger asChild>
        <Button variant="outline">{trans?.hireMe}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{trans?.hireMeTitle}</DrawerTitle>
          <DrawerDescription>{trans?.hireMeDescription}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <ContactMeForm trans={trans} type="HIRE ME" />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
