"use client";

import {MenuToggle} from "@/components/menu-toggle";
import {Sheet, SheetContent, SheetFooter, SheetTitle} from "@/components/sheet";
import {Button, buttonVariants} from "@/components/ui/button";
import {Grid2x2PlusIcon, MirrorRound} from "lucide-react";
import {useState} from "react";

export function SimpleHeader() {
  const [open, setOpen] = useState(false);

  const links = [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ];

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-lg">
      <nav className="mx-auto flex h-14 w-full max-w-7xl items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <MirrorRound className="size-6" />
          <p className="font-mono text-lg font-bold">Skinova</p>
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <a
              className={buttonVariants({variant: "ghost"})}
              href={link.href}
              key={link.href}>
              {link.label}
            </a>
          ))}
          <Button asChild>
            <a
              href="https://wa.me/201500223440"
              target="_blank"
              rel="noopener noreferrer">
              Book Now
            </a>
          </Button>
        </div>
        <Sheet open={open} onOpenChange={setOpen}>
          <Button size="icon" variant="outline" className="lg:hidden">
            <MenuToggle
              strokeWidth={2.5}
              open={open}
              onOpenChange={setOpen}
              className="size-6"
            />
          </Button>
          <SheetContent
            className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
            showClose={false}
            side="left">
            <SheetTitle className="sr-only">Main navigation</SheetTitle>
            <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
              {links.map((link) => (
                <a
                  key={link.href}
                  className={buttonVariants({
                    variant: "ghost",
                    className: "justify-start",
                  })}
                  href={link.href}>
                  {link.label}
                </a>
              ))}
            </div>
            <SheetFooter>
              <Button asChild>
                <a
                  href="https://wa.me/201500223440"
                  target="_blank"
                  rel="noopener noreferrer">
                  Book Now
                </a>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
