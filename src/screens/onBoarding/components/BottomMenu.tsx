import React from 'react';

import {Box, Icon, Text} from '@components';

export function BottomMenu() {
  return (
    <Box flexDirection="row" alignItems="center" justifyContent="space-between">
      <Text>Pular</Text>
      <Box flexDirection="row">
        <Text mr="s4" semiBold>
          Próximo
        </Text>
        <Icon name="arrowRight" />
      </Box>
    </Box>
  );
}
