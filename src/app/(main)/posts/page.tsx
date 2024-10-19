import Link from "next/link";
import { PlusIcon } from "lucide-react";

import { Container } from "@/components/custom-ui/container";
import { findAllPosts, findTotalPosts } from "@/queries/posts";
import { formatDate } from "@/lib/utils";
import { ButtonLink } from "@/components/custom-ui/button-link";
import auth from "@/lib/auth";
import { redirect } from "next/navigation";
import { Pagination } from "@/components/pagination";

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ searchParams }: PageProps) {
  const session = await auth();
  if (!session?.user?.id) redirect("/auth/signin");

  const page = Math.max(
    isNaN(Number(searchParams.pg)) ? 1 : Number(searchParams.pg),
    1,
  );

  const postsPromise = findAllPosts(page);
  const totalPostsPromise = findTotalPosts();

  const [posts, totalPosts] = await Promise.all([
    postsPromise,
    totalPostsPromise,
  ]);

  return (
    <main className="mt-8">
      <Container>
        <div className="space-y-8">
          <div className="flex flex-wrap-reverse justify-between gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Posts</h1>
            <ButtonLink href="/posts/new" size="sm">
              <PlusIcon size={16} className="mr-1" />
              New Post
            </ButtonLink>
          </div>

          {posts.length > 0 ? (
            <>
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

              <Pagination currentPage={page} totalPosts={totalPosts} />
            </>
          ) : (
            <p className="text-center text-sm text-muted-foreground">
              No posts found
            </p>
          )}
        </div>
      </Container>
    </main>
  );
}
