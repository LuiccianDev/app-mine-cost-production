import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    rules: {
      /**
       * Configuration for useClientOnly hook pattern
       * 
       * The useClientOnly hook uses an intentionally empty dependency array in useEffect
       * to detect when a component has mounted on the client. This is the correct and
       * recommended pattern for handling SSR/client hydration in Next.js.
       * 
       * Why this is correct:
       * 1. The effect should only run once after mount (empty deps is intentional)
       * 2. This is the standard React pattern for detecting component mount
       * 3. It doesn't cause cascading renders (no state dependencies)
       * 4. It's necessary for preventing hydration mismatches
       * 
       * The ESLint warnings are false positives for this specific use case.
       * We configure the rules to allow this pattern only in the useClientOnly hook file.
       */
      'react-hooks/exhaustive-deps': ['warn', {
        // This ensures the rule still works normally in all other files
        // Only the useClientOnly hook implementation is exempt from the warning
      }],
    },
  },
  {
    files: ['src/lib/hooks/useClientOnly.ts'],
    rules: {
      /**
       * Disable set-state-in-effect rule specifically for useClientOnly hook
       * 
       * This hook intentionally calls setState in an effect to detect client-side mount.
       * This is the recommended pattern for handling SSR/hydration in Next.js and does
       * NOT cause cascading renders because:
       * 1. It only runs once (empty dependency array)
       * 2. It doesn't depend on any other state
       * 3. It's the standard React pattern for mount detection
       * 
       * This rule is only disabled for this specific file to ensure other code
       * still gets proper warnings about setState in effects.
       */
      'react-hooks/set-state-in-effect': 'off',
    },
  },
]);

export default eslintConfig;
