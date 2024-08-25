import React, {useState} from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {useSearchHistoryService} from '@services';

import {Icon, ProfileUser, Screen, TextInput} from '@components';
import {User, useUserSearch} from '@domain';
import {useDebounce} from '@hooks';
import {AppScreenProps} from '@routes';

import {SearchHistory} from './components/SearchHistory';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('');
  const searchDebounce = useDebounce(search);

  const {list} = useUserSearch(searchDebounce);
  const {addUser} = useSearchHistoryService();

  function renderItem({item}: ListRenderItemInfo<User>) {
    return (
      <ProfileUser
        onPress={() => addUser(item)}
        user={item}
        avatarProps={{
          size: 48,
        }}
      />
    );
  }

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Digite sua busca"
          value={search}
          onChangeText={setSearch}
          leftComponent={<Icon name="search" color="gray3" size={16} />}
        />
      }>
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          renderItem={renderItem}
          keyExtractor={item => item.username}
        />
      )}
    </Screen>
  );
}
