import {api, PageAPI, PageParams} from '@api';

import {
  postReactionAPI,
  postReactionBaseAPI,
  postReactionType,
} from './postReactionsTypes';

export const POST_REACTION_PATH = 'user/reactions';

type MyReactionsParam = PageParams & {
  post_id?: number;
  reaction_type?: postReactionType;
};

async function getMyReactions(
  myReactionsParam: MyReactionsParam,
): Promise<PageAPI<postReactionAPI>> {
  const response = await api.get<PageAPI<postReactionAPI>>(
    `${POST_REACTION_PATH}/my-reactions`,
    {
      params: {
        ...myReactionsParam,
      },
    },
  );
  return response.data;
}

async function createOrUpdateReaction(
  post_id: number,
  reaction_type: postReactionType,
): Promise<postReactionBaseAPI> {
  const path = `${POST_REACTION_PATH}/${post_id}/${reaction_type}`;
  const response = await api.post<postReactionBaseAPI>(path);
  return response.data;
}

export const postReactionApi = {getMyReactions, createOrUpdateReaction};
