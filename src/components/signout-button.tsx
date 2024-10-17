"use client";

import { signoutAction } from "@/actions/auth/signout-action";
import { SubmitButton } from "@/components/custom-ui/submit-button";
import { useTransition } from "react";

export const SignoutButton = () => {
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
      size="sm"
      className="w-20"
    >
      Sign Out
    </SubmitButton>
  );
};
