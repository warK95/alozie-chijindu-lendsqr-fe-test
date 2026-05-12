import { useEffect, useRef } from 'react';

/**
  * @description A custom hook to detect clicks outside of a specified element.
  * This hook takes a handler function as an argument, which will be called when a click is detected outside of the referenced element.
  * It returns a ref that should be attached to the element you want to monitor for outside clicks.
  * The hook adds event listeners for 'mousedown' and 'touchstart' events on the document, 
  * and removes them when the component unmounts or when the handler changes.
  * @param handler - A function to be called when a click is detected outside of the referenced element
  * @returns A ref to be attached to the element you want to monitor for outside clicks
*/
export function useOnClickOutside<T extends HTMLElement>(
  handler: () => void
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) return;
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler]);

  return ref;
}

/**
  * @description A custom hook to manage localStorage with a specified key.
  * This hook provides three functions: get, set, and remove.
  * get: Retrieves the value from localStorage and parses it as JSON. Returns null if the item doesn't exist or if parsing fails.
  * set: Takes a value, stringifies it to JSON, and stores it in localStorage under the specified key. It handles any errors silently.
  * remove: Removes the item from localStorage using the specified key.
  * @param key - The key to access the localStorage item
  * @returns An object with get, set, and remove functions to manage localStorage
*/
export function useLocalStorage<T>(key: string) {
  // Get the value from localStorage and parse it as JSON. Return null if the item doesn't exist or if parsing fails.
  const get = (): T | null => {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : null;
    } catch {
      return null;
    }
  };

  // Set the value in localStorage by stringifying it to JSON. Handle any errors silently.
  const set = (value: T): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore
    }
  };

  // Remove the item from localStorage using the specified key.
  const remove = (): void => {
    localStorage.removeItem(key);
  };
  // Return an object with get, set, and remove functions to manage localStorage.
  return { get, set, remove };
}
