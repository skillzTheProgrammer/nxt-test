import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState([]);

  useEffect(() => {
      if (!url) return;
      const fetchData = async () => {
          setLoading(true);
          const response = await fetch(url);
          const data = await response.json();
          setResponse(data);
          setLoading(false);
      };

      fetchData();
  }, [url]);

  return { response, loading };
};