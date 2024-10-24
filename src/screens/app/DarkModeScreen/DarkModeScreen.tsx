import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function DarkModeScreen({}: AppScreenProps<'DarkModeScreen'>) {
  return (
    <Screen canGoBack title="Modo Escuro">
      <Text>DarkMode</Text>
    </Screen>
  );
}
