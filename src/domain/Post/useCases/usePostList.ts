import {usePaginatedList} from '@infra';

import {postService} from '@domain';

export function usePosList() {
  return usePaginatedList(postService.getList);
}
