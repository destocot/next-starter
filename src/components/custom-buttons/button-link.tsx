import { Button, type ButtonProps } from "@/components/ui/button";
import Link from "next/link";

type ButtonLinkProps = ButtonProps & {
  href: string;
  external?: boolean;
};

export const ButtonLink = ({
  href,
  variant,
  size,
  className,
  children,
  external,
}: ButtonLinkProps) => {
  return (
    <Button variant={variant} size={size} className={className} asChild>
      {external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <Link href={href}>{children}</Link>
      )}
    </Button>
  );
};
