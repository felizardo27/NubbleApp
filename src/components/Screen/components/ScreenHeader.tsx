import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon, ScreenProps, Text, TouchableOpacityBox} from '@components';

const ICON_SIZE = 20;
type Props = Pick<ScreenProps, 'title' | 'canGoBack' | 'HeaderComponent'>;

export function ScreenHeader({canGoBack, title, HeaderComponent}: Props) {
  const navigation = useNavigation();

  const showBackLabel = !title && !HeaderComponent;

  return (
    <Box flexDirection="row" alignItems="center" mb="s24">
      {canGoBack && (
        <TouchableOpacityBox
          flexDirection="row"
          alignItems="center"
          mr="s10"
          onPress={navigation.goBack}>
          <Icon name="arrowLeft" color="primary" size={ICON_SIZE} />
          {showBackLabel && (
            <Text preset="paragraphMedium" semiBold ml="s8">
              Voltar
            </Text>
          )}
        </TouchableOpacityBox>
      )}
      {HeaderComponent}
      {title && <Text preset="headingSmall">{title}</Text>}
      {title && <Box width={ICON_SIZE} />}
    </Box>
  );
}
