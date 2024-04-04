import React from 'react';
import {ThemeProvider} from '@shopify/restyle';
import {theme} from '@theme';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Router} from './src/routes/Routes';

function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
