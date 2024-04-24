export interface PostComment {
  id: number;
  message: string;
  createdAt: string;
  author: {
    id: number;
    profileURL: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; // 115;
  message: string; // 'Verecundia nulla vicinus.';
  user_id: number; // 6;
  post_id: number; // 1;
  created_at: string; // '2024-04-21T05:26:52.000-03:00';
  updated_at: string; // '2024-04-23T21:35:58.232-03:00';
  user: {
    id: number; // 6;
    first_name: string; // 'Samuel';
    last_name: string; // 'Vilar';
    username: string; // samuelvilar';
    email: string; // 'samu.vilar@coffstack.com';
    profile_url: string; // 'https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/5-samuel.png';
    is_online: boolean; // false;
    full_name: string; // 'Samuel Vilar';
  };
}
