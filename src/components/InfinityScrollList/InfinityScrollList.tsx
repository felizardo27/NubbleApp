import React, {useRef} from 'react';
import {FlatList, FlatListProps, RefreshControl} from 'react-native';

import {usePaginatedList} from '@infra';
import {useScrollToTop} from '@react-navigation/native';

import {EmptyList, EmptyListProps} from './components/EmptyList';

type ItemTConstraints = {id: number | string};

type InfinityScrollListsProps<ItemT extends ItemTConstraints> = {
  queryKey: Parameters<typeof usePaginatedList<ItemT>>[0];
  getList: Parameters<typeof usePaginatedList<ItemT>>[1];
  renderItem: FlatListProps<ItemT>['renderItem'];
  flatListProps?: Omit<Partial<FlatListProps<ItemT>>, 'renderItem'>;
  emptyListProps?: Pick<EmptyListProps, 'emptyMessage' | 'errorMessage'>;
};

export function InfinityScrollLists<ItemT extends ItemTConstraints>({
  queryKey,
  getList,
  renderItem,
  flatListProps,
  emptyListProps,
}: InfinityScrollListsProps<ItemT>) {
  const {list, isError, isLoading, refresh, fetchNextPage} = usePaginatedList(
    queryKey,
    getList,
  );
  const flatListRef = useRef<FlatList<ItemT>>(null);
  useScrollToTop(flatListRef);

  return (
    <FlatList
      ref={flatListRef}
      showsVerticalScrollIndicator={false}
      data={list}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      refreshing={isLoading}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={refresh} />
      }
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.1}
      ListEmptyComponent={
        <EmptyList
          loading={isLoading}
          error={isError}
          refetch={refresh}
          {...emptyListProps}
        />
      }
      {...flatListProps}
      contentContainerStyle={[
        {
          flex: list.length === 0 ? 1 : undefined,
        },
        flatListProps?.contentContainerStyle,
      ]}
    />
  );
}
