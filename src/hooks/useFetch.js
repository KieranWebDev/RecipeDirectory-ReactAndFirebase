import { useState, useEffect } from 'react';

export const useFetch = (url, method = 'GET') => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [fetchOptions, setFetchOptions] = useState(null);

  function postData(postData) {
    setFetchOptions({
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
  }

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async (FetchOptions) => {
      setIsPending(true);

      try {
        const res = await fetch(url, {
          ...FetchOptions,
          signal: controller.signal,
        });
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        const data = await res.json();

        setIsPending(false);
        setData(data);
        setError(null);
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('the fetch was aborted');
        } else {
          setIsPending(false);
          setError('Could not fetch the data');
        }
      }
    };

    if (method === 'GET') {
      fetchData();
    }
    if (method === 'POST' && fetchOptions) {
      fetchData(fetchOptions);
    }

    return () => {
      controller.abort();
    };
  }, [url, fetchOptions, method]);

  return { data, isPending, error, postData };
};
