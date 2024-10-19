import Link from "next/link";

import { Container } from "@/components/custom-ui/container";
import { NavWrapper } from "./nav-wrapper";
import { ThemeToggler } from "../theme-toggler";

export const Header = () => {
  return (
    <header className="my-4">
      <Container className="flex justify-between">
        <Link href="/dashboard">
          <h2 className="text-2xl font-bold tracking-tight">Next Starter</h2>
        </Link>
        <div className="flex items-center gap-4">
          <NavWrapper />
          <ThemeToggler />
        </div>
      </Container>
    </header>
  );
};
