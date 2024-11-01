import React from 'react';

import {QueryKeys} from '@infra';

import {InfinityScrollLists, Screen} from '@components';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
  return (
    <Screen flex={1} title="Favoritos">
      <InfinityScrollLists
        renderItem={{}}
        flatListProps={{}}
        queryKey={QueryKeys.FavoriteList}
        emptyListProps={{
          emptyMessage: 'Não há favoritos',
          errorMessage: 'Erro ao carregar os favoritos 😢',
        }}
      />
    </Screen>
  );
}
