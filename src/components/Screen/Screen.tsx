import React from 'react';
import {Box} from '../Box/Box';

interface ScreenProps {
  children: React.ReactNode;
}

export function Screen({children}: ScreenProps) {
  return <Box padding="s24">{children}</Box>;
}
