import React from 'react';

import {render, screen} from 'test-utils';

import {PasswordInput} from '../PasswordInput';

describe('<PasswordInput />', () => {
  it('starts with hidden password', () => {
    const mockedOnPress = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnPress}
      />,
    );

    const inputElement = screen.getByPlaceholderText(/password/);

    expect(inputElement.props.secureTextEntry).toBeTruthy();

    // screen.debug();
  });
});
