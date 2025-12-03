import FormField from '../ui/FormField';

type RellenoCementadoInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showResults: boolean;
  onToggleResults: () => void;
  resultsComponent?: React.ReactNode;
  isAutoFilled?: boolean;
  dirtyFields?: Set<string>;
  onResetField?: (fieldName: string) => void;
};

export default function RellenoCementadoInputs({ 
  inputValues, 
  onChange, 
  showResults, 
  onToggleResults, 
  resultsComponent, 
  isAutoFilled = false,
  dirtyFields = new Set(),
  onResetField
}: RellenoCementadoInputsProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Relleno Cementado</h2>
        <button
          onClick={onToggleResults}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <span>{showResults ? 'Cerrar Resultados' : 'Ver Resultados'}</span>
          <svg
            className={`w-4 h-4 transition-transform ${showResults ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <FormField
          label="Producción Mineral"
          name="produccionMineral"
          value={inputValues.produccionMineral}
          onChange={onChange}
          unit="TPD"
          decimals={2}
          isAutoFilled={isAutoFilled}
          isDirty={dirtyFields.has('produccionMineral')}
          onResetToCalculated={onResetField ? () => onResetField('produccionMineral') : undefined}
        />
        <FormField
          label="Producción Relleno"
          name="produccionRelleno"
          value={inputValues.produccionRelleno}
          onChange={onChange}
          unit="m3"
        />
        <FormField
          label="Capacidad de Cuchara"
          name="capacidadCuchara"
          value={inputValues.capacidadCuchara}
          onChange={onChange}
          unit="yd³/pase"
        />
        <FormField
          label="Factor de Cuchara"
          name="factorCuchara"
          value={inputValues.factorCuchara}
          onChange={onChange}
          unit="%"
        />
        <FormField
          label="Densidad rota material Relleno"
          name="densidadRotaMaterialRelleno"
          value={inputValues.densidadRotaMaterialRelleno}
          onChange={onChange}
          unit="Ton/m³"
        />
        <FormField
          label="Tiempo De 1 Pase (viaje)"
          name="tiempoPase"
          value={inputValues.tiempoPase}
          onChange={onChange}
          unit="Seg/pase"
        />
        <FormField
          label="Disponibilidad Mecánica"
          name="disponibilidadMecanica"
          value={inputValues.disponibilidadMecanica}
          onChange={onChange}
          unit="%"
        />
        <FormField
          label="Disponibilidad Operativa"
          name="disponibilidadOperativa"
          value={inputValues.disponibilidadOperativa}
          onChange={onChange}
          unit="%"
        />
        <FormField
          label="Nº de Horas por Guardia"
          name="horasPorGuardia"
          value={inputValues.horasPorGuardia}
          onChange={onChange}
          unit="Hr/guardia"
        />
        <FormField
          label="Nº Guardia por Día"
          name="numeroGuardiasPorDia"
          value={inputValues.numeroGuardiasPorDia}
          onChange={onChange}
          unit="guardias/día"
        />
        <FormField
          label="Costo por Hr del Equipo"
          name="costoHoraEquipo"
          value={inputValues.costoHoraEquipo}
          onChange={onChange}
          unit="US$/Hr"
        />
        <FormField
          label="Densidad de Mineral"
          name="densidadMineral"
          value={inputValues.densidadMineral}
          onChange={onChange}
          unit="Ton/m³"
        />
        <FormField
          label="Costo Preparación Agregados"
          name="costoPreparacionAgregados"
          value={inputValues.costoPreparacionAgregados}
          onChange={onChange}
          unit="US$/m³"
        />
        <FormField
          label="Costo Preparación Planta de Concreto"
          name="costoPreparacionPlantaConcreto"
          value={inputValues.costoPreparacionPlantaConcreto}
          onChange={onChange}
          unit="US$/m³"
        />
        <FormField
          label="Costo Transporte (rellave + chura)"
          name="costoTransporteRellave"
          value={inputValues.costoTransporteRellave}
          onChange={onChange}
          unit="US$/m³"
        />
        <FormField
          label="Costo Cemento Cemento (2% = 78 kg/m3)"
          name="costoCementoCemento"
          value={inputValues.costoCementoCemento}
          onChange={onChange}
          unit="US$/m³"
        />
      </div>
      
      {showResults && resultsComponent && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          {resultsComponent}
        </div>
      )}
    </div>
  );
}
