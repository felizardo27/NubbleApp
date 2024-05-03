import {MutationOptions, useMutation} from '@infra';

import {PostCommentService} from '../PostCommentService';

export function usePostCommentRemove(option?: MutationOptions<string>) {
  return useMutation<{postCommentId: number}, string>(
    ({postCommentId}) => PostCommentService.remove(postCommentId),
    option,
  );
}
