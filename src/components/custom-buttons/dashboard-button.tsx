"use client";

import { useSession } from "next-auth/react";

import { ButtonLink } from "@/components/custom-buttons/button-link";
import { Button, type ButtonProps } from "@/components/ui/button";

type DashboardButtonProps = ButtonProps;

export const DashboardButton = ({
  variant = "default",
  className,
  size,
}: DashboardButtonProps) => {
  const { status } = useSession();

  if (status === "loading") {
    return (
      <Button variant={variant} className={className} size={size} disabled>
        <span className="animate-pulse select-none text-transparent">
          Sign In
        </span>
      </Button>
    );
  }

  return (
    <ButtonLink
      variant={variant}
      className={className}
      size={size}
      href={status === "authenticated" ? "/dashboard" : "/auth/signin"}
    >
      {status === "authenticated" ? "Dashboard" : "Sign In"}
    </ButtonLink>
  );
};
