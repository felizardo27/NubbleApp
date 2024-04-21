import {useEffect, useState} from 'react';

import {postService} from '../PostService';
import {Post} from '../PostTypes';

export function usePosList() {
  const [postList, setPostList] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<boolean | null>(null);
  const [page, setPage] = useState(1);

  async function fetchData() {
    try {
      setError(null);
      setLoading(true);
      const list = await postService.getList(page);
      setPostList(prev => [...prev, ...list]);
      setPage(prev => prev + 1);
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function fetchNexPage() {
    if (!loading) {
      fetchData();
    }
  }

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    postList,
    refetch: fetchData,
    fetchNexPage,
  };
}
