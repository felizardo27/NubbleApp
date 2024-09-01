import {BASE_URL, PageAPI} from '@api';
import {http, HttpResponse} from 'msw';

import {USER_PATH, UserAPI} from '@domain';

import {userMocked} from './userMocked';

const FULL_URL = `${BASE_URL}${USER_PATH}`;

export const userHandler = [
  http.get(FULL_URL, async () => {
    const response: PageAPI<UserAPI> = userMocked.mockedUserResponse;

    return HttpResponse.json(response, {status: 200});
  }),
  http.get<{userId: string}>(`${FULL_URL}/:userId`, async ({params}) => {
    const userApi = userMocked.userList.find(
      user => user.id.toString() === params.userId,
    );

    return HttpResponse.json(userApi, {status: 200});
  }),
];
