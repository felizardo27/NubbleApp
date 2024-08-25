import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useSearchHistory, useSearchHistoryService} from '@services';

import {Box, Icon, ProfileUser, Text} from '@components';
import {User} from '@domain';

export function SearchHistory() {
  const uerList = useSearchHistory();
  const {removeUser} = useSearchHistoryService();

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        avatarProps={{
          size: 48,
        }}
        user={item}
        RightComponent={
          <Icon
            name="trash"
            color="primary"
            onPress={() => removeUser(item.id)}
          />
        }
      />
    );
  }
  return (
    <Box>
      <FlatList
        data={uerList}
        ListHeaderComponent={
          <Text preset="headingMedium" mb="s16">
            Buscas recentes
          </Text>
        }
        renderItem={renderItem}
      />
    </Box>
  );
}
