import {PostAdapter} from './PostAdapter';
import {postApi} from './PostApi';
import {Post} from './PostTypes';

async function getList(page: number): Promise<Post[]> {
  const postPageAPI = await postApi.getList({page, per_page: 10});

  // throw new Error();
  // return [];
  return postPageAPI.data.map(PostAdapter.toPost);
}

export const postService = {
  getList,
};
