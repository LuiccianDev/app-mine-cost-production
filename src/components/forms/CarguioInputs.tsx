import FormField from '../ui/FormField';

type CarguioInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function CarguioInputs({ inputValues, onChange }: CarguioInputsProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">Carguío</h2>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <FormField
          label="Producción Mineral"
          name="produccionMineral"
          value={inputValues.produccionMineral}
          onChange={onChange}
          unit="TPD"
        />
        <FormField
          label="Ratio D / M"
          name="ratioDesmonteMineral"
          value={inputValues.ratioDesmonteMineral}
          onChange={onChange}
          unit="TPD"
        />
        <FormField
          label="Producción Desmonte"
          name="produccionDesmonte"
          value={inputValues.produccionDesmonte}
          onChange={onChange}
          unit="TPD"
        />
        <FormField
          label="Mineral + Desmonte"
          name="mineralMasDesmonte"
          value={inputValues.mineralMasDesmonte}
          onChange={onChange}
          unit="TPD"
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
          label="Densidad rota material"
          name="densidadRotaMaterial"
          value={inputValues.densidadRotaMaterial}
          onChange={onChange}
          unit="Ton/m3"
        />
        <FormField
          label="Tiempo de 1 pase"
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
          label="Nº Guardias / día"
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
      </div>
    </div>
  );
}
