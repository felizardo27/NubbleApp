import React from 'react';

import {render, screen} from 'test-utils';

import {Post} from '@domain';

import {PostBottom} from '../PostBottom';

const mockedPost: Post = {
  id: 1,
  imageURL: 'fake-url',
  commentCount: 5,
  favoriteCount: 2,
  reactionCount: 3,
  text: 'this is the text (post description)',
  author: {
    id: 2,
    name: 'Maria Julia',
    profileURL: 'https://url.com',
    userName: 'mariajulia',
  },
};

describe('<PostBottom />', () => {
  test('it does not show the comment link if it has no comment', () => {
    render(<PostBottom {...mockedPost} commentCount={0} />);

    const commentLinkElemt = screen.queryByText(/comentário/);

    expect(commentLinkElemt).toBeFalsy();
  });
});
