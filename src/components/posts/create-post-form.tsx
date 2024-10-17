"use client";

import {
  createPostAction,
  CreatePostActionState,
} from "@/actions/posts/create-post-action";
import { PostForm } from "./post-form";
import { useFormState } from "react-dom";
import { toast } from "sonner";

export const CreatePostForm = () => {
  const [state, action] = useFormState<CreatePostActionState, FormData>(
    createPostAction,
    undefined,
  );

  if (!state?.success && state?.statusCode === 400 && state.error.root) {
    const error = state.error.root?.[0] ?? "Oops! Something went wrong.";
    toast.error(error);
  }

  return <PostForm action={action} state={state} />;
};
