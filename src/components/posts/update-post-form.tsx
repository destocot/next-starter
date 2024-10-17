"use client";

import { useFormState } from "react-dom";
import { PostForm } from "./post-form";
import {
  updatePostAction,
  UpdatePostActionState,
} from "@/actions/posts/update-post-action";
import { TDialogClose } from "@/components/ui/dialog";
import { SelectPost } from "@/types";
import { useRef } from "react";
import { toast } from "sonner";

type UpdatePostFormProps = {
  DialogClose?: TDialogClose;
  defaultPost: SelectPost;
};

export const UpdatePostForm = ({
  DialogClose,
  defaultPost,
}: UpdatePostFormProps) => {
  const [state, action] = useFormState<UpdatePostActionState, FormData>(
    updatePostAction,
    undefined,
  );
  const dialogCloseRef = useRef<HTMLButtonElement>(null);

  if (state?.success) {
    toast.success("Post updated successfully.");
    dialogCloseRef.current?.click();
  }

  if (!state?.success && state?.statusCode === 400 && state.error.root) {
    const error = state.error.root?.[0] ?? "Oops! Something went wrong.";
    toast.error(error);
  }

  return (
    <PostForm
      action={action}
      state={state}
      DialogClose={DialogClose}
      dialogCloseRef={dialogCloseRef}
      defaultPost={defaultPost}
    />
  );
};
