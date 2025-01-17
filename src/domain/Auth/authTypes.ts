import {User, UserAPI} from '../User';

export interface AuthCredentials {
  token: string;
  tokenExpiresAt: string;
  refreshToken: string;
  user: User;
}

export interface AuthCredentialsApi {
  auth: {
    type: string; //'bearer';
    token: string; // 'MQ.zr89qFpDXAoAaW0uGro-LrnA9knB0YtLnFFnZvh-BkziLOwayjgUWAWEWp3R';
    refreshToken: string;
    expires_at: string;
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}

export interface SignUpDataAPI {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export interface SignUpData {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
}

export interface FieldIsAvailableAPI {
  message: string;
  isAvailable: boolean;
}

export interface ForgotPasswordAPI {
  email: string;
}

export interface EditPasswordParams {
  currentPassword: string;
  newPassword: string;
}
