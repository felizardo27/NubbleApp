import React from 'react';

import {Box, ProfileAvatar, Text} from '@components';
import {PostComment} from '@domain';

interface Props {
  postComment: PostComment;
}

export function PostCommentItem({postComment}: Props) {
  return (
    <Box
      mb="s16"
      flexDirection="row"
      alignItems="center"
      justifyContent="flex-start">
      <Box>
        <ProfileAvatar imageURL={postComment.author.profileURL} />
      </Box>
      <Box ml="s12" flex={1}>
        <Text preset="paragraphSmall" bold>
          {postComment.author.userName}
        </Text>
        <Text preset="paragraphSmall" color="gray1">
          {postComment.message} - {postComment.createdAtRelative}
        </Text>
      </Box>
    </Box>
  );
}
