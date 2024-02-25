import {createTheme} from '@shopify/restyle';

const pallete = {
  greenPrimary: '#074C4E',
  greenPrimaryLight: '#EAF6F6',
  carrotSecondary: '#F86F2D',
  carrotSecondaryLight: '#FAE6DD',
  greenSuccess: '#4ABC86',
  greenSuccessLight: '#D8FFEC',
  redError: '#EA3838',
  redErrorLight: '#EA3838',

  grayBlack: '#000000',
  gray1: '#636363',
  gra2: '#8E8E8E',
  gray3: '#B3B3B3',
  gray4: '#E1E1E1',
  gray5: '#F5F5F5',
  grayWhite: '#FFFFFF',
};

export const theme = createTheme({
  colors: {
    ...pallete,
    primary: pallete.greenPrimary,
    primaryContrast: pallete.grayWhite,

    buttonPrimary: pallete.greenPrimary,

    background: pallete.grayWhite,
    backgroundContrast: pallete.grayBlack,

    error: pallete.redError,
    errorLight: pallete.redErrorLight,

    success: pallete.greenSuccess,
    successLight: pallete.greenSuccessLight,
  },
  spacing: {},
  borderRadii: {},
});

export type Theme = typeof theme;
