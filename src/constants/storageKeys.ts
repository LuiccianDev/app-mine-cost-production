// Centralized localStorage keys to avoid inconsistencies

// Input values storage keys
export const STORAGE_KEYS = {
  // Inputs
  MALLA_INPUTS: 'mallaInputs',
  COSTO_PERFORACION_INPUTS: 'costoPerforacionInputs',
  COSTO_VOLADURA_INPUTS: 'costoVoladuraInputs',
  REQUERIMIENTO_PERFORADORA_INPUTS: 'requerimientoPerforadoraInputsValues',
  CARGUIO_INPUTS: 'carguioInputsValues',
  LIMPIEZA_INPUTS: 'limpiezaInputsValues',
  TRANSPORTE_INPUTS: 'transporteInputsValues',
  RELLENO_CEMENTADO_INPUTS: 'rellenoCementadoInputsValues',
  RELLENO_DETRITICO_INPUTS: 'rellenoDetriticoInputsValues',
  
  // Dirty fields (manually edited fields)
  MALLA_DIRTY: 'mallaInputs_dirtyFields',
  COSTO_PERFORACION_DIRTY: 'costoPerforacionInputs_dirtyFields',
  COSTO_VOLADURA_DIRTY: 'costoVoladuraInputs_dirtyFields',
  REQUERIMIENTO_PERFORADORA_DIRTY: 'requerimientoPerforadoraInputsValues_dirtyFields',
  CARGUIO_DIRTY: 'carguioInputsValues_dirtyFields',
  LIMPIEZA_DIRTY: 'limpiezaInputsValues_dirtyFields',
  TRANSPORTE_DIRTY: 'transporteInputsValues_dirtyFields',
  RELLENO_CEMENTADO_DIRTY: 'rellenoCementadoInputsValues_dirtyFields',
  RELLENO_DETRITICO_DIRTY: 'rellenoDetriticoInputsValues_dirtyFields',
  
  // Results (already stored in CalculationContext)
  MALLA_RESULTS: 'mallaResults',
  COSTO_PERFORACION_RESULTS: 'costoPerforacionResults',
  COSTO_VOLADURA_RESULTS: 'costoVoladuraResults',
  REQUERIMIENTO_PERFORADORA_INPUTS_CONTEXT: 'requerimientoPerforadoraInputs',
  CARGUIO_INPUTS_CONTEXT: 'carguioInputs',
  LIMPIEZA_RESULTS: 'limpiezaResults',
  CARGUIO_RESULTS: 'carguioResults',
  TRANSPORTE_RESULTS: 'transporteResults',
  RELLENO_CEMENTADO_RESULTS: 'rellenoCementadoResults',
  RELLENO_DETRITICO_RESULTS: 'rellenoDetriticoResults',
} as const;

// Helper functions for dirty fields management
export const saveDirtyFields = (key: string, fields: Set<string>) => {
  localStorage.setItem(key, JSON.stringify(Array.from(fields)));
};

export const loadDirtyFields = (key: string): Set<string> => {
  const saved = localStorage.getItem(key);
  return saved ? new Set(JSON.parse(saved)) : new Set();
};
