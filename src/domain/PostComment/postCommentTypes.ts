import {UserAPI} from '../User';

export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
  createdAtRelative: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}
export interface PostCommentAPI {
  id: number; // 117;
  message: string; // 'Pariatur cupiditate neque fugit pariatur ipsa.';
  user_id: number; // 6;
  post_id: number; // 1;
  created_at: string; // '2023-07-24T20:38:56.192+10:00';
  updated_at: string; // '2023-07-24T20:38:56.192+10:00';
  user: UserAPI;
  meta: any; //{};
}
