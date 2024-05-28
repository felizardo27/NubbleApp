import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';

export function useAuthRequestNewPassword(options?: MutationOptions<void>) {
  const mutation = useMutation<string, Error, string>({
    mutationFn: email => authService.requestNewPassword(email),
    retry: false,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  return {
    requestNewPassword: (email: string) => mutation.mutate(email),
    isLoading: mutation.isLoading,
  };
}
