import React from 'react';

import {QueryKeys} from '@infra';

import {UserListTemplate} from '@components';
import {followService} from '@domain';
import {AppScreenProps} from '@routes';

export function MyFollowersScreen({}: AppScreenProps<'MyFollowersScreen'>) {
  return (
    <UserListTemplate
      screenTitle="Seguidores"
      totalText="seguindo"
      getUserList={followService.getMyFollowersList}
      queryKey={QueryKeys.MyFollowersList}
      emptyMessage="Você ainda não possui nenhum seguidor"
      button={{
        title: 'Remover',
        onPress: followUser => console.log(followUser),
      }}
    />
  );
}
