export interface Post {
  id: number;
  text: string;
  author: {
    profileURL: string;
    name: string;
    userName: string;
  };
  imageURL: string;
  reactionCount: number;
  commentCount: number;
  favoriteCount: number;
}

export interface PostAPI {
  id: number; // 1,
  text: string; // "Bom dia!",
  user_id: number; // 1,
  image_url: string; // "https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg",
  is_fixed: boolean; // false,
  is_activated: boolean; // true,
  created_at: string; // "2024-04-19T21:23:32.177-03:00",
  updated_at: string; // "2024-04-19T21:23:32.181-03:00",
  user: {
    id: number; // 1,
    first_name: string; // "Maria",
    last_name: string; // "Julia",
    username: string; // "mariajulia",
    email: string; // "mariajulia@coffstack.com",
    profile_url: string; // "https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/1-maria.png",
    is_online: boolean; //false,
    full_name: string; // "Maria Julia"
  };
  status: string; // "published",
  meta: {
    like_count: string; // "10",
    favorite_count: string; // "0",
    comments_count: string; // "2"
  };
}
