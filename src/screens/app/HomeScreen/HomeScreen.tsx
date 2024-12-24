import React from 'react';
import {ListRenderItemInfo, StyleProp, ViewStyle} from 'react-native';

import {QueryKeys} from '@infra';

import {InfinityScrollLists, PostItem, Screen} from '@components';
import {Post, postService} from '@domain';
import {AppTabScreenProps} from '@routes';

import {HomeHeader} from './components/HomeHeader';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function HomeScreen({navigation}: AppTabScreenProps<'HomeScreen'>) {
  function renderItem({item}: ListRenderItemInfo<Post>) {
    return <PostItem post={item} />;
  }

  return (
    <Screen style={$screen}>
      <InfinityScrollLists
        queryKey={[QueryKeys.PostList]}
        renderItem={renderItem}
        getList={postService.getList}
        flatListProps={{ListHeaderComponent: <HomeHeader />}}
      />
    </Screen>
  );
}

const $screen: StyleProp<ViewStyle> = {
  flex: 1,
  paddingTop: 0,
  paddingBottom: 0,
  paddingHorizontal: 0,
};
