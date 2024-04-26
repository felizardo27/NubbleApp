import React from 'react';

import {Box, Screen, Text} from '@components';
import {usePostCommentList} from '@domain';
import {AppScreenProps} from '@routes';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  console.log(postId);
  const {} = usePostCommentList(postId);
  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}
