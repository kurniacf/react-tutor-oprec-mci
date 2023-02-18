import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
      .then(response => {
        if (!response.ok) { 
          throw Error('Error fetching data');
        } 
        return response.json();
      })
      .then(data => {
        setIsPending(false);
        setData(data.blogs);
        setError(null);
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          setIsPending(false);
          setError(error.message);
        }
      })
    }, 1000);
  }, [url])

  return { data, isPending, error };
}

export default useFetch;