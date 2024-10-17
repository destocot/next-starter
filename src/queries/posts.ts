import { auth } from "@/auth";
import { db } from "@/lib/db";

export const findAllPosts = async () => {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const posts = await db.post.findMany({
    where: { userId: session.user.id },
    select: { postId: true, createdAt: true, title: true },
    orderBy: { createdAt: "desc" },
  });

  return posts;
};

export const findOnePost = async (postId: string) => {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const post = await db.post.findUnique({
    where: { postId, userId: session.user.id },
    select: { postId: true, createdAt: true, title: true, content: true },
  });

  return post;
};
