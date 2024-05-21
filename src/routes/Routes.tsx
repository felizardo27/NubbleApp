import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {useAuthCredentials} from '@services';

import {AppStack, AuthStack} from '@routes';

export function Router() {
  const {authCredentials} = useAuthCredentials();
  console.log(authCredentials);
  return (
    <NavigationContainer>
      {authCredentials ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
