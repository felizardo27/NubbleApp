import React from 'react';
import {Dimensions} from 'react-native';

import {Box} from '@components';

import {OnboardingPageItem} from '../onboardingData';

import {BottomMenu} from './BottomMenu';
import {Content} from './Content';
import {ImageHeader} from './ImageHeader';

export type OnboardingPageProps = {
  pageItem: OnboardingPageItem;
  onPressNext: () => void;
  onPressSkip: () => void;
};

const SCREEN_WIDTH = Dimensions.get('screen').width;

export function OnboardingPage({
  pageItem,
  onPressNext,
  onPressSkip,
}: OnboardingPageProps) {
  return (
    <Box flex={1} bg="background" width={SCREEN_WIDTH}>
      <Box flex={4} bg="redError">
        <ImageHeader image={pageItem.image} />
      </Box>
      <Box flex={5} bg="carrotSecondary">
        <Content {...pageItem} />
      </Box>
      <Box flex={1} bg="success">
        <BottomMenu onPressNext={onPressNext} onPressSkip={onPressSkip} />
      </Box>
    </Box>
  );
}
