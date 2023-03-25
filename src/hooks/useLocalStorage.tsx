import { useCallback, useEffect, useState } from 'react';

export function useLocalStorage<T>(
  key: string,
  defaultValue?: T | (() => T | undefined),
) {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) return JSON.parse(storedValue);

    if (typeof defaultValue === 'function') return (defaultValue as () => T)();
    else return defaultValue;
  });

  useEffect(() => {
    if (value === null) {
      localStorage.removeItem(key);
      return;
    }

    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value, localStorage]);

  const remove = useCallback(() => {
    setValue(null as T);
  }, []);

  return [value, setValue, remove] as [T, typeof setValue, typeof remove];
}
