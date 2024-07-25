import {BASE_URL, PageAPI} from '@api';
import {http, HttpResponse} from 'msw';

import {PostCommentAPI, PATH_POST_COMMENT} from '@domain';

import {mockedData} from './mocks';

const FULL_URL = `${BASE_URL}${PATH_POST_COMMENT}`;

let inMemoryResponse = {...mockedData.mockedPostCommentResponse};

export const postCommentHandlers = [
  http.get(`${FULL_URL}`, async () => {
    const response: PageAPI<PostCommentAPI> =
      mockedData.mockedPostCommentResponse;

    return HttpResponse.json(response, {status: 200});
  }),
  http.post<any, {post_id: number; message: string}>(
    FULL_URL,
    async ({request}) => {
      const body = await request.json();

      const newPostCommentAPI: PostCommentAPI = {
        ...mockedData.postCommentAPI,
        id: 999,
        post_id: body.post_id,
        message: body.message,
      };

      inMemoryResponse.data = [newPostCommentAPI, ...inMemoryResponse.data];
      inMemoryResponse.meta = {
        ...inMemoryResponse.meta,
        total: inMemoryResponse.meta.total + 1,
      };

      return HttpResponse.json(newPostCommentAPI, {status: 201});
    },
  ),
];
