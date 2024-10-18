"use client";

import { useFormState } from "react-dom";
import { toast } from "sonner";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/custom-ui/submit-button";
import { signupAction } from "@/actions/auth/signup-action";
import type { SignupActionState } from "@/actions/auth/signup-action";
import type { SignupInput } from "@/validators/auth";

export const SignupForm = () => {
  const [state, action] = useFormState<SignupActionState, FormData>(
    signupAction,
    undefined,
  );

  const renderError = (fieldName: keyof SignupInput) => {
    return !state?.success &&
      state?.statusCode === 400 &&
      state.error.nested?.[fieldName] ? (
      <span id={`${fieldName}Error`} className="text-xs text-destructive">
        {state.error.nested[fieldName][0]}
      </span>
    ) : null;
  };

  if (
    !state?.success &&
    (state?.statusCode === 409 || state?.statusCode === 500)
  ) {
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
      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          aria-describedby="confirmPasswordError"
        />
        {renderError("confirmPassword")}
      </div>
      <SubmitButton className="w-full">Sign Up</SubmitButton>
    </form>
  );
};
