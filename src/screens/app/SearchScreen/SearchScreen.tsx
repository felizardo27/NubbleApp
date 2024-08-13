import React, {useState} from 'react';

import {Icon, Screen, Text, TextInput} from '@components';
import {AppScreenProps} from '@routes';

export function SearchScreen({}: AppScreenProps<'SearchScreen'>) {
  const [search, setSearch] = useState('');

  return (
    <Screen
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          leftComponent={<Icon name="search" color="gray3" size={16} />}
        />
      }>
      <Text>Search Screen</Text>
    </Screen>
  );
}
