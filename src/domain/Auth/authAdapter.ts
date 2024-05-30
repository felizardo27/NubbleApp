import {userAdapter} from '../User';

import {AuthCredentials, AuthCredentialsApi} from './authTypes';

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsApi,
): AuthCredentials {
  return {
    token: authCredentialsAPI.auth.token,
    tokenExpiresAt: authCredentialsAPI.auth.expires_at,
    refreshToken: authCredentialsAPI.auth.refreshToken,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
}

export const authAdapter = {
  toAuthCredentials,
};
