import React from 'react';

import {QueryKeys} from '@infra';
import {useToastService} from '@services';

import {UserListTemplate} from '@components';
import {followService, useRemoveFollow} from '@domain';
import {AppScreenProps} from '@routes';

export function MyFollowingScreen({}: AppScreenProps<'MyFollowingScreen'>) {
  const {showToast} = useToastService();
  const {removeFollow, undoRemoveFollow} = useRemoveFollow({
    onSuccess: () => {
      showToast({
        message: 'Deixou de seguir',
        type: 'success',
        position: 'bottom',
        action: {
          title: 'Desfazer',
          onPress: undoRemoveFollow,
        },
      });
    },
  });

  return (
    <UserListTemplate
      screenTitle="Seguindo"
      totalText="seguindo"
      getUserList={followService.geMyFollowingList}
      queryKey={QueryKeys.MyFollowingList}
      emptyMessage="Você ainda não esta seguindo ninguém"
      button={{
        title: 'Seguindo',
        onPress: followUser =>
          removeFollow({followId: followUser.followId, userId: followUser.id}),
      }}
    />
  );
}
