import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';
import {EditPasswordParams} from '../authTypes';

export function useAuthUpdatePassword(options?: MutationOptions<string>) {
  const mutation = useMutation<string, Error, EditPasswordParams>({
    mutationFn: params => authService.updatePassword(params),
    retry: false,
    onSuccess: message => {
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  return {
    updatePassword: (params: EditPasswordParams) => mutation.mutate(params),
    isLoading: mutation.isLoading,
  };
}
