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
    valueStored = parseJSON(valueJson);

    if (!valueStored) return;

    setValue(valueStored);
  }, []);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);

  return [value, setValue];
};

export default useLocalStorage;

const parseJSON = <T>(value: string | null): T | undefined => {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch (error) {
    if (process.env.NODE_ENV === 'development') console.error(error);
    return undefined;
  }
};
