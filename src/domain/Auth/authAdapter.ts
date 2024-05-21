import {userAdapter} from '../User';

import {AuthCredentials, AuthCredentialsApi} from './authTypes';

function toAuthCredentials(
  authCredentialsAPI: AuthCredentialsApi,
): AuthCredentials {
  return {
    token: authCredentialsAPI.auth.token,
    user: userAdapter.toUser(authCredentialsAPI.user),
  };
}

export const authAdapter = {
  toAuthCredentials,
};
