import React, {useState} from 'react';
import {Keyboard} from 'react-native';

import {TextMessage} from '@components';
import {usePostCommentCreate} from '@domain';

interface Props {
  postId: number;
}

export function PostCommentTextMessage({postId}: Props) {
  const {createComment} = usePostCommentCreate(postId);
  const [message, setMessage] = useState('');

  async function onPressSend() {
    await createComment(message);
    setMessage('');
    Keyboard.dismiss();
  }

  return (
    <TextMessage
      placeholder="Adicione um comentário"
      onPressSend={onPressSend}
      value={message}
      onChangeText={setMessage}
    />
  );
}
