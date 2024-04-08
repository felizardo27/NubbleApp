import React from 'react';

import {AppScreenProps} from 'src/routes/navigationTypes';

import {Screen, Text} from '@components';

// type ScreenProps = NativeStackScreenProps<AppStackParamList, 'SettingsScreen'>;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
    </Screen>
  );
}
