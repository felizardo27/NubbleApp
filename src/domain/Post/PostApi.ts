import {PageAPI} from '@api';

import {PostAPI} from './PostTypes';

async function getList(): Promise<PageAPI<PostAPI>> {
  //TODO: Simular delay api

  let response = await fetch('http://localhost:3333/user/post', {
    method: 'GET',
    headers: {
      Authorization:
        'Bearer Mg.hE-Xl_WINEGqSr63OdEa_sf4i9NsGAtawQMIbmyV1jHoFWEFG8bHHnE-yDox',
    },
  });

  let data: PageAPI<PostAPI> = await response.json();

  return data;
}

export const postApi = {
  getList,
};
