import React from 'react';

import {Icon, PressableBox, Text} from '@components';

export type MenuItemProps = {
  label: string;
  onPress: () => void;
};

export function MenuItem({label, onPress}: MenuItemProps) {
  return (
    <PressableBox
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingVertical="s16"
      onPress={onPress}>
      <Text>{label}</Text>
      <Icon name="chevronRight" />
    </PressableBox>
  );
}
