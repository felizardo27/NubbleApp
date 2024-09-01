import {setupServer} from 'msw/node';

import {postCommentHandlers} from './postComment/postCommentHandlers';
import {userHandler} from './user/userHandler';

export const server = setupServer(...postCommentHandlers, ...userHandler);

export {mockedData as mockedPostComment} from './postComment/mocks';
export {userMocked} from './user/userMocked';
export {resetInMemoryResponse} from './postComment/postCommentHandlers';
