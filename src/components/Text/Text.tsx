import React from 'react';
import {Text as RNText, TextProps, TextStyle} from 'react-native';

export function Text({children, ...rest}: TextProps) {
  return (
    <RNText style={FontSizes.headingLarge} {...rest}>
      {children}
    </RNText>
  );
}

type textVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

const FontSizes: Record<textVariants, TextStyle> = {
  headingLarge: {fontSize: 38, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};
