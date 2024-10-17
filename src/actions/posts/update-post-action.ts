"use server";

import { revalidatePath } from "next/cache";

import { auth } from "@/auth";
import { db } from "@/lib/db";
import { UpdatePostSchema } from "@/validators/posts";
import { flatten, safeParse } from "valibot";
import type { ValibotActionState } from "@/types";

export type UpdatePostActionState =
  | ValibotActionState<typeof UpdatePostSchema>
  | { error: null; success: true; statusCode: 200 };

export const updatePostAction = async (
  prevState: UpdatePostActionState,
  formData: FormData,
): Promise<UpdatePostActionState> => {
  const session = await auth();
  if (!session?.user?.id) {
    throw new Error("Unauthorized");
  }

  const values = Object.fromEntries(formData.entries());
  const parsedValues = safeParse(UpdatePostSchema, values);

  if (!parsedValues.success) {
    const flattenedErrors = flatten<typeof UpdatePostSchema>(
      parsedValues.issues,
    );

    return { success: false, error: flattenedErrors, statusCode: 400 };
  }

  await db.post.update({
    where: {
      postId: parsedValues.output.postId,
      userId: session.user.id,
    },
    data: {
      ...(parsedValues.output.title
        ? { title: parsedValues.output.title }
        : {}),
      ...(parsedValues.output.content
        ? { content: parsedValues.output.content }
        : {}),
    },
  });

  revalidatePath("/posts");
  return { error: null, success: true, statusCode: 200 };
};
