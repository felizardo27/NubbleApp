import React from 'react';

import {Box, BoxProps} from '../Box/Box';

type ProgressIndicatorProps = BoxProps & {
  total: number;
  currentIndex: number;
};
export function ProgressIndicator({
  total,
  currentIndex,
  ...boxProps
}: ProgressIndicatorProps) {
  return (
    <Box flexDirection="row" alignItems="center" {...boxProps}>
      {Array.from({length: total}).map((_, index) => (
        <Box
          key={index}
          height={index === currentIndex ? 16 : 8}
          width={index === currentIndex ? 16 : 8}
          borderRadius="s12"
          backgroundColor={
            index === currentIndex ? 'primary' : 'onBackgroundGray1'
          }
          mr="s12"
        />
      ))}
    </Box>
  );
}
