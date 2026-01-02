import FormField from '../../components/ui/FormField';

type RequerimientoPerforadoraInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showResults: boolean;
  onToggleResults: () => void;
  resultsComponent?: React.ReactNode;
  isAutoFilled?: boolean;
  dirtyFields?: Set<string>;
  onResetField?: (fieldName: string) => void;
};

export default function RequerimientoPerforadoraInputs({ 
  inputValues, 
  onChange, 
  showResults, 
  onToggleResults, 
  resultsComponent, 
  isAutoFilled = false,
  dirtyFields = new Set(),
  onResetField
}: RequerimientoPerforadoraInputsProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6  shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Requerimiento de Perforadora</h2>
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
          label="Producción Mina"
          name="produccionMina"
          value={inputValues.produccionMina}
          onChange={onChange}
          unit="TPD"
        />
        <FormField
          label="Altura de Banco"
          name="alturaBanco"
          value={inputValues.alturaBanco}
          onChange={onChange}
          unit="m"
          decimals={2}
          isAutoFilled={isAutoFilled}
          isDirty={dirtyFields.has('alturaBanco')}
          onResetToCalculated={onResetField ? () => onResetField('alturaBanco') : undefined}
        />
        <FormField
          label="Longitud de Taladro"
          name="longitudTaladro"
          value={inputValues.longitudTaladro}
          onChange={onChange}
          unit="m"
        />
        <FormField
          label="Ton / Taladro"
          name="tonelajePerforado"
          value={inputValues.tonelajePerforado}
          onChange={onChange}
          unit="Ton/taladro"
          decimals={2}
          isAutoFilled={isAutoFilled}
          isDirty={dirtyFields.has('tonelajePerforado')}
          onResetToCalculated={onResetField ? () => onResetField('tonelajePerforado') : undefined}
        />
        <FormField
          label="Rendimiento Broca"
          name="rendimientoBroca"
          value={inputValues.rendimientoBroca}
          onChange={onChange}
          unit="m/Broca"
        />
        <FormField
          label="Tiempo Perforación"
          name="tiempoPerforacion"
          value={inputValues.tiempoPerforacion}
          onChange={onChange}
          unit="Hr"
        />
        <FormField
          label="Horas Programadas"
          name="horasProgramadas"
          value={inputValues.horasProgramadas}
          onChange={onChange}
          unit="Hr"
        />
        <FormField
          label="Horas Trabajadas"
          name="horasTrabajadas"
          value={inputValues.horasTrabajadas}
          onChange={onChange}
          unit="Hr"
        />
        <FormField
          label="Eficiencia Perforadora"
          name="eficienciaPerforadora"
          value={inputValues.eficienciaPerforadora}
          onChange={onChange}
          unit="%"
        />
        <FormField
          label="Producción TPM"
          name="produccionTPM"
          value={inputValues.produccionTPM}
          onChange={onChange}
          unit="Ton"
        />
        <FormField
          label="Días Operación"
          name="diasOperacion"
          value={inputValues.diasOperacion}
          onChange={onChange}
          unit="Días"
        />
        <FormField
          label="Producción TPD"
          name="produccionTPD"
          value={inputValues.produccionTPD}
          onChange={onChange}
          unit="Ton/Día"
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
