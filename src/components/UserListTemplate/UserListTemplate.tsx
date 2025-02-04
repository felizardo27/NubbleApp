import React, {useState} from 'react';
import {ListRenderItemInfo} from 'react-native';

import {QueryKeys} from '@infra';
import {Page} from '@types';

import {FollowUser} from '@domain';

import {Button} from '../Button/Button';
import {InfinityScrollLists} from '../InfinityScrollList/InfinityScrollList';
import {ProfileUser} from '../ProfileUser/ProfileUser';
import {Screen} from '../Screen/Screen';
import {Text} from '../Text/Text';

type Props = {
  getUserList: (page: number) => Promise<Page<FollowUser>>;
  screenTitle: string;
  totalText: string;
  emptyMessage: string;
  queryKey: QueryKeys;
  button: {
    title: string;
    onPress: (followUser: FollowUser) => void;
  };
};

export function UserListTemplate({
  getUserList,
  screenTitle,
  totalText,
  emptyMessage,
  queryKey,
  button,
}: Props) {
  const [total, setTotal] = useState<number | null>(null);

  function renderItem({item}: ListRenderItemInfo<FollowUser>) {
    return (
      <ProfileUser
        user={item}
        RightComponent={
          <Button
            title={button.title}
            preset="gray"
            onPress={() => button.onPress(item)}
          />
        }
      />
    );
  }

  function renderHeaderItem() {
    if (!total) {
      return null;
    }

    return (
      <Text semiBold preset="paragraphSmall" color="primary" mb="s24">
        {total} {totalText}
      </Text>
    );
  }

  async function getList(page: number) {
    const response = await getUserList(page);
    setTotal(response.meta.total);
    return response;
  }

  return (
    <Screen flex={1} canGoBack title={screenTitle}>
      <InfinityScrollLists
        renderItem={renderItem}
        getList={getList}
        queryKey={[queryKey]}
        flatListProps={{
          ListHeaderComponent: renderHeaderItem,
        }}
        emptyListProps={{
          emptyMessage: emptyMessage,
          errorMessage: 'Error ao carregar lista de usuários',
        }}
      />
    </Screen>
  );
}
