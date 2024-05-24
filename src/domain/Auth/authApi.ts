import {api} from '@api';

import {UserAPI} from '../User';

import {AuthCredentialsApi, SignUpDataAPI} from './authTypes';

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

async function signUp(data: SignUpDataAPI): Promise<UserAPI> {
  const response = await api.post<UserAPI>('register', data);
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
};
