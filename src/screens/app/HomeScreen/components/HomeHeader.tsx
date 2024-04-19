import React from 'react';

import {SimpleLogo} from '@brand';

import {Box, BoxProps, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  return (
    <Box {...$wrapper} style={{paddingTop: top}}>
      {/* <Box backgroundColor="carrotSecondary" width={70} height={16} /> */}
      <SimpleLogo width={70} />
      <Box flexDirection="row" gap="s24">
        <Icon name="search" />
        <Icon name="bellOn" />
        <Icon name="chatOn" />
      </Box>
    </Box>
  );
}

const $wrapper: BoxProps = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingHorizontal: 's24',
  paddingBottom: 's24',
};
