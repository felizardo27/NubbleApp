import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function MyFollowersScreen({}: AppScreenProps<'MyFollowersScreen'>) {
  return (
    <Screen title="Seguidores">
      <Text>Seguidores</Text>
    </Screen>
  );
}
