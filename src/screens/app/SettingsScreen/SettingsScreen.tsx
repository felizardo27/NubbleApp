import React from 'react';

import {Button, Screen, Text} from '@components';
import {AppScreenProps} from '@routes';

export function SettingsScreen({navigation}: AppScreenProps<'SettingsScreen'>) {
  return (
    <Screen canGoBack>
      <Text preset="headingSmall">Settings Screen</Text>
      <Button
        title="New Post"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'NewPostScreen',
          })
        }
      />
      <Button
        title="FavoriteScreen"
        mt="s10"
        onPress={() =>
          navigation.navigate('AppTabNavigator', {
            screen: 'FavoriteScreen',
          })
        }
      />
    </Screen>
  );
}
