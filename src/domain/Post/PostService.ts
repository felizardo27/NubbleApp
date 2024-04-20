import {postApi} from './PostApi';
import {Post} from './PostTypes';

async function getList(): Promise<Post[]> {
  const postList = await postApi.getList();
  return postList;
}

export const postService = {
  getList,
};
