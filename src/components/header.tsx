import Link from "next/link";

import { Container } from "@/components/custom-ui/container";
import { ThemeToggler } from "@/components/theme-toggler";
import { DashboardButton } from "@/components/custom-ui/dashboard-button";

export const Header = () => {
  return (
    <header className="my-4">
      <Container className="flex justify-between">
        <Link href="/">
          <h2 className="text-2xl font-bold tracking-tight">Next Starter</h2>
        </Link>
        <nav>
          <ul className="flex items-center gap-4">
            <li>
              {" "}
              <DashboardButton />{" "}
            </li>
            <li>
              <ThemeToggler />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
