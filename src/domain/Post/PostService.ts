import {apiAdapter} from '@api';
import {Page} from '@types';

import {PostAdapter} from './PostAdapter';
import {postApi} from './PostApi';
import {Post} from './PostTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({page, per_page: 10});

  return {
    data: postPageAPI.data.map(PostAdapter.toPost),
    meta: apiAdapter.toMetaDataPage(postPageAPI.meta),
  };
}

export const postService = {
  getList,
};
