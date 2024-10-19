"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import type { Post } from "@prisma/client";

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const deletePostAction = async (postId: Post["postId"]) => {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  await db.post.delete({
    where: {
      postId,
      userId: session.user.id,
    },
  });

  revalidatePath("/posts");
  redirect("/posts");
};
