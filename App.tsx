import React from 'react';

// import {ToastProvider} from '@services';
import {
  AuthCredentialsProvider,
  initializeStorage,
  MMKVStorage,
} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {theme} from '@theme';

import {Router} from './src/routes/Routes';

initializeStorage(MMKVStorage);

const queryClient = new QueryClient();

function App() {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={theme}>
            {/* <ToastProvider> */}
            <Router />
            <Toast />
            {/* </ToastProvider> */}
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
