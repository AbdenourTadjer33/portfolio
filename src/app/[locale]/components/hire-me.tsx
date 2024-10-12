"use client";

import { useEffect, useState } from "react";
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

export function HireMe({ trans }: { trans: Record<string, string> }) {
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 528); // Adjust this value as needed
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const HireContent = () => (
    <form className="space-y-4">
      <Input type="text" placeholder={trans?.formName} />
      <Input type="email" placeholder={trans?.formEmail} />
      <Textarea placeholder={trans?.formMessage} className="max-h-40" />
      <Button type="submit" className={!isLargeScreen ? "w-full" : ""}>
        {trans?.formSendMessage}
      </Button>
    </form>
  );

  if (isLargeScreen) {
    return (
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">{trans?.hireMe}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{trans?.hireMeTitle}</DialogTitle>
            <DialogDescription>{trans?.hireMeDescription}</DialogDescription>
          </DialogHeader>
          <HireContent />
        </DialogContent>
      </Dialog>
    );
  }
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">{trans?.hireMe}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{trans?.hireMeTitle}</DrawerTitle>
          <DrawerDescription>{trans?.hireMeDescription}</DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <HireContent />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
