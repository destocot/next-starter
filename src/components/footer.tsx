import { Container } from "@/components/custom-ui/container";

export const Footer = () => {
  return (
    <footer className="my-6">
      <Container className="flex flex-col justify-between text-xs text-muted-foreground sm:flex-row">
        <span>Created by Khurram Ali &copy; {new Date().getFullYear()}</span>
        <span>
          Powered by <strong>Prisma</strong>, <strong>Auth.js</strong>,{" "}
          <strong>shadcn/ui</strong>, and <strong>valibot</strong>.
        </span>
      </Container>
    </footer>
  );
};
