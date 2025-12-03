/**
 * Typed localStorage utilities for the mining calculations application.
 * Provides safe, SSR-compatible storage operations with error handling.
 */

/**
 * Loads a value from localStorage with type safety.
 * Returns the default value if the key doesn't exist or if running on the server.
 * 
 * @template T - The type of the value to load
 * @param key - The localStorage key
 * @param defaultValue - The default value to return if key doesn't exist
 * @returns The loaded value or default value
 * 
 * @example
 * const inputs = loadFromStorage('carguio_inputs', defaultCarguioValues);
 */
export function loadFromStorage<T>(key: string, defaultValue: T): T {
  // SSR safety: return default on server
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return defaultValue;
    }
    return JSON.parse(item) as T;
  } catch (error) {
    console.error(`Error loading from localStorage (${key}):`, error);
    return defaultValue;
  }
}

/**
 * Saves a value to localStorage with type safety.
 * Does nothing if running on the server.
 * 
 * @template T - The type of the value to save
 * @param key - The localStorage key
 * @param value - The value to save
 * 
 * @example
 * saveToStorage('carguio_inputs', inputValues);
 */
export function saveToStorage<T>(key: string, value: T): void {
  // SSR safety: do nothing on server
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Handle quota exceeded or other storage errors
    console.error(`Error saving to localStorage (${key}):`, error);
    
    // If quota exceeded, try to clear some space
    if (error instanceof DOMException && error.name === 'QuotaExceededError') {
      console.warn('localStorage quota exceeded. Consider clearing old data.');
    }
  }
}

/**
 * Removes a value from localStorage.
 * Does nothing if running on the server.
 * 
 * @param key - The localStorage key to remove
 * 
 * @example
 * removeFromStorage('carguio_inputs');
 */
export function removeFromStorage(key: string): void {
  // SSR safety: do nothing on server
  if (typeof window === 'undefined') {
    return;
  }

  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Error removing from localStorage (${key}):`, error);
  }
}

/**
 * Type guard function for validating loaded data.
 * 
 * @template T - The expected type
 * @param value - The value to validate
 * @returns True if the value is of type T
 */
export type Validator<T> = (value: unknown) => value is T;

/**
 * Safely loads a value from localStorage with optional validation.
 * Provides additional error handling and data validation.
 * 
 * @template T - The type of the value to load
 * @param key - The localStorage key
 * @param defaultValue - The default value to return if key doesn't exist or validation fails
 * @param validator - Optional validation function to check if loaded data is valid
 * @returns The loaded and validated value or default value
 * 
 * @example
 * const inputs = safeLoadFromStorage(
 *   'carguio_inputs',
 *   defaultCarguioValues,
 *   (value): value is CarguioInputs => {
 *     return typeof value === 'object' && value !== null && 'produccionMineral' in value;
 *   }
 * );
 */
export function safeLoadFromStorage<T>(
  key: string,
  defaultValue: T,
  validator?: Validator<T>
): T {
  // SSR safety: return default on server
  if (typeof window === 'undefined') {
    return defaultValue;
  }

  try {
    const item = localStorage.getItem(key);
    
    // Key doesn't exist
    if (item === null) {
      return defaultValue;
    }

    // Parse the JSON
    const parsed: unknown = JSON.parse(item);

    // Validate if validator provided
    if (validator && !validator(parsed)) {
      console.warn(`Invalid data in localStorage for key: ${key}. Using default value.`);
      return defaultValue;
    }

    return parsed as T;
  } catch (error) {
    // Handle JSON parse errors or other issues
    if (error instanceof SyntaxError) {
      console.error(`Corrupted data in localStorage (${key}):`, error);
    } else {
      console.error(`Error loading from localStorage (${key}):`, error);
    }
    return defaultValue;
  }
}

/**
 * Loads a Set of dirty field names from localStorage.
 * Returns an empty Set if the key doesn't exist or if running on the server.
 * 
 * @param key - The localStorage key for dirty fields
 * @returns A Set of dirty field names
 * 
 * @example
 * const dirtyFields = loadDirtyFields('carguio_dirty');
 */
export function loadDirtyFields(key: string): Set<string> {
  // SSR safety: return empty Set on server
  if (typeof window === 'undefined') {
    return new Set();
  }

  try {
    const item = localStorage.getItem(key);
    if (item === null) {
      return new Set();
    }

    const parsed = JSON.parse(item);
    
    // Validate that we got an array
    if (!Array.isArray(parsed)) {
      console.warn(`Invalid dirty fields data in localStorage (${key}). Expected array.`);
      return new Set();
    }

    // Filter to ensure all items are strings
    const validFields = parsed.filter((field): field is string => typeof field === 'string');
    
    return new Set(validFields);
  } catch (error) {
    console.error(`Error loading dirty fields from localStorage (${key}):`, error);
    return new Set();
  }
}

/**
 * Saves a Set of dirty field names to localStorage.
 * Does nothing if running on the server.
 * 
 * @param key - The localStorage key for dirty fields
 * @param fields - The Set of dirty field names to save
 * 
 * @example
 * saveDirtyFields('carguio_dirty', dirtyFieldsSet);
 */
export function saveDirtyFields(key: string, fields: Set<string>): void {
  // SSR safety: do nothing on server
  if (typeof window === 'undefined') {
    return;
  }

  try {
    // Convert Set to Array for JSON serialization
    const fieldsArray = Array.from(fields);
    localStorage.setItem(key, JSON.stringify(fieldsArray));
  } catch (error) {
    console.error(`Error saving dirty fields to localStorage (${key}):`, error);
    
    // Handle quota exceeded
    if (error instanceof DOMException && error.name === 'QuotaExceededError') {
      console.warn('localStorage quota exceeded while saving dirty fields.');
    }
  }
}
