import React, {ReactElement} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {render, RenderOptions} from '@testing-library/react-native';

import {theme} from '@theme';

const queryClient = new QueryClient({
  logger: {
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
    mutations: {
      retry: false,
      cacheTime: Infinity,
    },
  },
});

export const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>{children}</NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const customRender = (
  component: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(component, {wrapper: AllTheProviders, ...options});

export * from '@testing-library/react-native';
export {customRender as render};
