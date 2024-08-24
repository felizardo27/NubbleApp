import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useSearchHistory} from '@services';

import {Box, ProfileUser, Text} from '@components';
import {User} from '@domain';

export function SearchHistory() {
  const uerList = useSearchHistory();

  function renderItem({item}: ListRenderItemInfo<User>) {
    return <ProfileUser user={item} />;
  }
  return (
    <Box>
      <FlatList
        data={uerList}
        ListHeaderComponent={
          <Text preset="headingMedium">Buscas recentes</Text>
        }
        renderItem={renderItem}
      />
    </Box>
  );
}
