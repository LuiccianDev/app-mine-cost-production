import FormField from '../ui/FormField';

type MallaFormProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function MallaForm({ inputValues, onChange }: MallaFormProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">Malla de Perforación</h2>
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
    </div>
  );
}