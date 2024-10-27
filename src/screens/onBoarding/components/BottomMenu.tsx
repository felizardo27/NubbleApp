import React from 'react';

import {Box, Icon, PressableBox, Text} from '@components';

import {OnboardingPageProps} from './OnboardingPage';

type BottomMenuProps = Pick<
  OnboardingPageProps,
  'onPressNext' | 'onPressSkip'
> & {
  isLast: boolean;
};
export function BottomMenu({
  onPressNext,
  onPressSkip,
  isLast,
}: BottomMenuProps) {
  const nexText = isLast ? 'Começar' : 'Próximo';
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <PressableBox onPress={onPressSkip} hitSlop={10}>
        <Text color="gray2" semiBold>
          Pular
        </Text>
      </PressableBox>
      <PressableBox onPress={onPressNext} flexDirection="row">
        <Text mr="s4" bold>
          {nexText}
        </Text>
        <Icon name="arrowRight" color="carrotSecondary" />
      </PressableBox>
    </Box>
  );
}
