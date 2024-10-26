import React from 'react';

import {Box} from '@components';

import {onboardingPages} from '../onboardingData';

import {BottomMenu} from './BottomMenu';
import {Content} from './Content';
import {ImageHeader} from './ImageHeader';

export function OnboardingPage() {
  const page1 = onboardingPages[0];
  return (
    <Box flex={1} bg="background">
      <Box flex={4} bg="redError">
        <ImageHeader image={page1.image} />
      </Box>
      <Box flex={5} bg="carrotSecondary">
        <Content {...page1} />
      </Box>
      <Box flex={1} bg="success">
        <BottomMenu />
      </Box>
    </Box>
  );
}
