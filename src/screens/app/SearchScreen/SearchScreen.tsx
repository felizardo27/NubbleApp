import React, {useState} from 'react';

import {Icon, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';
import {useDebounce} from '@hooks';
import {useUserSearch} from '@domain';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('');
  const searchDebounce = useDebounce(search);

  const {list} = useUserSearch(searchDebounce);

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
      {list.map(user => (
        <Text key={user.id}>{user.username}</Text>
      ))}
    </Screen>
  );
}
