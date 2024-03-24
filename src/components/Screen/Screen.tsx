import React from 'react';
import {Box} from '../Box/Box';
import {useAppSafeArea} from '../../hooks/useAppSafeArea';

interface ScreenProps {
  children: React.ReactNode;
}

export function Screen({children}: ScreenProps) {
  const {top} = useAppSafeArea();

  return (
    <Box padding="s24" style={{paddingTop: top}}>
      {children}
    </Box>
  );
}
