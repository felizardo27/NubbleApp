import {postListMock} from './PostListMock';
import {Post} from './Types';

async function getList(): Promise<Post[]> {
  //TODO: Simular delay api
  return postListMock;
}

export const postApi = {
  getList,
};
