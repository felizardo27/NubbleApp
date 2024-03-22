import React from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import {Box, BoxProps} from '../Box/Box';
import {Text} from '../Text/Text';

interface TextInputProps extends RNTextInputProps {
  label: string;
}

export function TextInput({label, ...rnTextInputProps}: TextInputProps) {
  return (
    <Box>
      <Text preset="paragraphMedium" mb="s4">
        {label}
      </Text>
      <Box {...$textInputContainer}>
        <RNTextInput {...rnTextInputProps} />
      </Box>
    </Box>
  );
}

const $textInputContainer: BoxProps = {
  borderWidth: 1,
  borderRadius: 's12',
  borderColor: 'gray4',
  padding: 's16',
};
