import { DashboardButton } from "@/components/custom-ui/dashboard-button";
import { ThemeToggler } from "@/components/theme-toggler";

export const Nav = () => {
  return (
    <nav>
      <ul className="flex items-center gap-4">
        <li>
          <DashboardButton size="sm" />
        </li>
        <li>
          <ThemeToggler />
        </li>
      </ul>
    </nav>
  );
};
