import React from 'react';

import {Box, PostHeader, PostImage, PostActions} from '@components';
import {Post} from '@domain';

interface Props {
  post: Post;
}

export function PostItem({post}: Props) {
  return (
    <Box marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        reactionCount={post.reactionCount}
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />
    </Box>
  );
}
