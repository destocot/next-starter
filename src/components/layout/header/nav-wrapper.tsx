"use client";

import { useViewport } from "@/hooks/use-viewport";
import { MobileNav } from "@/components/layout/header/mobile-nav";
import { Nav } from "@/components/layout/header/nav";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";
import { useMounted } from "@/hooks/use-mounted";

export const NavWrapper = () => {
  const { isMounted } = useMounted();
  const isMobile = useViewport("sm");

  if (!isMounted) {
    return (
      <Button variant="outline" size="sm" disabled>
        <LoaderIcon className="animate-spin" />
      </Button>
    );
  }

  if (isMobile) return <MobileNav />;

  return <Nav />;
};
