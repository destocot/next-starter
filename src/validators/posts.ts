import * as v from "valibot";

export const PostIdSchema = v.object({
  postId: v.pipe(
    v.string("Your postId must be a string."),
    v.nonEmpty("Please enter your postId."),
    v.cuid2("Your postId is badly formatted."),
  ),
});

export type PostIdInput = v.InferInput<typeof PostIdSchema>;
export type PostIdOutput = v.InferOutput<typeof PostIdSchema>;

export const PostSchema = v.object({
  title: v.optional(
    v.pipe(
      v.string("Your title must be a string."),
      v.nonEmpty("Please enter your title."),
      v.minLength(6, "Your title must have 6 characters or more."),
      v.maxLength(60, "Your title must have 60 characters or less."),
    ),
  ),
  content: v.optional(
    v.pipe(
      v.string("Your content must be a string."),
      v.nonEmpty("Please enter your content."),
      v.minLength(6, "Your content must have 6 characters or more."),
    ),
  ),
  postId: PostIdSchema.entries.postId,
});

export const CreatePostSchema = v.omit(
  v.required(PostSchema, ["title", "content"]),
  ["postId"],
);
export type CreatePostInput = v.InferInput<typeof CreatePostSchema>;
export type CreatePostOutput = v.InferOutput<typeof CreatePostSchema>;

export const UpdatePostSchema = v.pipe(
  v.required(PostSchema, ["postId"]),
  v.check((input) => {
    const { postId, ...inputWithoutPostId } = input;
    return !Object.values(inputWithoutPostId).every(
      (value) => value === undefined,
    );
  }, "Please provide at least one field to update."),
);
export type UpdatePostInput = v.InferInput<typeof UpdatePostSchema>;
export type UpdatePostOutput = v.InferOutput<typeof UpdatePostSchema>;
