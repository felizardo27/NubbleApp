import React from 'react';

import {Screen} from '@components';
import {useUserGetById} from '@domain';
import {AppScreenProps} from '@routes';

import {EditProfileHeader} from './components/EditProfileHeader';

export function EditProfileScreen({
  route,
}: AppScreenProps<'EditProfileScreen'>) {
  const {user} = useUserGetById(route.params.userId);

  return (
    <Screen canGoBack title="Editar Perfil">
      <EditProfileHeader user={user} />
    </Screen>
  );
}
