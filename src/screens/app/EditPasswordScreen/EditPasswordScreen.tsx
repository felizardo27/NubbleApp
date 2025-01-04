import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function EditPasswordScreen({}: AppScreenProps<'EditPasswordScreen'>) {
  return (
    <Screen canGoBack title="Editar Senha">
      <Text>Edit Password</Text>
    </Screen>
  );
}
