import React from 'react';
import {Alert} from 'react-native';

import {useToastService} from '@services';

import {Box, ProfileAvatar, Text, TouchableOpacityBox} from '@components';
import {PostComment, postCommentService, usePostCommentRemove} from '@domain';

interface Props {
  postId: number;
  postComment: PostComment;
  userId: number | null;
  postAuthorId: number;
}

export function PostCommentItem({
  postId,
  postComment,
  userId,
  postAuthorId,
}: Props) {
  const {showToast} = useToastService();
  const {mutate} = usePostCommentRemove(postId, {
    onSuccess: () => {
      showToast({message: 'Cometário deletado', position: 'bottom'});
    },
    onError() {
      Alert.alert('Você não pode apagar esse comentário');
    },
  });

  const allowDelete = postCommentService.isAllowToDelete(
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
    <TouchableOpacityBox
      testID="post-comment-id"
      disabled={!allowDelete}
      onLongPress={confirmRemove}>
      <Box
        mb="s16"
        paddingHorizontal="s24"
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
          <Text preset="paragraphSmall" color="paragraph">
            {postComment.message} - {postComment.createdAtRelative}
          </Text>
        </Box>
      </Box>
    </TouchableOpacityBox>
  );
}
