import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {postService} from '../postService';

export function usePostGetById(id: number) {
  const {data, isLoading, isError, isFetching, refetch} = useQuery({
    queryKey: [QueryKeys.UserGetById, id],
    queryFn: () => postService.getById(id),
    staleTime: 1000 * 30,
  });

  return {
    post: data,
    isError,
    isLoading,
    isFetching,
    refetch,
  };
}
