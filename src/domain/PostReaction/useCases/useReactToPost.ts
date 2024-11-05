import {Post, PostReactionType, postService} from '@domain';

type Params = {
  post: Post;
  postReactionType: PostReactionType;
};

export function useReactToPost({post, postReactionType}: Params) {
  const hasReact = postService.hasReactToPost(post.reactions, postReactionType);

  return {
    hasReact,
  };
}
