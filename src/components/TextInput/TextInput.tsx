import React, {useRef} from 'react';
import {
  Pressable,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {$fontFamily, $fontSizes, Text} from '../Text/Text';
import {useAppTheme} from '../../hooks/useAppTheme';

interface TextInputProps extends RNTextInputProps {
  label: string;
}

export function TextInput({label, ...rnTextInputProps}: TextInputProps) {
  const {colors} = useAppTheme();
  const inputRef = useRef<RNTextInput>(null);

  function focusInput() {
    inputRef.current?.focus();
  }
  return (
    <Pressable onPress={focusInput}>
      <Box>
        <Text preset="paragraphMedium" mb="s4">
          {label}
        </Text>
        <Box {...$textInputContainer}>
          <RNTextInput
            ref={inputRef}
            placeholderTextColor={colors.gray2}
            {...rnTextInputProps}
            style={$textInputStyle}
          />
        </Box>
      </Box>
    </Pressable>
  );
}

const $textInputStyle: TextStyle = {
  fontFamily: $fontFamily.Regular,
  ...$fontSizes.paragraphMedium,
  padding: 0,
};

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  borderRadius: 's12',
  borderColor: 'gray4',
  padding: 's16',
};
