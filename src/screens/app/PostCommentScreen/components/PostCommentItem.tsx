import React from 'react';
import {Alert} from 'react-native';

import {useToastService} from '@services';

import {Box, ProfileAvatar, Text, TouchableOpacityBox} from '@components';
import {PostComment, PostCommentService, usePostCommentRemove} from '@domain';

interface Props {
  postComment: PostComment;
  onRemoveComment: () => void;
  userId: number;
  postAuthorId: number;
}

export function PostCommentItem({
  postComment,
  onRemoveComment,
  userId,
  postAuthorId,
}: Props) {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove({
    onSuccess: () => {
      onRemoveComment();
      showToast({message: 'Cometário deletado'});
    },
    onError() {
      Alert.alert('Você não pode apagar esse comentário');
    },
  });

  const allowDelete = PostCommentService.isAllowToDelete(
    postComment,
    userId,
    postAuthorId,
  );

  function confirmRemove() {
    Alert.alert('Deseja remover o comentário?', 'Pressione confirmar', [
      {
        text: 'Confirmar',
        onPress: () => mutate({postCommentId: postComment.id}),
      },
      {
        text: 'Cancelar',
        style: 'destructive',
      },
    ]);
  }

  return (
    <TouchableOpacityBox disabled={!allowDelete} onLongPress={confirmRemove}>
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
