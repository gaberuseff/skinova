"use client";

import {MenuToggle} from "@/components/menu-toggle";
import {Sheet, SheetContent, SheetFooter, SheetTitle} from "@/components/sheet";
import {Button, buttonVariants} from "@/components/ui/button";
import {MirrorRound} from "lucide-react";
import Link from "next/link";
import {useState} from "react";

export function SimpleHeader({locale, content}) {
  const [open, setOpen] = useState(false);

  const links = content.links;
  const homeHref = `/${locale}`;

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur-lg">
      <nav
        aria-label={content.mainNavigation}
        className="mx-auto flex h-14 w-full max-w-7xl items-center px-4">
        <div className="flex flex-1 items-center gap-2 lg:flex-none">
          <MirrorRound className="size-6" />
          <Link href={homeHref} className="font-mono text-lg font-bold">
            {content.brand}
          </Link>
        </div>
        <ul className="ms-auto hidden items-center gap-2 lg:flex" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                className={buttonVariants({variant: "ghost"})}
                href={`${homeHref}${link.href}`}>
                {link.label}
              </Link>
            </li>
          ))}

          <li>
            <Link
              href={content.switchHref}
              className={buttonVariants({variant: "outline"})}>
              {content.switchLabel}
            </Link>
          </li>

          <li>
            <Button asChild>
              <a
                href="https://wa.me/201500223440"
                target="_blank"
                rel="noopener noreferrer">
                {content.bookNow}
              </a>
            </Button>
          </li>
        </ul>
        <Sheet open={open} onOpenChange={setOpen}>
          <MenuToggle
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            strokeWidth={2.5}
            open={open}
            onOpenChange={setOpen}
            className="ms-auto size-6 lg:hidden"
          />
          <SheetContent
            id="mobile-navigation"
            className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
            showClose={false}
            side="left">
            <SheetTitle className="sr-only">
              {content.mainNavigation}
            </SheetTitle>
            <ul
              className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5"
              role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    className={buttonVariants({
                      variant: "ghost",
                      className: "justify-start",
                    })}
                    href={`${homeHref}${link.href}`}
                    onClick={() => setOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}

              <li>
                <Link
                  href={content.switchHref}
                  className={buttonVariants({
                    variant: "outline",
                    className: "justify-start",
                  })}
                  onClick={() => setOpen(false)}>
                  {content.switchLabel}
                </Link>
              </li>
            </ul>
            <SheetFooter>
              <Button asChild>
                <a
                  href="https://wa.me/201500223440"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}>
                  {content.bookNow}
                </a>
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
