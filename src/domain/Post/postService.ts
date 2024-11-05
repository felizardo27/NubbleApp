import {apiAdapter} from '@api';
import {ImageForUpload} from '@services';
import {Page} from '@types';

import {PostReaction, PostReactionType} from '../PostReaction';

import {postAdapter} from './postAdapter';
import {postApi} from './postApi';
import {Post} from './postTypes';

async function getList(page: number): Promise<Page<Post>> {
  const postPageAPI = await postApi.getList({page, per_page: 10});

  return apiAdapter.toPageModel(postPageAPI, postAdapter.toPost);
}

async function createPost(
  text: string,
  imageCover: ImageForUpload,
): Promise<Post> {
  const postApiData = await postApi.createPost(text, imageCover);

  return postAdapter.toPost(postApiData);
}

async function getById(postId: number): Promise<Post> {
  const postApiData = await postApi.getById(postId.toString());
  return postAdapter.toPost(postApiData);
}

function hasReactToPost(
  postReactions: Pick<PostReaction, 'emojiType'>[],
  postReactionType: PostReactionType,
) {
  return postReactions.some(
    reaction => reaction.emojiType === postReactionType,
  );
}

export const postService = {
  getList,
  createPost,
  getById,
  hasReactToPost,
};
