"use client";

import { useViewport } from "@/hooks/use-viewport";
import { MobileNav } from "@/components/mobile-nav";
import { Nav } from "@/components/nav";

export const NavWrapper = () => {
  const isMobile = useViewport("sm");

  if (isMobile) return <MobileNav />;

  return <Nav />;
};
