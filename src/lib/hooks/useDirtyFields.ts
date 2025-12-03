import { useState, useEffect, useCallback } from 'react';
import { loadDirtyFields, saveDirtyFields } from '../storage';

/**
 * Return type for the useDirtyFields hook.
 * Provides methods to manage dirty field state.
 */
export interface UseDirtyFieldsReturn {
  /** Set of field names that have been manually edited by the user */
  dirtyFields: Set<string>;
  /** Mark a field as dirty (manually edited) */
  markDirty: (fieldName: string) => void;
  /** Clear a field from dirty state (restore to derived/default value) */
  clearDirty: (fieldName: string) => void;
  /** Check if a specific field is dirty */
  isDirty: (fieldName: string) => boolean;
}

/**
 * Custom hook for managing dirty fields state with localStorage persistence.
 * 
 * A "dirty field" is a form field that has been manually edited by the user.
 * When a field is dirty, it should not be overwritten by derived values from context.
 * 
 * Features:
 * - Lazy initialization: loads dirty fields from localStorage only once during mount
 * - Auto-save: persists changes to localStorage after render (in useEffect)
 * - SSR-safe: returns empty Set on server, loads from storage on client
 * - Provides convenient methods: markDirty, clearDirty, isDirty
 * 
 * @param storageKey - The localStorage key to use for persistence
 * @returns Object with dirtyFields Set and management functions
 * 
 * @example
 * const { dirtyFields, markDirty, clearDirty, isDirty } = useDirtyFields(
 *   'carguio_dirty'
 * );
 * 
 * // Mark a field as dirty when user edits it
 * const handleInputChange = (fieldName: string, value: number) => {
 *   markDirty(fieldName);
 *   setInputValues(prev => ({ ...prev, [fieldName]: value }));
 * };
 * 
 * // Check if field is dirty before applying derived value
 * const finalValue = isDirty('produccionMineral') 
 *   ? localValue 
 *   : derivedValue ?? localValue;
 * 
 * // Clear dirty state when user resets
 * const handleReset = (fieldName: string) => {
 *   clearDirty(fieldName);
 *   setInputValues(prev => ({ ...prev, [fieldName]: derivedValue }));
 * };
 */
export function useDirtyFields(storageKey: string): UseDirtyFieldsReturn {
  // Lazy initialization: only read from localStorage once during mount
  // This prevents double reads and improves performance
  const [dirtyFields, setDirtyFields] = useState<Set<string>>(() => {
    return loadDirtyFields(storageKey);
  });

  // Auto-save effect: persist to localStorage after render
  // This runs after the component renders, avoiding blocking the UI
  useEffect(() => {
    saveDirtyFields(storageKey, dirtyFields);
  }, [storageKey, dirtyFields]);

  /**
   * Mark a field as dirty (manually edited by user).
   * The field will not be overwritten by derived values until cleared.
   */
  const markDirty = useCallback((fieldName: string) => {
    setDirtyFields(prev => {
      // Only update if the field isn't already dirty (optimization)
      if (prev.has(fieldName)) {
        return prev;
      }
      const newSet = new Set(prev);
      newSet.add(fieldName);
      return newSet;
    });
  }, []);

  /**
   * Clear a field from dirty state.
   * The field can now be overwritten by derived values again.
   */
  const clearDirty = useCallback((fieldName: string) => {
    setDirtyFields(prev => {
      // Only update if the field is actually dirty (optimization)
      if (!prev.has(fieldName)) {
        return prev;
      }
      const newSet = new Set(prev);
      newSet.delete(fieldName);
      return newSet;
    });
  }, []);

  /**
   * Check if a specific field is dirty.
   * Returns true if the field has been manually edited by the user.
   */
  const isDirty = useCallback((fieldName: string): boolean => {
    return dirtyFields.has(fieldName);
  }, [dirtyFields]);

  return {
    dirtyFields,
    markDirty,
    clearDirty,
    isDirty,
  };
}
