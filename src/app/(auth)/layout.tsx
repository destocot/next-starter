import { HomeIcon } from "lucide-react";

import { ButtonLink } from "@/components/custom-buttons/button-link";
import { Container } from "@/components/layout/container";
import { Footer } from "@/components/layout/footer";
import { ThemeToggler } from "@/components/theme-toggler";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <header className="my-4">
        <Container className="flex items-center justify-between">
          <ButtonLink href="/" size="sm">
            <HomeIcon size={16} />
          </ButtonLink>
          <ThemeToggler />
        </Container>
      </header>
      <Container className="h-full px-0">
        <div className="flex h-full gap-2">
          <main className="flex flex-1 justify-center px-8">{children}</main>
          <div className="hidden flex-1 rounded-l bg-primary md:block" />
        </div>
      </Container>
      <Footer />
    </div>
  );
}
