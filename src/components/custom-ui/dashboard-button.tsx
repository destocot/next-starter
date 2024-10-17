"use client";

import { useSession } from "next-auth/react";
import { ButtonLink } from "./button-link";
import { Button } from "../ui/button";

export const DashboardButton = () => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <Button disabled asChild>
        <div className="animate-pulse text-transparent">Sign In</div>
      </Button>
    );
  }

  if (status === "unauthenticated") {
    return <ButtonLink href="/auth/signin">Sign In</ButtonLink>;
  }

  return (
    <ButtonLink href="/dashboard" size="sm">
      Dashboard
    </ButtonLink>
  );
};
