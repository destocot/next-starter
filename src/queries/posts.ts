import { auth } from "@/auth";
import { POSTS_PER_PAGE } from "@/lib/constants";
import { db } from "@/lib/db";

export const findAllPosts = async (page: number) => {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const posts = await db.post.findMany({
    where: { userId: session.user.id },
    select: { postId: true, createdAt: true, title: true },
    orderBy: { createdAt: "desc" },
    take: POSTS_PER_PAGE,
    skip: (page - 1) * POSTS_PER_PAGE,
  });

  return posts;
};

export const findTotalPosts = async () => {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const totalPosts = await db.post.count({
    where: { userId: session.user.id },
  });

  return totalPosts;
};

export const findOnePost = async (postId: string) => {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const post = await db.post.findUnique({
    where: { postId, userId: session.user.id },
    select: { postId: true, createdAt: true, title: true, content: true },
  });

  return post;
};
