import {setupServer} from 'msw/node';

import {postCommentHandlers} from './postComment/postCommentHandlers';

export const server = setupServer(...postCommentHandlers);

export {mockedData as mockedPostComment} from './postComment/mocks';
export {resetInMemoryResponse} from './postComment/postCommentHandlers';
