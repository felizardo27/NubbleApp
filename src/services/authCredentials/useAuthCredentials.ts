import {useContext} from 'react';

// import {create} from 'zustand';
// import {persist} from 'zustand/middleware';

// import {storage} from '../storage';

import {AuthCredentialsService} from './authCredentialsType';
import {AuthCredentialsContext} from './Providers/authCredentialsProvider';

export function useAuthCredentials(): AuthCredentialsService {
  // return authCredentialsZustand();
  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error(
      'AuthCredentials should be used within a AuthCredentialsProvider',
    );
  }
  return context;
}

// const authCredentialsZustand = create<AuthCredentialsService>()(
//   persist(
//     set => ({
//       authCredentials: null,
//       isLoading: false,
//       saveCredentials: async ac => set({authCredentials: ac}),
//       removeCredentials: async () => set({authCredentials: null}),
//     }),
//     {
//       name: '@Auth',
//       storage: storage,
//     },
//   ),
// );
