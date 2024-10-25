import React from 'react';

import {Box, PressableBox} from '../Box/Box';

export type RadioButtonProps = {
  isSelected: boolean;
  onPress: () => void;
};

export function RadioButton({isSelected, onPress}: RadioButtonProps) {
  return (
    <PressableBox
      hitSlop={10}
      onPress={onPress}
      width={20}
      height={20}
      borderRadius="s12"
      borderWidth={isSelected ? 2 : 1}
      borderColor={isSelected ? 'primary' : 'gray4'}
      alignItems="center"
      justifyContent="center">
      <Box
        width={12}
        height={12}
        borderRadius="s12"
        backgroundColor={isSelected ? 'primary' : undefined}
      />
    </PressableBox>
  );
}
