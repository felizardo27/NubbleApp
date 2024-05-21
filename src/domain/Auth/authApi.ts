import {api} from '@api';

import {AuthCredentialsApi} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsApi> {
  const response = await api.post<AuthCredentialsApi>('login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('profile/logout');
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
};
