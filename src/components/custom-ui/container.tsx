import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type ContainerProps = ComponentProps<"div">;

export const Container = ({
  children,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div className={cn("container", className)} {...props}>
      {children}
    </div>
  );
};
