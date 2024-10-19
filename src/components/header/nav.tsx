import { DashboardButton } from "@/components/custom-ui/dashboard-button";
import { ButtonLink } from "@/components/custom-ui/button-link";

export const Nav = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-4">
        <li>
          <DashboardButton size="sm" />
        </li>
        <li>
          <ButtonLink variant="secondary" size="sm" href="/posts">
            Posts
          </ButtonLink>
        </li>
        <li>
          <ButtonLink variant="secondary" size="sm" href="/posts/new">
            New Post
          </ButtonLink>
        </li>
      </ul>
    </nav>
  );
};
