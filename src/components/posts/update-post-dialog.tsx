import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { SelectPost } from "@/types";
import { UpdatePostForm } from "./update-post-form";

type UpdatePostDialogProps = {
  post: SelectPost;
};

export const UpdatePostDialog = ({ post }: UpdatePostDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="warning">Edit</Button>
      </DialogTrigger>
      <DialogContent className="w-[98%]">
        <DialogHeader>
          <DialogTitle>Edit Post {post.postId}</DialogTitle>
          <DialogDescription>
            Update the title and content of the post.
          </DialogDescription>
        </DialogHeader>
        <UpdatePostForm defaultPost={post} DialogClose={DialogClose} />
      </DialogContent>
    </Dialog>
  );
};
