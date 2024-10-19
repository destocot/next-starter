"use client";

import { signoutAction } from "@/actions/auth/signout-action";
import { SubmitButton } from "@/components/custom-ui/submit-button";
import { useTransition } from "react";
import { ButtonProps } from "./ui/button";

type SignoutButtonProps = {
  className?: string;
  size?: ButtonProps["size"];
};

export const SignoutButton = ({
  size = "default",
  className,
}: SignoutButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const clickHandler = () => {
    startTransition(async () => {
      await signoutAction();
      window.location.href = "/";
    });
  };

  return (
    <SubmitButton
      onClick={clickHandler}
      isPending={isPending}
      disabled={isPending}
      variant="destructive"
      size={size}
      className={className}
    >
      Sign Out
    </SubmitButton>
  );
};
