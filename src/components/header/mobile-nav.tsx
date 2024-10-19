"use client";

import { useSession } from "next-auth/react";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DashboardButton } from "@/components/custom-ui/dashboard-button";
import { ButtonLink } from "@/components/custom-ui/button-link";
import { SignoutButton } from "@/components/signout-button";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { status } = useSession();

  useEffect(() => {
    const handleClick = (evt: MouseEvent) => {
      const target = evt.target as HTMLElement;

      if (target.closest(".mobileNav__item")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-full flex-col py-12">
        <SheetHeader className="items-start">
          <SheetTitle>Navigation</SheetTitle>
          <SheetDescription className="text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar, odio nec pharetra.
          </SheetDescription>
        </SheetHeader>
        <nav className="mt-4 flex-1">
          <ul className="flex h-full flex-col items-start gap-4">
            <li className="mobileNav__item">
              <DashboardButton variant="link" />
            </li>
            {status === "authenticated" && (
              <>
                <li className="mobileNav__item">
                  <ButtonLink href="/posts" variant="link">
                    Posts
                  </ButtonLink>
                </li>
                <li className="mobileNav__item">
                  <ButtonLink href="/posts/new" variant="link">
                    New Post
                  </ButtonLink>
                </li>
                <li className="mt-auto">
                  <SignoutButton />
                </li>
              </>
            )}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
