import {useState} from 'react';

import {PostCommentService} from '../PostCommentService';

export function usePostCommentCreate(postId: number) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);

  async function createComment(message: string) {
    try {
      setError(null);
      setLoading(true);
      await PostCommentService.create(postId, message);
    } catch (e) {
      setError(true);
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
