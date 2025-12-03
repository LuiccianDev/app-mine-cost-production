import { useMemo } from 'react';

/**
 * Custom hook for managing derived values with support for manual overrides.
 * 
 * This hook implements the logic to choose between:
 * 1. Derived value from context (if available and field is not dirty)
 * 2. Local value (if field is dirty or no derived value available)
 * 3. Default value (handled by the local value parameter)
 * 
 * The key feature is respecting "dirty fields" - fields that have been manually
 * edited by the user should not be overwritten by derived values from context.
 * 
 * Features:
 * - Uses useMemo to prevent unnecessary recalculations
 * - Respects dirty fields (doesn't override manual edits)
 * - Handles null/undefined derived values gracefully
 * - Type-safe with TypeScript generics
 * 
 * @template T - The type of the value
 * @param derivedValue - The value from context (can be null/undefined if not available)
 * @param localValue - The current local value (from state or localStorage)
 * @param fieldName - The name of the field (used to check dirty state)
 * @param dirtyFields - Set of field names that have been manually edited
 * @returns The final value to display (either derived or local)
 * 
 * @example
 * const { dirtyFields } = useDirtyFields('carguio_dirty');
 * const [inputValues, setInputValues] = usePersistedState('carguio_inputs', defaults);
 * 
 * // Get derived value from context
 * const { requerimientoPerforadoraInputs } = useCalculations();
 * 
 * // Use the hook to determine final value
 * const finalProduccionMineral = useDerivedValue(
 *   requerimientoPerforadoraInputs?.produccionMina,  // derived from context
 *   inputValues.produccionMineral,                    // local value
 *   'produccionMineral',                              // field name
 *   dirtyFields                                       // dirty fields set
 * );
 * 
 * // Display the final value in the input
 * <input value={finalProduccionMineral} ... />
 */
export function useDerivedValue<T>(
  derivedValue: T | null | undefined,
  localValue: T,
  fieldName: string,
  dirtyFields: Set<string>
): T {
  // Use useMemo to prevent unnecessary recalculations
  // Only recalculate when inputs actually change
  return useMemo(() => {
    // If the field is dirty (manually edited by user), always use local value
    // This ensures we don't overwrite user's manual edits
    if (dirtyFields.has(fieldName)) {
      return localValue;
    }

    // If field is not dirty and we have a derived value, use it
    // Check for both null and undefined using != null
    if (derivedValue != null) {
      return derivedValue;
    }

    // Fallback: no derived value available, use local value
    // This handles the case where context hasn't been populated yet
    // or the derived value simply doesn't exist
    return localValue;
  }, [derivedValue, localValue, fieldName, dirtyFields]);
}
