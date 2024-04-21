import {useEffect, useState} from 'react';

import {postService} from '../PostService';
import {Post} from '../PostTypes';

export function usePosList() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [postList, setPostList] = useState<Post[]>([]);

  async function getData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList();
      setPostList(list);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return {
    loading,
    error,
    postList,
    refetch: getData,
  };
}
