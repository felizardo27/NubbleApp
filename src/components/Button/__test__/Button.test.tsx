import React from 'react';

import {ThemeProvider} from '@shopify/restyle';
import {render} from '@testing-library/react-native';

import {theme} from '@theme';

import {Button} from '../Button';

describe('<Button />', () => {
  test('The component rendered', () => {
    const {debug} = render(
      <ThemeProvider theme={theme}>
        <Button title="Button Title" />
      </ThemeProvider>,
    );

    debug();
  });
});
