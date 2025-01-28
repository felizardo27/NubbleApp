import React from 'react';

import {QueryKeys} from '@infra';

import {UserListTemplate} from '@components';
import {followService} from '@domain';
import {AppScreenProps} from '@routes';

export function MyFollowingScreen({}: AppScreenProps<'MyFollowingScreen'>) {
  return (
    <UserListTemplate
      screenTitle="Seguindo"
      totalText="seguindo"
      getUserList={followService.geMyFollowingList}
      queryKey={QueryKeys.MyFollowingList}
      emptyMessage="Você ainda não esta seguindo ninguém"
      button={{
        title: 'Seguindo',
        onPress: followUser => console.log(followUser),
      }}
    />
  );
}
