import {Post, PostReactionBase} from '@domain';

const postWithoutLike: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 5,
  favoriteCount: 2,
  reactionCount: 3,
  text: 'this is the text (post description)',
  author: {
    id: 2,
    name: 'Maria Julia',
    profileURL: 'https://url.com',
    userName: 'mariajulia',
  },
  reactions: [],
};

const postWithoutLikeResponse: PostReactionBase = {
  id: 4,
  emojiType: 'like',
  postId: postWithoutLike.id,
  userId: 1,
  createdAt: '2021-08-01T00:00:00Z',
  updatedAt: '2021-08-01T00:00:00Z',
  isChecked: true,
};

export const mockedPostWithoutLike = {
  post: postWithoutLike,
  response: postWithoutLikeResponse,
};
