import FormField from '../../components/ui/FormField';

type CostoVoladuraInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showResults: boolean;
  onToggleResults: () => void;
  resultsComponent?: React.ReactNode;
  isAutoFilled?: boolean;
  dirtyFields?: Set<string>;
  onResetField?: (fieldName: string) => void;
};

export default function CostoVoladuraInputs({ 
  inputValues, 
  onChange, 
  showResults, 
  onToggleResults, 
  resultsComponent, 
  isAutoFilled = false,
  dirtyFields = new Set(),
  onResetField
}: CostoVoladuraInputsProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6  shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Costo de Voladura</h2>
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
          label="Costo Anfo"
          name="costoAnfo"
          value={inputValues.costoAnfo}
          onChange={onChange}
          unit="US$/Lib"
        />
        <FormField
          label="Costo Dinamita"
          name="costoDinamita"
          value={inputValues.costoDinamita}
          onChange={onChange}
          unit="US$/Cartucho"
        />
        <FormField
          label="Costo Retardos Fanel"
          name="costoRetardoFanel"
          value={inputValues.costoRetardoFanel}
          onChange={onChange}
          unit="US$/Unidad"
        />
        <FormField
          label="Costo Cordón Detonante"
          name="costoCordonDetonante"
          value={inputValues.costoCordonDetonante}
          onChange={onChange}
          unit="US$/Pie"
        />
        <FormField
          label="Costo Camión Anfocar"
          name="costoCamionAnfocar"
          value={inputValues.costoCamionAnfoCar}
          onChange={onChange}
          unit="US$/Hr"
        />
        <FormField
          label="Costo Chispeo"
          name="costoChispeo"
          value={inputValues.costoChispeo}
          onChange={onChange}
          unit="US$/Pie"
        />
        <FormField
          label="Costo Mano de Obra"
          name="costoManoDeObra"
          value={inputValues.costoManoDeObra}
          onChange={onChange}
          unit="US$/Hr"
        />
        <FormField
          label="Tonelaje por Taladro"
          name="tonelajePerforado"
          value={inputValues.tonelajePerforado}
          onChange={onChange}
          unit="Ton/Taladro"
          decimals={2}
          isAutoFilled={isAutoFilled}
          isDirty={dirtyFields.has('tonelajePerforado')}
          onResetToCalculated={onResetField ? () => onResetField('tonelajePerforado') : undefined}
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
