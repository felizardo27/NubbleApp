import {Post, PostAPI} from '../Post/postTypes';
import {User, UserAPI} from '../User';

export type PostReactionType = 'favorite' | 'like';

export interface PostReactionBase {
  id: number; // 187;
  emojiType: PostReactionType; //'favorite';
  userId: number; // 1;
  postId: number; // 12;
  isChecked: boolean; // true;
  createdAt: string; // '2024-10-30T00:41:47.172+00:00';
  updatedAt: string; //'2024-10-30T00:41:47.172+00:00';
}

export interface PostReaction extends PostReactionBase {
  author: User;
  post: Pick<Post, 'id' | 'text' | 'imageURL'>;
}

export interface PostReactionBaseAPI {
  id: number; // 187;
  emoji_type: PostReactionType; //'favorite';
  user_id: number; // 1;
  post_id: number; // 12;
  is_checked: boolean; // true;
  created_at: string; // '2024-10-30T00:41:47.172+00:00';
  updated_at: string; //'2024-10-30T00:41:47.172+00:00';
}

export interface PostReactionAPI extends PostReactionBaseAPI {
  post: Pick<PostAPI, 'id' | 'text' | 'image_url' | 'status'>;
  user: UserAPI;
}
