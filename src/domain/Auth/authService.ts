import {authAdapter} from './authAdapter';
import {authApi} from './authApi';
import {AuthCredentials} from './authTypes';

async function signIn(
  email: string,
  password: string,
): Promise<AuthCredentials> {
  try {
    const authAPI = await authApi.signIn(email, password);
    return authAdapter.toAuthCredentials(authAPI);
  } catch (e) {
    throw new Error('E-mail ou senha inválido');
  }
}

async function signOut() {
  const message = await authApi.signOut();
  return message;
}

export const authService = {
  signIn,
  signOut,
};
