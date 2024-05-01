import {apiAdapter} from '@api';
import {Page} from '@types';

import {PostCommentAdapter} from './PostCommentAdapter';
import {postCommentApi} from './PostCommentApi';
import {PostComment} from './PostCommentTypes';

async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: 10,
  });

  return {
    data: postCommentPageAPI.data.map(PostCommentAdapter.toCommentPost),
    meta: apiAdapter.toMetaDataPage(postCommentPageAPI.meta),
  };
}

async function create(post_id: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(post_id, message);

  return PostCommentAdapter.toCommentPost(postCommentAPI);
}

export const PostCommentService = {
  getList,
  create,
};
