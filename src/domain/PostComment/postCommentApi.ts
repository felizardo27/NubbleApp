import {api, PageAPI, PageParams} from '@api';

import {PostCommentAPI} from './postCommentTypes';

export const PATH_POST_COMMENT = 'user/post_comment';

async function getList(
  post_id: number,
  pageParams?: PageParams,
): Promise<PageAPI<PostCommentAPI>> {
  await new Promise(resolve => setTimeout(() => resolve(''), 2000));
  const response = await api.get<PageAPI<PostCommentAPI>>(PATH_POST_COMMENT, {
    params: {
      post_id,
      ...pageParams,
    },
  });
  return response.data;
}

async function create(
  post_id: number,
  message: string,
): Promise<PostCommentAPI> {
  const response = await api.post<PostCommentAPI>(PATH_POST_COMMENT, {
    post_id,
    message,
  });
  return response.data;
}

async function remove(postCommentId: number): Promise<{message: string}> {
  const reponse = await api.delete<{message: string}>(
    `${PATH_POST_COMMENT}/${postCommentId}`,
  );

  return reponse.data;
}

export const postCommentApi = {
  getList,
  create,
  remove,
};
