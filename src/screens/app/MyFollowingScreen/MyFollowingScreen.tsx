import React, {useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {QueryKeys} from '@infra';

import {
  Button,
  InfinityScrollLists,
  ProfileUser,
  Screen,
  Text,
} from '@components';
import {followService, FollowUser} from '@domain';
import {AppScreenProps} from '@routes';

export function MyFollowingScreen({}: AppScreenProps<'MyFollowingScreen'>) {
  const [total, setTotal] = useState<number | null>(null);

  function renderItem({item}: ListRenderItemInfo<FollowUser>) {
    return (
      <ProfileUser
        user={item}
        RightComponent={<Button title="Seguindo" preset="gray" />}
      />
    );
  }

  function renderHeaderItem() {
    if (!total) {
      return null;
    }

    return (
      <Text semiBold preset="paragraphSmall" color="primary" mb="s24">
        {total} seguindo
      </Text>
    );
  }

  async function getList(page: number) {
    const response = await followService.geMyFollowingList(page);
    setTotal(response.meta.total);
    return response;
  }

  return (
    <Screen flex={1} canGoBack title="Seguindo">
      <InfinityScrollLists
        renderItem={renderItem}
        getList={getList}
        queryKey={[QueryKeys.MyFollowingList]}
        flatListProps={{
          ListHeaderComponent: renderHeaderItem,
        }}
      />
    </Screen>
  );
}
