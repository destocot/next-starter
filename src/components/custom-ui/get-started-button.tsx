"use client";

import { ButtonLink } from "@/components/custom-ui/button-link";
import { useSession } from "next-auth/react";

export const GetStartedButton = () => {
  const { data: session } = useSession();

  const href = !!session?.user ? "/dashboard" : "/auth/signin";
  return <ButtonLink href={href}>Get Started</ButtonLink>;
};
