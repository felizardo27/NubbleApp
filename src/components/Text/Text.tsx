import React from 'react';
import {Text as RNText, TextProps} from 'react-native';

export function Text({children, ...rest}: TextProps) {
  return <RNText {...rest}>{children}</RNText>;
}
