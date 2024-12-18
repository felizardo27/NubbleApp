import React from 'react';
import {FlatList, Image, ListRenderItemInfo} from 'react-native';

import {Post, usePosList, useUserGetById} from '@domain';

import {Box} from '../Box/Box';
import {ProfileAvatar} from '../ProfileAvatar/ProfileAvatar';
import {Screen} from '../Screen/Screen';
import {Text} from '../Text/Text';

type Props = {
  userId: number;
};

export function ProfileTemplate({userId}: Props) {
  const {user} = useUserGetById(userId);

  const {list} = usePosList();

  function renderItem({item}: ListRenderItemInfo<Post>) {
    return (
      <Image source={{uri: item.imageURL}} style={{width: 100, height: 100}} />
    );
  }

  function renderHeaderComponent() {
    return (
      <Box>
        <ProfileAvatar imageURL={user?.profileUrl} />
        <Text>{user?.fullName}</Text>
        <Text>@{user?.username}</Text>
      </Box>
    );
  }

  return (
    <Screen canGoBack flex={1}>
      <FlatList
        data={list}
        renderItem={renderItem}
        ListHeaderComponent={renderHeaderComponent}
      />
    </Screen>
  );
}
