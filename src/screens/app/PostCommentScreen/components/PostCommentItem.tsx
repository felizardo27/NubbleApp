import React from 'react';
import {Alert} from 'react-native';

import {Box, ProfileAvatar, Text, TouchableOpacityBox} from '@components';
import {PostComment, usePostCommentRemove} from '@domain';

interface Props {
  postComment: PostComment;
}

export function PostCommentItem({postComment}: Props) {
  const {mutate} = usePostCommentRemove();

  function confirmRemove() {
    Alert.alert('Deseja remover o comentário?', 'Pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  }

  return (
    <TouchableOpacityBox onLongPress={confirmRemove}>
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
    </TouchableOpacityBox>
  );
}
