import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

import {OnboardingPageProps} from './OnboardingPage';

export function BottomMenu({
  onPressNext,
  onPressSkip,
}: Pick<OnboardingPageProps, 'onPressNext' | 'onPressSkip'>) {
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <PressableBox onPress={onPressSkip} hitSlop={10}>
        <Text>Pular</Text>
      </PressableBox>
      <PressableBox onPress={onPressNext} flexDirection="row">
        <Text mr="s4" semiBold>
          Próximo
        </Text>
        <Icon name="arrowRight" />
      </PressableBox>
    </Box>
  );
}
