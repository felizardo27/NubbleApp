import React from 'react';

import {Box} from '@components';

export function OnboardingPage() {
  return (
    <Box flex={1} bg="background">
      <Box flex={5} bg="error" />
      <Box flex={4} bg="carrotSecondary" />
      <Box flex={1} bg="success" />
    </Box>
  );
}
