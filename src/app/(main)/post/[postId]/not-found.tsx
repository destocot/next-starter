import { ArrowLeftFromLineIcon, TriangleAlertIcon } from "lucide-react";

import { ButtonLink } from "@/components/custom-buttons/button-link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <main className="mt-8">
      <Container>
        <div className="space-y-4">
          <div className="flex items-center text-warning">
            <TriangleAlertIcon size={28} className="mr-2" />
            <h1 className="text-3xl font-bold tracking-tight">
              Post Not Found
            </h1>
          </div>
          <ButtonLink href="/posts" size="sm">
            <ArrowLeftFromLineIcon size={16} className="mr-1" />
            Back to Posts
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
