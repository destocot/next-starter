"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { flatten, safeParse } from "valibot";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { CreatePostSchema } from "@/validators/posts";
import type { ValibotActionState } from "@/types";

export type CreatePostActionState = ValibotActionState<typeof CreatePostSchema>;

export const createPostAction = async (
  prevState: CreatePostActionState,
  formData: FormData,
): Promise<CreatePostActionState> => {
  const session = await auth();
  if (!session?.user) {
    throw new Error("Unauthorized");
  }

  const values = Object.fromEntries(formData.entries());
  const parsedValues = safeParse(CreatePostSchema, values);

  if (!parsedValues.success) {
    const flattenedErrors = flatten<typeof CreatePostSchema>(
      parsedValues.issues,
    );

    return { success: false, error: flattenedErrors, statusCode: 400 };
  }

  const newPost = await db.post.create({
    data: {
      title: parsedValues.output.title,
      content: parsedValues.output.content,
      userId: session.user.id,
    },
    select: { postId: true },
  });

  revalidatePath("/posts");
  redirect(`/post/${newPost.postId}`);
};
