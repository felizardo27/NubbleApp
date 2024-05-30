import React, {useEffect} from 'react';
import {createContext, useState} from 'react';

import {api} from '@api';

import {AuthCredentials, authService} from '@domain';

import {authApi} from '../../../domain/Auth/authApi';
import {authCredentialsStorage} from '../authCredentialsStorage';
import {AuthCredentialsService} from '../authCredentialsType';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    startAuthCredentials();
  }, []);

  useEffect(() => {
    const interceptor = api.interceptors.response.use(
      response => response,
      async responseError => {
        if (responseError.response.status === 401) {
          const failedRequest = responseError.config;
          const hasNotRefreshToken = !authCredentials?.refreshToken;
          const isRefreshTokenRequest =
            authApi.isRefreshTokenRequest(failedRequest);
          if (
            hasNotRefreshToken ||
            isRefreshTokenRequest ||
            failedRequest.sent
          ) {
            removeCredentials();
            return Promise.reject(responseError);
          }

          failedRequest.sent = true;

          const newAuthCredentials =
            await authService.authenticateByRefreshToken(
              authCredentials.refreshToken,
            );
          saveCredentials(newAuthCredentials);

          failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
          return api(failedRequest);
        }
      },
    );

    return () => api.interceptors.response.eject(interceptor);
  }, [authCredentials?.refreshToken]);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch {
      //TODO:
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  }

  return (
    <AuthCredentialsContext.Provider
      value={{authCredentials, isLoading, saveCredentials, removeCredentials}}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
