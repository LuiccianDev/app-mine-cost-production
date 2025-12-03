/**
 * Centralized localStorage keys to avoid inconsistencies.
 * All storage keys are defined here to ensure consistency across the application.
 * 
 * Key Naming Convention:
 * - Inputs: {feature}_inputs (snake_case) - Stores user input values
 * - Dirty fields: {feature}_dirty (snake_case) - Tracks manually edited fields
 * - Results: {feature}Results (camelCase) - Stores calculated results (for backward compatibility)
 * 
 * The const assertion ensures TypeScript treats these as literal types for type safety.
 */

export const STORAGE_KEYS = {
  // ============================================================================
  // INPUT VALUES STORAGE KEYS
  // ============================================================================
  // Store user input values for each feature module
  // Format: {feature}_inputs
  
  /** Malla (drilling pattern) input values */
  MALLA_INPUTS: 'malla_inputs',
  
  /** Costo de perforación (drilling cost) input values */
  COSTO_PERFORACION_INPUTS: 'costo_perforacion_inputs',
  
  /** Costo de voladura (blasting cost) input values */
  COSTO_VOLADURA_INPUTS: 'costo_voladura_inputs',
  
  /** Requerimiento de perforadora (drill requirement) input values */
  REQUERIMIENTO_PERFORADORA_INPUTS: 'requerimiento_perforadora_inputs',
  
  /** Carguío (loading) input values */
  CARGUIO_INPUTS: 'carguio_inputs',
  
  /** Limpieza (cleaning) input values */
  LIMPIEZA_INPUTS: 'limpieza_inputs',
  
  /** Transporte (transport) input values */
  TRANSPORTE_INPUTS: 'transporte_inputs',
  
  /** Relleno cementado (cemented backfill) input values */
  RELLENO_CEMENTADO_INPUTS: 'relleno_cementado_inputs',
  
  /** Relleno detrítico (detritic backfill) input values */
  RELLENO_DETRITICO_INPUTS: 'relleno_detritico_inputs',
  
  // ============================================================================
  // DIRTY FIELDS STORAGE KEYS
  // ============================================================================
  // Track which fields have been manually edited by the user
  // These fields should not be overwritten by derived values from context
  // Format: {feature}_dirty
  
  /** Malla dirty fields (manually edited fields) */
  MALLA_DIRTY: 'malla_dirty',
  
  /** Costo de perforación dirty fields */
  COSTO_PERFORACION_DIRTY: 'costo_perforacion_dirty',
  
  /** Costo de voladura dirty fields */
  COSTO_VOLADURA_DIRTY: 'costo_voladura_dirty',
  
  /** Requerimiento de perforadora dirty fields */
  REQUERIMIENTO_PERFORADORA_DIRTY: 'requerimiento_perforadora_dirty',
  
  /** Carguío dirty fields */
  CARGUIO_DIRTY: 'carguio_dirty',
  
  /** Limpieza dirty fields */
  LIMPIEZA_DIRTY: 'limpieza_dirty',
  
  /** Transporte dirty fields */
  TRANSPORTE_DIRTY: 'transporte_dirty',
  
  /** Relleno cementado dirty fields */
  RELLENO_CEMENTADO_DIRTY: 'relleno_cementado_dirty',
  
  /** Relleno detrítico dirty fields */
  RELLENO_DETRITICO_DIRTY: 'relleno_detritico_dirty',
  
  // ============================================================================
  // RESULTS STORAGE KEYS
  // ============================================================================
  // Store calculated results that are shared via CalculationContext
  // Format: {feature}Results (camelCase for backward compatibility)
  // These are used both in Context and persisted to localStorage
  
  /** Malla calculation results */
  MALLA_RESULTS: 'mallaResults',
  
  /** Costo de perforación calculation results */
  COSTO_PERFORACION_RESULTS: 'costoPerforacionResults',
  
  /** Costo de voladura calculation results */
  COSTO_VOLADURA_RESULTS: 'costoVoladuraResults',
  
  /** Requerimiento de perforadora inputs (shared via context) */
  REQUERIMIENTO_PERFORADORA_INPUTS_CONTEXT: 'requerimientoPerforadoraInputs',
  
  /** Carguío inputs (shared via context) */
  CARGUIO_INPUTS_CONTEXT: 'carguioInputs',
  
  /** Limpieza calculation results */
  LIMPIEZA_RESULTS: 'limpiezaResults',
  
  /** Carguío calculation results */
  CARGUIO_RESULTS: 'carguioResults',
  
  /** Transporte calculation results */
  TRANSPORTE_RESULTS: 'transporteResults',
  
  /** Relleno cementado calculation results */
  RELLENO_CEMENTADO_RESULTS: 'rellenoCementadoResults',
  
  /** Relleno detrítico calculation results */
  RELLENO_DETRITICO_RESULTS: 'rellenoDetriticoResults',
} as const;

/**
 * Type helper to get all storage key values
 * This ensures type safety when using storage keys
 */
export type StorageKey = typeof STORAGE_KEYS[keyof typeof STORAGE_KEYS];
