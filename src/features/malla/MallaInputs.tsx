import FormField from '../../components/ui/FormField';

type MallaFormProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showResults: boolean;
  onToggleResults: () => void;
  resultsComponent?: React.ReactNode;
};

export default function MallaForm({ inputValues, onChange, showResults, onToggleResults, resultsComponent }: MallaFormProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6  shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Malla de Perforación</h2>
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
          label="Altura de Banco"
          name="alturaBanco"
          value={inputValues.alturaBanco}
          onChange={onChange}
          unit="pies"
        />
        <FormField
          label="Densidad del Material"
          name="densidadMaterial"
          value={inputValues.densidadMaterial}
          onChange={onChange}
          unit="ton/m³"
        />
        <FormField
          label="Factor de Potencia"
          name="factorPotencia"
          value={inputValues.factorPotencia}
          onChange={onChange}
          unit="lib/ton"
        />
        <FormField
          label="Diametro Taladro"
          name="diametroTaladro"
          value={inputValues.diametroTaladro}
          onChange={onChange}
          unit="pulg"
        />
        <FormField
          label="Densidad de Anfo"
          name="densidadAnfo"
          value={inputValues.densidadAnfo}
          onChange={onChange}
          unit="g/cm³"
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