import Link from "next/link";

import { Container } from "@/components/custom-ui/container";
import { NavWrapper } from "./nav-wrapper";

export const Header = () => {
  return (
    <header className="my-4">
      <Container className="flex justify-between">
        <Link href="/">
          <h2 className="text-2xl font-bold tracking-tight">Next Starter</h2>
        </Link>
        <NavWrapper />
      </Container>
    </header>
  );
};
