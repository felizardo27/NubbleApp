import {postListMock} from './PostListMock';
import {Post} from './Types';

async function getList(): Promise<Post[]> {
  //TODO: Simular delay api
  await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return postListMock;
}

export const postApi = {
  getList,
};
