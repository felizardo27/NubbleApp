import {postListMock} from './PostListMock';
import {Post} from './Types';

async function getList(): Promise<Post[]> {
  //TODO: Simular delay api

  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mg.hE-Xl_WINEGqSr63OdEa_sf4i9NsGAtawQMIbmyV1jHoFWEFG8bHHnE-yDox',
    },
  });

  let data = await response.json();
  console.log(data);

  //await new Promise(resolve => setTimeout(() => resolve(''), 1000));
  return postListMock;
}

export const postApi = {
  getList,
};
