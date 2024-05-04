import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {theme} from '@theme';

import {Router} from './src/routes/Routes';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
        <Toast />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
