import {useState} from 'react';

import {PostCommentService} from '../PostCommentService';
import {PostComment} from '../PostCommentTypes';

interface Options {
  onSuccess?: (data: PostComment) => void;
  onError?: (message: string) => void;
}

export function usePostCommentCreate(postId: number, options?: Options) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setError(null);
      setLoading(true);
      const postComment = await PostCommentService.create(postId, message);
      if (options?.onSuccess) {
        options.onSuccess(postComment);
      }
    } catch (e) {
      setError(true);
      if (options?.onError) {
        options.onError('Erro ao criar comentário');
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    createComment,
    loading,
    error,
  };
}
