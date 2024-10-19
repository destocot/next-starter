import { Container } from "@/components/layout/container";
import { GetStartedButton } from "@/components/custom-buttons/get-started-button";
import { Footer } from "@/components/layout/footer";
import { ThemeToggler } from "@/components/theme-toggler";

export default function Page() {
  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr_auto]">
      <header className="my-4">
        <Container className="flex justify-end">
          <ThemeToggler />
        </Container>
      </header>
      <main className="flex items-center">
        <Container>
          <div className="flex flex-col items-center gap-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Next Starter</h1>
            <p className="max-w-prose text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              cum, vitae voluptatibus explicabo modi consequatur veritatis
              laborum quia quas natus nobis facere tempora quo dolorem saepe,
              mollitia tenetur! Et, sunt.
            </p>
            <GetStartedButton />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
