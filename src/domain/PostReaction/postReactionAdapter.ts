import {userAdapter} from '../User';

import {
  PostReaction,
  PostReactionAPI,
  PostReactionBase,
  PostReactionBaseAPI,
} from './postReactionsTypes';

function toPostReactionBase(
  postReactionBaseAPI: PostReactionBaseAPI,
): PostReactionBase {
  return {
    id: postReactionBaseAPI.id,
    emojiType: postReactionBaseAPI.emoji_type,
    postId: postReactionBaseAPI.post_id,
    userId: postReactionBaseAPI.user_id,
    isChecked: postReactionBaseAPI.is_checked,
    createdAt: postReactionBaseAPI.created_at,
    updatedAt: postReactionBaseAPI.updated_at,
  };
}

function toPostReaction(postReactionAPI: PostReactionAPI): PostReaction {
  return {
    ...toPostReactionBase(postReactionAPI),
    author: userAdapter.toUser(postReactionAPI.user),
    post: {
      id: postReactionAPI.post.id,
      imageURL: postReactionAPI.post.image_url,
      text: postReactionAPI.post.text,
    },
  };
}

export const postReactionAdapter = {toPostReactionBase, toPostReaction};
