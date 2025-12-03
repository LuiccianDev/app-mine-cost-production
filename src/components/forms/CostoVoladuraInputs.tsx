import FormField from '../ui/FormField';

type CostoVoladuraInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CostoVoladuraInputs({ inputValues, onChange }: CostoVoladuraInputsProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">Costo de Voladura</h2>
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
          name="costoRetardos"
          value={inputValues.costoRetardos}
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
          value={inputValues.costoCamionAnfocar}
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
          name="costoManoObra"
          value={inputValues.costoManoObra}
          onChange={onChange}
          unit="US$/Hr"
        />
        <FormField
          label="Tonelaje por Taladro"
          name="tonelajePorTaladro"
          value={inputValues.tonelajePorTaladro}
          onChange={onChange}
          unit="Ton/Taladro"
        />
      </div>
    </div>
  );
}
