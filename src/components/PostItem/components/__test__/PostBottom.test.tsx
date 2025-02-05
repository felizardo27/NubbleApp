import React from 'react';

import {fireEvent, render, screen} from 'test-utils';

import {PostBottom} from '../PostBottom';

import {mockedPost} from './MockedData/MockedData';

const mockedNavigate = jest.fn();

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({push: mockedNavigate}),
  };
});

describe('<PostBottom />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('does not show the comment link if it has no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElement = screen.queryByText(/comentário/);

    expect(commentLinkElement).toBeFalsy();
  });

  it('navigate to postCommentScreen when press the comment link', () => {
    render(<PostBottom {...mockedPost} commentCount={4} />);

    const commentLinkElement = screen.getByText(/comentário/);

    fireEvent.press(commentLinkElement);

    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });

  it('navigate to postCommentScreen when press the one comment link', () => {
    render(<PostBottom {...mockedPost} commentCount={1} />);

    const commentLinkElement = screen.getByText(/comentário/);

    fireEvent.press(commentLinkElement);

    expect(mockedNavigate).toHaveBeenCalledWith('PostCommentScreen', {
      postId: mockedPost.id,
      postAuthorId: mockedPost.author.id,
    });
  });
});
