import React from 'react';

import {QueryKeys} from '@infra';

import {Box, Icon, IconProps, Text, TouchableOpacityBox} from '@components';
import {Post, useReactToPost} from '@domain';
import {useAppNavigation} from '@hooks';

type Props = {
  post: Post;
  hideCommentAction?: boolean;
};

export function PostActions({post, hideCommentAction}: Props) {
  const navigate = useAppNavigation();

  const likeReaction = useReactToPost({post, postReactionType: 'like'});
  const favoriteReaction = useReactToPost({
    post,
    postReactionType: 'favorite',
    queryKeys: [QueryKeys.FavoriteList],
  });

  function navigateToComment() {
    navigate.toPostComment({
      postId: post.id,
      postAuthorId: post.author.id,
    });
  }

  return (
    <Box mt="s16" flexDirection="row">
      <Item
        marked={likeReaction.hasReacted}
        disable={hideCommentAction}
        icon={{
          default: 'heart',
          marked: 'heartFill',
        }}
        text={likeReaction.reactionCount}
        onPress={likeReaction.reactToPost}
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
        marked={favoriteReaction.hasReacted}
        disable={hideCommentAction}
        icon={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        text={favoriteReaction.reactionCount}
        onPress={favoriteReaction.reactToPost}
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
