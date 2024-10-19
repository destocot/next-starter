import { Container } from "@/components/custom-ui/container";
import { GetStartedButton } from "@/components/custom-ui/get-started-button";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="grid min-h-screen grid-rows-[1fr_auto]">
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
