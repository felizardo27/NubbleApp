import React from 'react';
import {
  Text as RNText,
  TextProps as RNTextProps,
  TextStyle,
} from 'react-native';

interface TextProps extends RNTextProps {
  preset?: textVariants;
  bold?: boolean;
  italic?: boolean;
  semiBold?: boolean;
}

export function Text({
  children,
  preset = 'paragraphMedium',
  style,
  bold,
  italic,
  semiBold,
  ...rest
}: TextProps) {
  const fontFamily = getFontFamily(preset, bold, italic, semiBold);
  return (
    <RNText style={[$fontSizes[preset], {fontFamily}, style]} {...rest}>
      {children}
    </RNText>
  );
}

function getFontFamily(
  preset: textVariants,
  bold?: boolean,
  italic?: boolean,
  semiBold?: boolean,
) {
  if (
    preset === 'headingLarge' ||
    preset === 'headingMedium' ||
    preset === 'headingSmall'
  ) {
    return italic ? $fontFamily.BoldItalic : $fontFamily.Bold;
  }
  switch (true) {
    case bold && italic:
      return $fontFamily.BoldItalic;
    case bold:
      return $fontFamily.Bold;
    case semiBold && italic:
      return $fontFamily.MediumItalic;
    case semiBold:
      return $fontFamily.Medium;
    case italic:
      return $fontFamily.Italic;
    default:
      return $fontFamily.Regular;
  }
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

const $fontSizes: Record<textVariants, TextStyle> = {
  headingLarge: {fontSize: 38, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

const $fontFamily = {
  Black: 'Satoshi-Black',
  BlackItalic: 'Satoshi-BlackItalic',
  Bold: 'Satoshi-Bold',
  BoldItalic: 'Satoshi-BoldItalic',
  Italic: 'Satoshi-Italic',
  Light: 'Satoshi-Light',
  LightItalic: 'Satoshi-LightItalic',
  Medium: 'Satoshi-Medium',
  MediumItalic: 'Satoshi-MediumItalic',
  Regular: 'Satoshi-Regular',
};
