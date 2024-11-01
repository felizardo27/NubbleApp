import React from 'react';
import {Image, ListRenderItemInfo} from 'react-native';

import {QueryKeys} from '@infra';

import {InfinityScrollLists, Screen} from '@components';
import {PostReaction, postReactionService} from '@domain';
import {AppTabScreenProps} from '@routes';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <Image
        source={{uri: item.post.imageURL}}
        style={{width: 300, height: 300}}
      />
    );
  }

  return (
    <Screen flex={1} title="Favoritos">
      <InfinityScrollLists
        renderItem={renderItem}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        queryKey={QueryKeys.FavoriteList}
        emptyListProps={{
          emptyMessage: 'Não há favoritos',
          errorMessage: 'Erro ao carregar os favoritos 😢',
        }}
      />
    </Screen>
  );
}
