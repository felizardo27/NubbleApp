import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authService} from '../authService';

interface Param {
  username: string;
  enabled: boolean;
}

export function useAuthIsUsernameAvailable({username, enabled}: Param) {
  const debouncedUserName = useDebounce(username, 1500);
  const {data, isFetching} = useQuery({
    queryKey: [QueryKeys.IsUserNameAvailable, debouncedUserName],
    queryFn: () => authService.isUserNameAvailable(debouncedUserName),
    staleTime: 20000,
    enabled: enabled && debouncedUserName.length > 0,
  });

  const isDebouncing = debouncedUserName !== username;

  return {
    isAvailable: !!data,
    isFetching: isFetching || isDebouncing,
  };
}
