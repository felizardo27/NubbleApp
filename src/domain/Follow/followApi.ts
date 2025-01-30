import {api, PageAPI, PageParams} from '@api';

import {FollowerUserAPI, FollowingUserAPI} from './followTypes';

async function isFollowing(userId: string): Promise<{isFollowing: boolean}> {
  const response = await api.get<{isFollowing: boolean}>(
    `user/follow/is-following/${userId}`,
  );
  return response.data;
}

async function followUser(userId: number): Promise<FollowingUserAPI> {
  // await new Promise(resolve => setTimeout(resolve, 5000));
  const response = await api.post(
    'user/follow',
    {},
    {params: {followed_user_id: userId}},
  );
  return response.data;
}

async function removeFollow(followId: number): Promise<{message: string}> {
  const response = await api.delete<{message: string}>(
    `user/follow/${followId}`,
  );
  return response.data;
}

async function geMyFollowingList(
  params?: PageParams,
): Promise<PageAPI<FollowingUserAPI>> {
  const response = await api.get<PageAPI<FollowingUserAPI>>(
    'user/follow/following',
    {params},
  );
  return response.data;
}

async function getMyFollowersList(
  params?: PageParams,
): Promise<PageAPI<FollowerUserAPI>> {
  const response = await api.get<PageAPI<FollowerUserAPI>>(
    'user/follow/followers',
    {
      params,
    },
  );
  return response.data;
}

export const followApi = {
  isFollowing,
  followUser,
  removeFollow,
  geMyFollowingList,
  getMyFollowersList,
};
