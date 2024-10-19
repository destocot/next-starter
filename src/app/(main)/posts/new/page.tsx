import { ArrowLeftFromLineIcon } from "lucide-react";

import { ButtonLink } from "@/components/custom-buttons/button-link";
import { Container } from "@/components/layout/container";
import { CreatePostForm } from "@/components/posts/create-post-form";

export default async function Page() {
  return (
    <main className="mt-8">
      <Container>
        <div className="space-y-8">
          <div className="flex flex-wrap-reverse justify-between gap-4">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              New Post
            </h1>
            <ButtonLink href="/posts" size="sm">
              <ArrowLeftFromLineIcon size={16} className="mr-1" />
              Back to Posts
            </ButtonLink>
          </div>

          <div className="sm:max-w-sm">
            <CreatePostForm />
          </div>
        </div>
      </Container>
    </main>
  );
}
