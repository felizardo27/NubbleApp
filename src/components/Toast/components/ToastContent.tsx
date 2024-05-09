/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {Dimensions} from 'react-native';

import {Toast, ToastPosition, ToastType} from '@services';

import {Box, BoxProps, Icon, IconProps, Text, TextProps} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  toast: Toast;
}
const MAX_WIDTH = Dimensions.get('window').width * 0.9;

export function ToastContent({toast}: Props) {
  const position: ToastPosition = toast?.position || 'top';
  const type: ToastType = toast?.type || 'success';

  return (
    <Box {...$boxStyle} style={[{[position]: 100}, $shadowProps]}>
      <Icon {...mapTypeToIcon[type]} />
      <Text {...$textStyle} preset="paragraphMedium" bold ml="s16">
        {toast?.message}
      </Text>
    </Box>
  );
}

const mapTypeToIcon: Record<ToastType, IconProps> = {
  success: {
    color: 'success',
    name: 'checkRound',
    size: 32,
  },
  error: {
    color: 'redError',
    name: 'errorRound',
    size: 32,
  },
};

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
};

const $textStyle: TextProps = {
  style: {flexShrink: 1},
};
