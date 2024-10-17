import Link from "next/link";
import { PlusIcon } from "lucide-react";

import { Container } from "@/components/custom-ui/container";
import { findAllPosts } from "@/queries/posts";
import { formatDate } from "@/lib/utils";
import { ButtonLink } from "@/components/custom-ui/button-link";

export default async function Page() {
  const posts = await findAllPosts();

  return (
    <main className="mt-8">
      <Container>
        <div className="space-y-4">
          <div className="flex flex-wrap-reverse justify-between gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
            <ButtonLink href="/posts/new" size="sm">
              <PlusIcon size={16} className="mr-1" />
              New Post
            </ButtonLink>
          </div>

          <ul className="divide-y divide-dashed">
            {posts.map((post, idx) => (
              <li
                key={post.postId}
                className="animate-fadeIn opacity-0"
                style={{
                  animationDelay: `${idx * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <Link
                  href={`/post/${post.postId}`}
                  className="group flex flex-col rounded p-2 transition hover:scale-[1.01] hover:bg-muted sm:flex-row sm:items-end sm:justify-between sm:gap-2"
                >
                  <span className="line-clamp-1 flex-1 text-sm text-primary underline-offset-4 group-hover:underline">
                    {post.title}
                  </span>
                  <time className="text-xs text-muted-foreground">
                    {formatDate(post.createdAt)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </main>
  );
}
