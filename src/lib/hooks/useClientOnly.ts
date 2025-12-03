import { useState, useEffect } from 'react';

/**
 * Custom hook for detecting when a component has mounted on the client.
 * 
 * This hook solves the hydration problem in Next.js by providing a way to
 * conditionally render client-only features after the initial server render.
 * 
 * Features:
 * - Returns false on server and during initial client render
 * - Returns true after the component has mounted on the client
 * - Prevents hydration mismatches by deferring client-only features
 * - Enables progressive enhancement patterns
 * 
 * Use cases:
 * - Conditionally rendering features that depend on localStorage
 * - Showing derived values from Context only after hydration
 * - Enabling client-side interactivity after mount
 * - Preventing "window is not defined" errors in SSR
 * 
 * @returns boolean - false on server/initial render, true after client mount
 * 
 * @example
 * const isClient = useClientOnly();
 * 
 * return (
 *   <div>
 *     {isClient && <ClientOnlyFeature />}
 *     {isClient ? derivedValue : defaultValue}
 *   </div>
 * );
 * 
 * @note This is the correct pattern for detecting client-side hydration.
 * The ESLint warning about exhaustive-deps is a false positive in this case:
 * - The effect only needs to run once (empty dependency array is intentional)
 * - This is the recommended React pattern for detecting mount
 * - It does not cause cascading renders because it doesn't depend on other state
 */
export function useClientOnly(): boolean {
  const [isClient, setIsClient] = useState(false);

  // This effect runs only once after the component mounts on the client
  // This is the correct pattern for detecting client-side hydration
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
}
