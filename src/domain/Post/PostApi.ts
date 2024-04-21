import {api, PageAPI, PageParams} from '@api';

import {PostAPI} from './PostTypes';

async function getList(params?: PageParams): Promise<PageAPI<PostAPI>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));
  const response = await api.get<PageAPI<PostAPI>>('user/post', {
    params,
  });
  return response.data;
}

export const postApi = {
  getList,
};
