import {PostAdapter} from './PostAdapter';
import {postApi} from './PostApi';
import {Post} from './PostTypes';

async function getList(): Promise<Post[]> {
  const postPageAPI = await postApi.getList();

  // throw new Error();
  // return [];
  return postPageAPI.data.map(PostAdapter.toPost);
}

export const postService = {
  getList,
};
