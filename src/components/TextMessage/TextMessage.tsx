import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';

import {useAppTheme} from '@hooks';

import {Box} from '../Box/Box';
import {Text} from '../Text/Text';
import {$textInputStyle} from '../TextInput/TextInput';

interface TextMessageProps extends RNTextInputProps {
  onPressSend: () => void;
}

export function TextMessage({
  onPressSend,
  value,
  ...rnTextInputProps
}: TextMessageProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  const sendIsDisabled = value?.trim().length === 0;

  return (
    <Pressable onPress={focusInput}>
      <Box
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        backgroundColor="gray5"
        paddingVertical="s14"
        paddingHorizontal="s16"
        borderRadius="s12">
        <RNTextInput
          ref={inputRef}
          placeholderTextColor={colors.gray2}
          style={[$textInputStyle, {color: colors.grayBlack}]}
          {...rnTextInputProps}
        />
        <Pressable disabled={sendIsDisabled} onPress={onPressSend}>
          <Text color={sendIsDisabled ? 'gray1' : 'primary'} bold>
            Enviar
          </Text>
        </Pressable>
      </Box>
    </Pressable>
  );
}
