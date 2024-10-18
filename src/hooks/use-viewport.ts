"use client";

import { useEffect, useState } from "react";

import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const twConfig = resolveConfig(tailwindConfig);
const twScreens = twConfig.theme.screens;

export const useViewport = (breakpoint: keyof typeof twScreens) => {
  const [isMobile, setIsMobile] = useState(false);
  const parsedBreakpoint = Number(twScreens[breakpoint].replace("px", ""));

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < parsedBreakpoint);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};
