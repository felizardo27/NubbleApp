import React from 'react';
import {Dimensions, Image, ListRenderItemInfo, Pressable} from 'react-native';

import {QueryKeys} from '@infra';

import {InfinityScrollLists, Screen, Text} from '@components';
import {PostReaction, postReactionService} from '@domain';
import {useAppNavigation} from '@hooks';
import {AppTabScreenProps} from '@routes';

const NUM_COLUMNS = 2;
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_PADDING = 24;
const ITEM_MARGIN = 16;

const ITEM_WITH =
  (SCREEN_WIDTH - ITEM_MARGIN - SCREEN_PADDING * 2) / NUM_COLUMNS;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function FavoriteScreen(props: AppTabScreenProps<'FavoriteScreen'>) {
  const navigate = useAppNavigation();

  function renderItem({item}: ListRenderItemInfo<PostReaction>) {
    return (
      <Pressable
        onPress={() =>
          navigate.toPostDetails({
            postId: item.post.id,
            postAuthorId: item.author.id,
          })
        }>
        <Image
          source={{uri: item.post.imageURL}}
          style={{width: ITEM_WITH, height: ITEM_WITH}}
        />
        <Text semiBold mt="s4">
          {item.author.username}
        </Text>
      </Pressable>
    );
  }

  return (
    <Screen flex={1} title="Favoritos">
      <InfinityScrollLists
        renderItem={renderItem}
        getList={page => postReactionService.getMyReactions('favorite', page)}
        queryKey={[QueryKeys.FavoriteList]}
        flatListProps={{
          numColumns: NUM_COLUMNS,
          columnWrapperStyle: {columnGap: ITEM_MARGIN},
          contentContainerStyle: {rowGap: SCREEN_PADDING},
        }}
        emptyListProps={{
          emptyMessage: 'Não há favoritos',
          errorMessage: 'Erro ao carregar os favoritos 😢',
        }}
      />
    </Screen>
  );
}
