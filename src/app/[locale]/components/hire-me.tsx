"use client";

import React, { useEffect, useRef } from "react";
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

interface HireMeProps {
  trans: Record<string, string>;
}

export function HireMe({ trans }: HireMeProps) {
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

  return <HireMeDrawer trans={trans} />;
}

function HireMeDrawer({ trans }: HireMeProps) {
  const drawerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onVisualViewportChange = () => {
      const visualViewportHeight = window.visualViewport?.height || 0;
      const OFFSET = 16; // Adjust this as needed for padding/margin considerations

      if (drawerRef.current) {
        const diffFromInitial = window.innerHeight - visualViewportHeight;
        drawerRef.current.style.height = `${visualViewportHeight - OFFSET}px`;
        drawerRef.current.style.bottom = `${Math.max(diffFromInitial, 0)}px`;
      }
    };

    window.visualViewport?.addEventListener("resize", onVisualViewportChange);

    return () => {
      window.visualViewport?.removeEventListener(
        "resize",
        onVisualViewportChange
      );
    };
  }, []);

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">{trans?.hireMe}</Button>
      </DrawerTrigger>
      <DrawerContent ref={drawerRef}>
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
