import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function EditEmailScreen({}: AppScreenProps<'EditEmailScreen'>) {
  return (
    <Screen canGoBack title="Editar E-mail">
      <Text>Edit Email</Text>
    </Screen>
  );
}
