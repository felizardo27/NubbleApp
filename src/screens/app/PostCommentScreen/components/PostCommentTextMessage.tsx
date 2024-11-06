import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {Box, TextMessage} from '@components';
import {usePostCommentCreate} from '@domain';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({postId}: Props) {
  const [message, setMessage] = useState('');
  const {createComment} = usePostCommentCreate(postId, {
    onSuccess: () => {
      setMessage('');
      Keyboard.dismiss();
    },
  });

  return (
    <Box paddingHorizontal="s24">
      <TextMessage
        placeholder="Adicione um comentário"
        onPressSend={createComment}
        value={message}
        onChangeText={setMessage}
      />
    </Box>
  );
}
