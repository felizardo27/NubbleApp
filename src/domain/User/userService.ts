import {apiAdapter} from '@api';
import {Page} from '@types';

import {userAdapter} from './userAdapter';
import {userApi} from './userApi';
import {User, UserDetails} from './userTypes';

async function getById(userId: number): Promise<UserDetails> {
  const userAPI = await userApi.getById(userId.toString());
  const {isFollowing} = await userApi.isFollowing(userId.toString());
  return userAdapter.toUserDetails(userAPI, isFollowing);
}

async function searchUser(search: string): Promise<Page<User>> {
  const userPageAPI = await userApi.getList(search);

  return apiAdapter.toPageModel(userPageAPI, userAdapter.toUser);
}

export const userService = {
  getById,
  searchUser,
};
