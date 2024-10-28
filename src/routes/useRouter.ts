import {useAuthCredentials, useShowOnboarding} from '@services';

export type Stacks = 'Loading' | 'Auth' | 'App' | 'Onboarding';

export function useRouter(): Stacks {
  const {authCredentials, isLoading} = useAuthCredentials();
  const showOnboarding = useShowOnboarding();

  if (isLoading) {
    return 'Loading';
  }

  if (authCredentials) {
    return 'App';
  }

  if (showOnboarding) {
    return 'Onboarding';
  }

  return 'Auth';
}
