import {usePaginatedList, postService} from '@domain';

export function usePosList() {
  return usePaginatedList(postService.getList);
}
