import { SubmitButton } from "@/components/custom-ui/submit-button";
import { deletePostAction } from "@/actions/posts/delete-post-action";

type DeletePostButtonProps = {
  postId: string;
};

export const DeletePostButton = ({ postId }: DeletePostButtonProps) => {
  return (
    <form action={deletePostAction.bind(null, postId)}>
      <SubmitButton>Yes</SubmitButton>
    </form>
  );
};
