import React from 'react';

import {fireEvent, render} from 'test-utils';

import {Button} from '../Button';

describe('<Button />', () => {
  it('calls the onPress function when is pressed', () => {
    const mockedOnPress = jest.fn();

    const {getByText} = render(
      <Button title="Button title" onPress={mockedOnPress} />,
    );

    const titleElement = getByText(/button title/i);

    fireEvent.press(titleElement);

    expect(mockedOnPress).toHaveBeenCalled();
  });
});
