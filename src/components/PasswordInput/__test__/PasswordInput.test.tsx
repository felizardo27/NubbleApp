import React from 'react';

import {IconProps} from 'src/components/Icon/Icon';
import {fireEvent, render, screen} from 'test-utils';

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
  });

  it('when press the eye icon, it should show the password, and change to the eye off icon', () => {
    const mockedOnPress = jest.fn();

    render(
      <PasswordInput
        label="Password"
        placeholder="password"
        value="123456"
        onChangeText={mockedOnPress}
      />,
    );

    const eyeOnIcon: IconProps['name'] = 'eyeOn';
    fireEvent.press(screen.getByTestId(eyeOnIcon));

    const eyeOffIcon: IconProps['name'] = 'eyeOff';
    const eyeOffIconElement = screen.getByTestId(eyeOffIcon);
    expect(eyeOffIconElement).toBeTruthy();

    const inputElement = screen.getByPlaceholderText(/password/);
    expect(inputElement.props.secureTextEntry).toBeFalsy();
  });
});
