import {userAdapter} from './userAdapter';
import {userApi} from './userApi';

async function getById(userId: number) {
  const userAPI = await userApi.getById(userId.toString());
  return userAdapter.toUser(userAPI);
}

export const userService = {
  getById,
};
