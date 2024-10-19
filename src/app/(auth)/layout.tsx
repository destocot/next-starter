import { ButtonLink } from "@/components/custom-ui/button-link";
import { Container } from "@/components/custom-ui/container";
import { Footer } from "@/components/footer";
import { HomeIcon } from "lucide-react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_auto]">
      <div className="mt-8">
        <Container className="h-full">
          <div className="flex h-full justify-center gap-2">
            {children}
            <div className="hidden flex-1 rounded bg-primary sm:block" />
          </div>
        </Container>
      </div>
      <Footer />
      <div className="absolute left-2 top-2">
        <ButtonLink href="/" size="sm">
          <HomeIcon className="sm:mr-2" size={16} />
          <span className="hidden sm:inline">Home</span>
        </ButtonLink>
      </div>
    </div>
  );
}
