"use client";

import { useFormStatus } from "react-dom";
import { LoaderIcon } from "lucide-react";

import { Button, type ButtonProps } from "@/components/ui/button";

type SubmitButtonProps = ButtonProps & { isPending?: boolean };

export const SubmitButton = ({
  children,
  variant,
  size,
  type = "submit",
  className,
  isPending,
  disabled,
  ...props
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type={type}
      variant={variant}
      size={size}
      className={className}
      disabled={disabled || pending}
      {...props}
    >
      {pending || isPending ? (
        <LoaderIcon size={16} className="animate-spin" />
      ) : (
        children
      )}
    </Button>
  );
};
