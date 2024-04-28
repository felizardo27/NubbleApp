import React from 'react';

import {Text, TouchableOpacityBox} from '@components';

interface Props {
  fetchNexPage: () => void;
  hasNextPage: boolean;
}

export function PostCommentBottom({fetchNexPage, hasNextPage}: Props) {
  if (hasNextPage) {
    return (
      <TouchableOpacityBox onPress={fetchNexPage} mb="s20">
        <Text color="primary" bold textAlign="center">
          Ver mais
        </Text>
      </TouchableOpacityBox>
    );
  } else {
    return null;
  }
}
