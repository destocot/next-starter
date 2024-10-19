"use client";

import { useFormState } from "react-dom";
import { toast } from "sonner";

import { signinAction } from "@/actions/auth/signin-action";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import type { SigninActionState } from "@/actions/auth/signin-action";
import { SubmitButton } from "@/components/custom-buttons/submit-button";
import { SigninInput } from "@/validators/auth";

export const SigninForm = () => {
  const [state, action] = useFormState<SigninActionState, FormData>(
    signinAction,
    undefined,
  );

  const renderError = (fieldName: keyof SigninInput) => {
    return !state?.success &&
      state?.statusCode === 400 &&
      state.error.nested?.[fieldName] ? (
      <span id={`${fieldName}Error`} className="text-sm text-destructive">
        {state.error.nested[fieldName][0]}
      </span>
    ) : null;
  };

  if (state?.statusCode === 200) {
    window.location.href = "/dashboard";
  }

  if (state?.statusCode === 500) {
    toast.error(state.error);
  }

  return (
    <form action={action} className="space-y-2.5">
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          name="email"
          aria-describedby="emailError"
        />
        {renderError("email")}
      </div>
      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          name="password"
          aria-describedby="passwordError"
        />
        {renderError("password")}
      </div>
      <SubmitButton className="w-full">Sign In</SubmitButton>
    </form>
  );
};
