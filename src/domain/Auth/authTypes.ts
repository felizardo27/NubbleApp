import {User, UserAPI} from '../User';

export interface AuthCredentials {
  token: string;
  user: User;
}

export interface AuthCredentialsApi {
  auth: {
    type: string; //'bearer';
    token: string; // 'MQ.zr89qFpDXAoAaW0uGro-LrnA9knB0YtLnFFnZvh-BkziLOwayjgUWAWEWp3R';
  };
  user: UserAPI;
}

export interface SignInData {
  username?: string;
  email?: string;
  password: string;
}
