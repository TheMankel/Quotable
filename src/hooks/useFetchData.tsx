import { useCallback, useEffect, useState, useRef } from 'react';

const timeout = function (sec: number) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${sec} second`));
    }, sec * 1000);
  });
};

export const useFetchData = (url: string) => {
  const [data, setData] = useState<{} | []>();
  const [isLoading, setIsLoading] = useState(false);
  const firstRender = useRef(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const fetchPromise = fetch(url);
      const res = (await Promise.race([fetchPromise, timeout(5)])) as Response;
      const data = await res.json();
      console.log(data);
      setData(data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  }, []);

  // useEffect(() => {
  //   if (isLoading || firstRender.current) return;

  //   fetchData();
  //   firstRender.current = true;
  // }, []);

  return { data, isLoading, fetchData };
};
