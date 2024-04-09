import React from 'react';

import {Button, Screen, Text} from '@components';
// import {AppScreenProps} from '@routes';

// export function HomeScreen({navigation}: AppScreenProps<'HomeScreen'>) {
export function HomeScreen() {
  return (
    <Screen>
      <Text preset="headingLarge">Home Screen</Text>
      <Button
        title="Settings"
        // onPress={() => navigation.navigate('SettingsScreen')}
      />
    </Screen>
  );
}
