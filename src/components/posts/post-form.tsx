"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SubmitButton } from "@/components/custom-ui/submit-button";
import type { UpdatePostInput, CreatePostInput } from "@/validators/posts";
import { UpdatePostActionState } from "@/actions/posts/update-post-action";
import { CreatePostActionState } from "@/actions/posts/create-post-action";
import type { TDialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import type { SelectPost } from "@/types";

type PostFormProps = {
  defaultPost?: SelectPost;
  DialogClose?: TDialogClose;
  dialogCloseRef?: React.RefObject<HTMLButtonElement>;
  action: (payload: FormData) => void;
  state: UpdatePostActionState | CreatePostActionState;
};

export const PostForm = ({
  defaultPost,
  DialogClose,
  action,
  state,
  dialogCloseRef,
}: PostFormProps) => {
  const renderError = (
    fieldName: keyof UpdatePostInput & keyof CreatePostInput,
  ) => {
    return !state?.success &&
      state?.statusCode === 400 &&
      state.error.nested?.[fieldName] ? (
      <span id={`${fieldName}Error`} className="text-sm text-destructive">
        {state.error.nested[fieldName][0]}
      </span>
    ) : null;
  };

  return (
    <form
      action={(formData: FormData) => {
        if (defaultPost) {
          formData.append("postId", defaultPost.postId);
        }
        action(formData);
      }}
      className="space-y-4"
    >
      <div>
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          name="title"
          defaultValue={defaultPost?.title}
          aria-describedby="titleError"
        />
        {renderError("title")}
      </div>
      <div>
        <Label htmlFor="content">Content</Label>
        <Textarea
          id="content"
          name="content"
          defaultValue={defaultPost?.content}
          aria-describedby="contentError"
          className="resize-none"
        />
        {renderError("content")}
      </div>
      <div className="flex gap-4">
        <SubmitButton size="sm" className="flex-1">
          {defaultPost ? "Update Post" : "Create Post"}
        </SubmitButton>
        {DialogClose ? (
          <DialogClose className="flex-1" asChild>
            <Button
              ref={dialogCloseRef}
              size="sm"
              type="button"
              variant="secondary"
            >
              Close
            </Button>
          </DialogClose>
        ) : null}
      </div>
    </form>
  );
};
