import {apiAdapter} from '@api';
import {Page} from '@types';

import {postCommentAdapter} from './postCommentAdapter';
import {postCommentApi} from './postCommentApi';
import {PostComment} from './postCommentTypes';

const PER_PAGE = 10;
async function getList(
  postId: number,
  page: number,
): Promise<Page<PostComment>> {
  const postCommentPageAPI = await postCommentApi.getList(postId, {
    page,
    per_page: PER_PAGE,
  });

  return apiAdapter.toPageModel(
    postCommentPageAPI,
    postCommentAdapter.toPostComment,
  );
}

async function create(post_id: number, message: string): Promise<PostComment> {
  const postCommentAPI = await postCommentApi.create(post_id, message);

  return postCommentAdapter.toPostComment(postCommentAPI);
}

async function remove(postCommentId: number): Promise<string> {
  const response = await postCommentApi.remove(postCommentId);

  return response.message;
}
/**
 *@description user can delete the comment if it is the post author or comment author
 *
 *@param userId the current session user id
 *@param postComment comment to be delete
 *@param postAuthorId the id of the post author
 */
function isAllowToDelete(
  postComment: PostComment,
  userId: number | null,
  postAuthorId: number,
): Boolean {
  if (postComment.author.id === userId) {
    return true;
  }

  if (postAuthorId === userId) {
    return true;
  }

  return false;
}

export const postCommentService = {
  getList,
  create,
  remove,
  isAllowToDelete,
};
