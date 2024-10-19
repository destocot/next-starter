"use client";

import { useViewport } from "@/hooks/use-viewport";
import { MobileNav } from "@/components/header/mobile-nav";
import { Nav } from "@/components/header/nav";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { LoaderIcon } from "lucide-react";

export const NavWrapper = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useViewport("sm");

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
