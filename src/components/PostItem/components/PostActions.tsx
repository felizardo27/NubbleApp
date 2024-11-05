import React from 'react';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';
import {Post} from '@domain';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};

export function PostActions({post, hideCommentAction}: Props) {
  function likePost() {}

  function navigateToComment() {}

  function favoritePost() {}

  return (
    <Box mt="s16" flexDirection="row">
      <Item
        disable={hideCommentAction}
        marked={true}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={post.reactionCount}
        onPress={likePost}
      />
      <Item
        disable={hideCommentAction}
        marked={false}
        icon={{
          default: 'comment',
          marked: 'comment',
        }}
        text={post.commentCount}
        onPress={navigateToComment}
      />
      <Item
        disable={hideCommentAction}
        marked={false}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={post.favoriteCount}
        onPress={favoritePost}
      />
    </Box>
  );
}

interface ItemProps {
  onPress: () => void;
  marked?: boolean;
  icon: {
    default: IconProps['name'];
    marked: IconProps['name'];
  };
  text: number;
  disable?: boolean;
}

function Item({onPress, icon, marked, text, disable}: ItemProps) {
  return (
    <TouchableOpacityBox
      disabled={disable}
      flexDirection="row"
      alignItems="center"
      mr="s24"
      onPress={onPress}>
      <Icon
        name={marked ? icon.marked : icon.default}
        color={marked ? 'marked' : undefined}
      />
      {text > 0 && (
        <Text preset="paragraphSmall" bold ml="s4">
          {text}
        </Text>
      )}
    </TouchableOpacityBox>
  );
}
