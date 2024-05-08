import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';

import {useToast, useToastService} from '@services';

import {$shadowProps} from '@theme';

import {Box, BoxProps} from '../Box/Box';
import {Icon} from '../Icon/Icon';
import {Text, TextProps} from '../Text/Text';

const MAX_WIDTH = Dimensions.get('window').width * 0.9;

export function Toast() {
  const toast = useToast();
  const {hideToast} = useToastService();

  useEffect(() => {
    setTimeout(() => {
      hideToast();
    }, 2000);
  }, [toast, hideToast]);

  if (!toast) {
    return null;
  }

  return (
    <Box top={100} {...$boxStyle}>
      <Icon name="checkRound" color="success" size={32} />
      <Text {...$textStyle} preset="paragraphMedium" bold ml="s16">
        {toast?.message}
      </Text>
    </Box>
  );
}

const $boxStyle: BoxProps = {
  position: 'absolute',
  alignSelf: 'center',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  backgroundColor: 'background',
  padding: 's16',
  borderRadius: 's16',
  opacity: 0.95,
  maxWidth: MAX_WIDTH,
  style: {...$shadowProps},
};

const $textStyle: TextProps = {
  style: {flexShrink: 1},
};
