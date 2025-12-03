import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { loadFromStorage, saveToStorage } from '../storage';

/**
 * Custom hook for managing state that persists to localStorage.
 * 
 * Features:
 * - Lazy initialization: reads from localStorage only once during mount
 * - Auto-save: persists changes to localStorage after render (in useEffect)
 * - SSR-safe: returns default values on server, loads from storage on client
 * - Type-safe: uses TypeScript generics for full type safety
 * 
 * @template T - The type of the state value
 * @param storageKey - The localStorage key to use for persistence
 * @param defaultValue - The default value to use if no saved value exists
 * @returns A tuple of [state, setState] similar to useState
 * 
 * @example
 * const [inputValues, setInputValues] = usePersistedState(
 *   'carguio_inputs',
 *   { produccionMineral: 0, densidad: 0 }
 * );
 */
export function usePersistedState<T>(
  storageKey: string,
  defaultValue: T
): [T, Dispatch<SetStateAction<T>>] {
  // Lazy initialization: only read from localStorage once during mount
  // This prevents double reads and improves performance
  const [state, setState] = useState<T>(() => {
    return loadFromStorage(storageKey, defaultValue);
  });

  // Auto-save effect: persist to localStorage after render
  // This runs after the component renders, avoiding blocking the UI
  useEffect(() => {
    saveToStorage(storageKey, state);
  }, [storageKey, state]);

  return [state, setState];
}
