import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {Box, Screen} from '@components';
import {PostComment, usePostCommentList} from '@domain';
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
  const {list, fetchNexPage, hasNextPage} = usePostCommentList(postId);

  const {bottom} = useAppSafeArea();

  function renderItem({item}: ListRenderItemInfo<PostComment>) {
    return <PostCommentItem postComment={item} />;
  }

  return (
    <Screen flex={1} title="Comentários" canGoBack>
      <Box flex={1} justifyContent="space-between">
        <FlatList
          showsVerticalScrollIndicator={false}
          data={list}
          renderItem={renderItem}
          ListFooterComponent={
            <PostCommentBottom
              hasNextPage={hasNextPage}
              fetchNexPage={fetchNexPage}
            />
          }
          ListFooterComponentStyle={{paddingBottom: bottom}}
        />
        <PostCommentTextMessage postId={postId} />
      </Box>
    </Screen>
  );
}
