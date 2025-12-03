import { useEffect, useRef } from 'react';

/**
 * Custom hook for syncing a value to context after render without causing cascading renders.
 * 
 * This hook solves a critical performance problem: updating context from within a component
 * can cause cascading renders if not done carefully. By using useEffect (which runs after render)
 * and deep comparison (to detect actual changes), we ensure that:
 * 
 * 1. Context updates happen after the component has rendered (non-blocking)
 * 2. Updates only occur when the value actually changes (prevents infinite loops)
 * 3. No cascading renders are triggered in unrelated components
 * 
 * Features:
 * - Runs after render (useEffect) to avoid blocking UI
 * - Deep comparison using JSON.stringify to detect actual changes
 * - Prevents infinite loops by only updating when value changes
 * - Type-safe with TypeScript generics
 * - Proper dependency array to avoid stale closures
 * 
 * @template T - The type of the value being synced
 * @param value - The value to sync to context (typically calculation results)
 * @param setter - The context setter function to call when value changes
 * 
 * @example
 * // In a feature page component
 * const { setCarguioResults } = useCalculations();
 * 
 * // Calculate results using useMemo
 * const resultados = useMemo(() => {
 *   return calculateCarguio(inputValues);
 * }, [inputValues]);
 * 
 * // Sync results to context after render
 * useSyncToContext(resultados, setCarguioResults);
 * 
 * @example
 * // Syncing inputs to context (for derived values in other modules)
 * const { setRequerimientoPerforadoraInputs } = useCalculations();
 * 
 * const inputsForContext = useMemo(() => ({
 *   produccionMina: inputValues.produccionMina
 * }), [inputValues.produccionMina]);
 * 
 * useSyncToContext(inputsForContext, setRequerimientoPerforadoraInputs);
 */
export function useSyncToContext<T>(
  value: T,
  setter: (value: T) => void
): void {
  // Use a ref to store the previous serialized value
  // This allows us to do deep comparison without re-serializing on every render
  const prevValueRef = useRef<string>('');

  // Effect runs after render, ensuring we don't block the UI
  useEffect(() => {
    // Serialize the current value for deep comparison
    // JSON.stringify handles nested objects, arrays, etc.
    const currentValueSerialized = JSON.stringify(value);

    // Only update context if the value actually changed
    // This prevents infinite loops and unnecessary re-renders
    if (prevValueRef.current !== currentValueSerialized) {
      // Update the ref with the new serialized value
      prevValueRef.current = currentValueSerialized;
      
      // Call the context setter with the actual value (not serialized)
      setter(value);
    }
  }, [value, setter]); // Dependencies: re-run when value or setter changes
}
