import { ButtonLink } from "@/components/custom-ui/button-link";
import { Container } from "@/components/custom-ui/container";
import { Footer } from "@/components/footer";
import { ThemeToggler } from "@/components/theme-toggler";
import { HomeIcon } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <header className="mb-4 mt-2 flex items-center justify-between gap-2 px-2">
        <ButtonLink href="/" size="sm">
          <HomeIcon className="sm:mr-2" size={16} />
          <span className="hidden sm:inline">Home</span>
        </ButtonLink>
        <ThemeToggler />
      </header>
      <main>
        <Container className="h-full">
          <div className="flex h-full justify-center gap-2">
            {children}
            <div className="hidden flex-1 rounded bg-primary md:block" />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
