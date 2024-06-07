import React from 'react';

import {render} from '@testing-library/react-native';

import {Button} from '../Button';

describe('<Button />', () => {
  test('The component rendered', () => {
    render(<Button title="Button Title" />);
  });
});
