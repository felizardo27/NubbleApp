import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useAuthCredentials} from '@services';

import {Box, PostItem, Screen} from '@components';
import {PostComment, usePostCommentList, usePostGetById} from '@domain';
import {useAppSafeArea} from '@hooks';
import {AppScreenProps} from '@routes';

import {
  PostCommentItem,
  PostCommentBottom,
  PostCommentTextMessage,
} from './components/';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  const postAuthorId = route.params.postAuthorId;
  const showPost = route.params.showPost || false;
  const {list, fetchNextPage, hasNextPage} = usePostCommentList(postId);
  const {userId} = useAuthCredentials();
  const {bottom} = useAppSafeArea();
  const {post} = usePostGetById(postId, showPost);

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return (
      <PostCommentItem
        postId={postId}
        postComment={item}
        userId={userId}
        postAuthorId={postAuthorId}
      />
    );
  }

  return (
    <Screen
      noPaddingHorizontal
      flex={1}
      title={post ? 'Post' : 'Comentários'}
      canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          ListHeaderComponent={
            post && <PostItem hideCommentAction post={post} />
          }
          ListFooterComponent={
            <PostCommentBottom
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
            />
          }
          ListFooterComponentStyle={{paddingBottom: bottom}}
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
}
