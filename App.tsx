import React from 'react';

// import {ToastProvider} from '@services';

import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {theme} from '@theme';

import {Router} from './src/routes/Routes';
// import {AuthCredentialsProvider} from './src/services/authCredentials/Providers/AuthCredentialsProvider';
import {AuthCredentialsProvider} from './src/services/authCredentials/Providers/authCredentialsProvider';
import {initializeStorage, MMKVStorage} from './src/services/storage';

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
