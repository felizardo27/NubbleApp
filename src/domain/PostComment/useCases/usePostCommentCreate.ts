import {MutationOptions, useMutation} from '@infra';

import {PostCommentService} from '../PostCommentService';
import {PostComment} from '../PostCommentTypes';

export function usePostCommentCreate(
  postId: number,
  options?: MutationOptions<PostComment>,
) {
  const {mutate, loading, error} = useMutation<{message: string}, PostComment>(
    ({message}) => PostCommentService.create(postId, message),
    options,
  );

  async function createComment(message: string) {
    await mutate({message});
  }

  return {
    createComment,
    loading,
    error,
  };
}
