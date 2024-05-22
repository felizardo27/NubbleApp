import {create} from 'zustand';
import {persist} from 'zustand/middleware';

import {storage} from '../storage';

import {AuthCredentialsService} from './authCredentialsType';

export function useAuthCredentials(): AuthCredentialsService {
  return authCredentialsZustand();
}

const authCredentialsZustand = create<AuthCredentialsService>()(
  persist(
    set => ({
      authCredentials: null,
      isLoading: false,
      saveCredentials: async ac => set({authCredentials: ac}),
      removeCredentials: async () => set({authCredentials: null}),
    }),
    {
      name: '@Auth',
      storage: storage,
    },
  ),
);
