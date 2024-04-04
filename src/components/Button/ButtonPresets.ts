import {ThemeColors} from '@theme';
import {ButtonPreset, TouchableOpacityboxProps} from '@components';

interface ButtonUI {
  container: TouchableOpacityboxProps;
  content: ThemeColors;
}

export const buttonPresets: Record<
  ButtonPreset,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'primary',
      },
      content: 'primaryContrast',
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: 'gray2',
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
      },
      content: 'primary',
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
      },
      content: 'gray2',
    },
  },
};
