import React from 'react';

import {QueryKeys} from '@infra';
import {useToastService} from '@services';

import {UserListTemplate} from '@components';
import {followService, useRemoveFollow} from '@domain';
import {AppScreenProps} from '@routes';

export function MyFollowersScreen({}: AppScreenProps<'MyFollowersScreen'>) {
  const {showToast} = useToastService();
  const {removeFollow} = useRemoveFollow({
    onSuccess: () => {
      showToast({
        message: 'Seguidor removido',
        type: 'success',
        position: 'bottom',
      });
    },
  });
  return (
    <UserListTemplate
      screenTitle="Seguidores"
      totalText="seguindo"
      getUserList={followService.getMyFollowersList}
      queryKey={QueryKeys.MyFollowersList}
      emptyMessage="Você ainda não possui nenhum seguidor"
      button={{
        title: 'Remover',
        onPress: followUser => removeFollow({followId: followUser.followId}),
      }}
    />
  );
}
