import FormField from '../ui/FormField';

type RellenoCementadoInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RellenoCementadoInputs({ inputValues, onChange }: RellenoCementadoInputsProps) {
  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white w-full h-full min-w-0">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">RELLENO CEMENTADO</h2>
        <p className="text-sm text-gray-500 mt-1">Datos</p>
      </div>
      <div className="flex flex-col gap-y-4 min-w-0">
        <FormField
          label="Producción Mineral"
          name="produccionMineral"
          value={inputValues.produccionMineral}
          onChange={onChange}
          unit="TPD"
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
          unit="Yd3/pase"
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
          unit="Ton/m3"
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
          unit="Ton/m3"
        />
        <FormField
          label="Costo Preparación Agregados"
          name="costoPreparacionAgregados"
          value={inputValues.costoPreparacionAgregados}
          onChange={onChange}
          unit="US$/m3"
        />
        <FormField
          label="Costo Preparación Planta de Concreto"
          name="costoPreparacionPlantaConcreto"
          value={inputValues.costoPreparacionPlantaConcreto}
          onChange={onChange}
          unit="US$/m3"
        />
        <FormField
          label="Costo Transporte (rellave + chura)"
          name="costoTransporteRellave"
          value={inputValues.costoTransporteRellave}
          onChange={onChange}
          unit="US$/m3"
        />
        <FormField
          label="Costo Cemento Cemento (2% = 78 kg/m3)"
          name="costoCementoCemento"
          value={inputValues.costoCementoCemento}
          onChange={onChange}
          unit="US$/m3"
        />
      </div>
    </div>
  );
}
