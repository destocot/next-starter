import { ArrowLeftFromLineIcon } from "lucide-react";
import { redirect } from "next/navigation";

import { ButtonLink } from "@/components/custom-ui/button-link";
import { Container } from "@/components/custom-ui/container";
import { CreatePostForm } from "@/components/posts/create-post-form";
import auth from "@/lib/auth";

export default async function Page() {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/signin");

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
