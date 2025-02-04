/* eslint-disable react/react-in-jsx-scope */
import {Dimensions} from 'react-native';

import {Toast, ToastType} from '@services';

import {Box, BoxProps, Icon, IconProps, Text, TextProps} from '@components';
import {$shadowProps} from '@theme';

interface Props {
  toast: Toast;
  hideToast: () => void;
}
const MAX_WIDTH = Dimensions.get('window').width * 0.9;

export function ToastContent({toast, hideToast}: Props) {
  const type: ToastType = toast?.type || 'success';

  return (
    <Box {...$boxStyle} style={$shadowProps}>
      <Icon {...mapTypeToIcon[type]} />
      <Text {...$textStyle} preset="paragraphMedium" bold ml="s16">
        {toast?.message}
      </Text>
      {toast?.action && (
        <Text
          ml="s8"
          color="marked"
          preset="paragraphMedium"
          bold
          onPress={() => {
            toast?.action?.onPress();
            hideToast();
          }}>
          {toast.action.title}
        </Text>
      )}
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
