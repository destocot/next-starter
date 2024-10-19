import { ArrowLeftFromLineIcon } from "lucide-react";
import { notFound, redirect } from "next/navigation";
import { flatten, safeParse } from "valibot";
import type { Post } from "@prisma/client";

import { findOnePost } from "@/queries/posts";
import { PostIdSchema } from "@/validators/posts";
import { formatDate } from "@/lib/utils";
import { ButtonLink } from "@/components/custom-buttons/button-link";
import { Container } from "@/components/layout/container";
import { DeletePostDialog } from "@/components/posts/delete-post-dialog";
import { UpdatePostDialog } from "@/components/posts/update-post-dialog";
import auth from "@/lib/auth";

type PageProps = { params: { postId: Post["postId"] } };

export default async function Page({ params }: PageProps) {
  const session = await auth();
  if (!session?.user) redirect("/auth/signin");

  const postId = params.postId;
  if (!postId) notFound();

  const parsedPostId = safeParse(PostIdSchema, { postId });

  if (!parsedPostId.success) {
    const flattenedErrors = flatten<typeof PostIdSchema>(parsedPostId.issues);
    throw new Error(flattenedErrors.nested?.postId?.[0] ?? "Invalid Post ID.");
  }

  const post = await findOnePost(parsedPostId.output.postId);
  if (!post) notFound();

  return (
    <main className="mt-8">
      <Container>
        <div className="space-y-8">
          <div className="flex flex-col-reverse justify-between gap-4 sm:flex-row">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Post {post.postId}
            </h1>
            <ButtonLink href="/posts" size="sm" className="self-start">
              <ArrowLeftFromLineIcon size={16} className="mr-1" />
              Back to Posts
            </ButtonLink>
          </div>

          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl sm:font-bold">
                {post.title}
              </h2>
              <time className="text-sm text-muted-foreground">
                {formatDate(post.createdAt)}
              </time>
              <p className="max-w-prose leading-loose">{post.content}</p>
            </div>
            <div className="flex flex-row gap-2 sm:flex-col">
              <UpdatePostDialog post={post} />
              <DeletePostDialog postId={post.postId} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
