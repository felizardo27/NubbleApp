import React from 'react';

import {Box} from '@components';

import {ImageHeader} from './ImageHeader';

export function OnboardingPage() {
  return (
    <Box flex={1} bg="background">
      <Box flex={5}>
        <ImageHeader />
      </Box>
      <Box flex={4} bg="carrotSecondary" />
      <Box flex={1} bg="success" />
    </Box>
  );
}
