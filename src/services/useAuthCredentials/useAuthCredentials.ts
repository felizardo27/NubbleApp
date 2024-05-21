import {create} from 'zustand';

import {AuthCredentialsService} from './authCredentialsType';

export function useAuthCredentials(): AuthCredentialsService {
  return authCredentialsZustand();
}

const authCredentialsZustand = create<AuthCredentialsService>(set => ({
  authCredentials: null,
  isLoading: false,
  saveCredentials: async ac => set({authCredentials: ac}),
  remove: async () => set({authCredentials: null}),
}));
