import FormField from '../ui/FormField';

type CostoPerforacionInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CostoPerforacionInputs({ inputValues, onChange }: CostoPerforacionInputsProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">Costo de Perforación</h2>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <FormField
          label="Costo Broca + Accesorios"
          name="costoBrocaAccesorios"
          value={inputValues.costoBrocaAccesorios}
          onChange={onChange}
          unit="$/und"
        />
        <FormField
          label="Costo equipo Perforacion"
          name="costoEquipoPerforacion"
          value={inputValues.costoEquipoPerforacion}
          onChange={onChange}
          unit="$/h"
        />
        <FormField
          label="Tiempo de Perforac. (Rend. Broca)"
          name="tiempoPerforacion"
          value={inputValues.tiempoPerforacion}
          onChange={onChange}
          unit="hr"
        />
        <FormField
          label="Rendimiento Broca"
          name="rendimientoBroca"
          value={inputValues.rendimientoBroca}
          onChange={onChange}
          unit="m /broca"
        />
        <FormField
          label="Tonelaje"
          name="tonelaje"
          value={inputValues.tonelaje}
          onChange={onChange}
          unit="ton / taladro"
        />
        <FormField
          label="Altura de banco"
          name="alturaBanco"
          value={inputValues.alturaBanco}
          onChange={onChange}
          unit="m"
        />
      </div>
    </div>
  );
}
