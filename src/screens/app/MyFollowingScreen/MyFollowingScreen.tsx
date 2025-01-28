import React from 'react';

import {Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function MyFollowingScreen({}: AppScreenProps<'MyFollowingScreen'>) {
  return (
    <Screen title="Seguindo">
      <Text>Seguindo</Text>
    </Screen>
  );
}
