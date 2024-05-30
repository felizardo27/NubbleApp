import {api} from '@api';
import {AxiosRequestConfig} from 'axios';

import {UserAPI} from '../User';

import {
  AuthCredentialsApi,
  FieldIsAvailableAPI,
  ForgotPasswordAPI,
  SignUpDataAPI,
} from './authTypes';

const REFRESH_TOKEN_URL = 'auth/refresh-token';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentialsApi> {
  const response = await api.post<AuthCredentialsApi>('auth/login', {
    email,
    password,
  });
  return response.data;
}

async function signOut(): Promise<string> {
  const response = await api.get<string>('auth/profile/logout');
  return response.data;
}

async function signUp(data: SignUpDataAPI): Promise<UserAPI> {
  const response = await api.post<UserAPI>('auth/register', data);
  return response.data;
}

async function refreshToken(token: string): Promise<AuthCredentialsApi> {
  const response = await api.post<AuthCredentialsApi>(REFRESH_TOKEN_URL, {
    refreshToken: token,
  });
  return response.data;
}

function isRefreshTokenRequest(response: AxiosRequestConfig): boolean {
  const url = response.url;
  return url === REFRESH_TOKEN_URL;
}

async function isUserNameAvailable(params: {
  username: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get<FieldIsAvailableAPI>(
    'auth/validate-username',
    {
      params,
    },
  );
  return response.data;
}

async function isEmailAvailable(params: {
  email: string;
}): Promise<FieldIsAvailableAPI> {
  const response = await api.get<FieldIsAvailableAPI>('auth/validate-email', {
    params,
  });
  return response.data;
}

async function forgotPassword(
  params: ForgotPasswordAPI,
): Promise<{message: string}> {
  const response = await api.post<{message: string}>(
    'auth/forgot-password',
    params,
  );
  console.log(response.data);
  return response.data;
}

export const authApi = {
  signIn,
  signOut,
  signUp,
  refreshToken,
  isRefreshTokenRequest,
  isUserNameAvailable,
  isEmailAvailable,
  forgotPassword,
};
