import {postApi} from './PostApi';
import {Post} from './Types';

async function getList(): Promise<Post[]> {
  const postList = await postApi.getList();
  return postList;
}

export const postService = {
  getList,
};
