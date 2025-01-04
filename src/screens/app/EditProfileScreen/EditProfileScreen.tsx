import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function EditProfileScreen({}: AppScreenProps<'EditProfileScreen'>) {
  return (
    <Screen canGoBack title="Editar Perfil">
      <Text>Profile Screen</Text>
    </Screen>
  );
}
