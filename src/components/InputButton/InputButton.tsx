import React from 'react';

import {Box, PressableBox, PressableBoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text} from '../Text/Text';

type Props = {
  label: string;
  value: string;
} & PressableBoxProps;

export function InputButton({label, value, ...pressableProps}: Props) {
  return (
    <PressableBox {...pressableProps}>
      <Text preset="paragraphMedium" color="backgroundContrast" mb="s8">
        {label}
      </Text>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        borderBottomWidth={1}
        borderBottomColor="gray4"
        paddingBottom="s8">
        <Text color="gray2">{value}</Text>
        <Icon name="chevronRight" color="backgroundContrast" />
      </Box>
    </PressableBox>
  );
}
