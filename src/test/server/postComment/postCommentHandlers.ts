import {BASE_URL, PageAPI} from '@api';
import {http, HttpResponse} from 'msw';

import {PostCommentAPI, PATH_POST_COMMENT} from '@domain';

import {mockedData} from './mocks';

export const postCommentHandlers = [
  http.get(`${BASE_URL}${PATH_POST_COMMENT}`, async () => {
    const response: PageAPI<PostCommentAPI> =
      mockedData.mockedPostCommentResponse;

    return HttpResponse.json(response, {status: 200});
  }),
];
