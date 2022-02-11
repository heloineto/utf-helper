import { useEffect, useState } from 'react';

const useLocalStorage = <T>(
  key: string,
  initialState: T | (() => T)
): [T, SetValue<T>] => {
  const [value, setValue] = useState<T>(initialState);

  useEffect(() => {
    const valueJson = localStorage.getItem(key);
    if (!valueJson) return;

    let valueStored: T | undefined;
    try {
      valueStored = JSON.parse(valueJson);
    } catch (error) {
      if (process.env.NODE_ENV === 'development') console.error(error);
    }

    if (!valueStored) return;

    setValue(valueStored);
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;
