import axios from 'axios';

import {AuthCredentials, authService} from '@domain';

export const BASE_URL = 'http://100.27.63.100:3333/';

export const api = axios.create({
  // fix [AxiosError: Network Error] on Android
  // baseURL: 'http://192.168.0.1:3333/',
  baseURL: BASE_URL,
});

type InterceptorProps = {
  authCredentials: AuthCredentials | null;
  saveCredentials: (ac: AuthCredentials) => Promise<void>;
  removeCredentials: () => Promise<void>;
};

export function registerInterceptor({
  authCredentials,
  saveCredentials,
  removeCredentials,
}: InterceptorProps) {
  const interceptor = api.interceptors.response.use(
    response => response,
    async responseError => {
      if (responseError?.response?.status === 401) {
        const failedRequest = responseError.config;
        const hasNotRefreshToken = !authCredentials?.refreshToken;
        const isRefreshTokenRequest =
          authService.isRefreshTokenRequest(failedRequest);
        if (hasNotRefreshToken || isRefreshTokenRequest || failedRequest.sent) {
          removeCredentials();
          return Promise.reject(responseError);
        }

        failedRequest.sent = true;

        const newAuthCredentials = await authService.authenticateByRefreshToken(
          authCredentials.refreshToken,
        );
        saveCredentials(newAuthCredentials);

        failedRequest.headers.Authorization = `Bearer ${newAuthCredentials.token}`;
        return api(failedRequest);
      }
    },
  );
  // remove listener when component unmount
  return () => api.interceptors.response.eject(interceptor);
}
