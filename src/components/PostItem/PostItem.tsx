import React from 'react';

import {Box, PostHeader, PostImage, PostActions, PostBottom} from '@components';
import {Post} from '@domain';

interface Props {
  post: Post;
}

export function PostItem({post}: Props) {
  return (
    <Box paddingHorizontal="s24" marginBottom="s24">
      <PostHeader author={post.author} />
      <PostImage imageURL={post.imageURL} />
      <PostActions
        reactionCount={post.reactionCount}
        commentCount={post.commentCount}
        favoriteCount={post.favoriteCount}
      />
      <PostBottom
        author={post.author}
        commentCount={post.commentCount}
        text={post.text}
        id={post.id}
      />
    </Box>
  );
}
