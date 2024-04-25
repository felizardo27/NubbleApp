import {usePaginatedList, PostCommentService} from '@domain';

export function usePostCommentList(postId: number) {
  function getList(page: number) {
    return PostCommentService.getList(postId, page);
  }
  return usePaginatedList(getList);
}