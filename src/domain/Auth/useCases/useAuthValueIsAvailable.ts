import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Param {
  username: string;
}

export function useAuthIsUsernameAvailable({username}: Param) {
  const debouncedUserName = useDebounce(username, 1500);
  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.IsUserNameAvailable, debouncedUserName],
    queryFn: () => authService.isUserNameAvailable(debouncedUserName),
    staleTime: 20000,
  });

  return {
    isAvailable: !!data,
    isFetching,
  };
}
