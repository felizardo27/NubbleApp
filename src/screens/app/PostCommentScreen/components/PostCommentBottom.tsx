import React from 'react';

import {Text, TouchableOpacityBox} from '@components';

interface Props {
  fetchNextPage: () => void;
  hasNextPage: boolean;
}

export function PostCommentBottom({fetchNextPage, hasNextPage}: Props) {
  if (hasNextPage) {
    return (
      <TouchableOpacityBox onPress={fetchNextPage} mb="s20">
        <Text color="primary" bold textAlign="center">
          Ver mais
        </Text>
      </TouchableOpacityBox>
    );
  }

  return null;
}
