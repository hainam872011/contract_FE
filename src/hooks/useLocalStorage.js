import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    let result;
    try {
      const item = window.localStorage.getItem(key);
      result = item ? JSON.parse(item) : initialValue;
    } catch {
      result = initialValue;
    }
    return result;
  });

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);

    try {
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch {
      console.warn(`Could not save ${key} to localStorage`);
    }
  };

  return [storedValue, setValue];
};
export default useLocalStorage;
