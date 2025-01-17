import React from 'react';

import {Box, Text} from '@components';
import {Post} from '@domain';
import {useAppNavigation} from '@hooks';

type Props = Pick<Post, 'author' | 'text' | 'commentCount' | 'id'> & {
  hideCommentAction?: boolean;
};

export function PostBottom({
  author,
  commentCount,
  text,
  id,
  hideCommentAction,
}: Props) {
  const navigate = useAppNavigation();

  const textComment = hideCommentAction ? null : getCommentText(commentCount);

  function navigateToPostCommentScreen() {
    navigate.toPostComment({
      postId: id,
      postAuthorId: author.id,
    });
  }

  return (
    <Box mt="s16">
      <Text bold preset="paragraphMedium">
        {author.userName}
      </Text>
      <Text semiBold preset="paragraphMedium" color="gray1">
        {text}
      </Text>
      {textComment && (
        <Text
          onPress={navigateToPostCommentScreen}
          bold
          preset="paragraphSmall"
          color="primary"
          mt="s8">
          {textComment}
        </Text>
      )}
    </Box>
  );
}

function getCommentText(commentCount: number): string | null {
  if (commentCount === 0) {
    return null;
  } else if (commentCount === 1) {
    return 'ver comentário';
  } else {
    return `ver ${commentCount} comentários`;
  }
}
