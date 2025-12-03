import FormField from '../ui/FormField';

type TransporteInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function TransporteInputs({ inputValues, onChange }: TransporteInputsProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">Transporte</h2>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <FormField
          label="Capacidad de camion"
          name="capacidadCamion"
          value={inputValues.capacidadCamion}
          onChange={onChange}
          unit="Ton"
        />
        <FormField
          label="Eficiencia de llenado"
          name="eficienciaLlenado"
          value={inputValues.eficienciaLlenado}
          onChange={onChange}
          unit="%"
        />
        <FormField
          label="Tiempo de Acarreo"
          name="tiempoAcarreo"
          value={inputValues.tiempoAcarreo}
          onChange={onChange}
          unit="min"
        />
        <FormField
          label="Tiempo de Retorno"
          name="tiempoRetorno"
          value={inputValues.tiempoRetorno}
          onChange={onChange}
          unit="min"
        />
        <FormField
          label="Tiempo de Carg y Descarga"
          name="tiempoCargaDescarga"
          value={inputValues.tiempoCargaDescarga}
          onChange={onChange}
          unit="min"
        />
        <FormField
          label="Tiempo para Carguirse"
          name="tiempoCarguio"
          value={inputValues.tiempoCarguio}
          onChange={onChange}
          unit="min"
        />
        <FormField
          label="Ciclo Camion"
          name="cicloCamion"
          value={inputValues.cicloCamion}
          onChange={onChange}
          unit="min"
        />
        <FormField
          label="Disponibilidad Operativa Camion"
          name="disponibilidadOperativaCamion"
          value={inputValues.disponibilidadOperativaCamion}
          onChange={onChange}
          unit="%"
        />
        <FormField
          label="Disponibilidad Mecanica Camion"
          name="disponibilidadMecanicaCamion"
          value={inputValues.disponibilidadMecanicaCamion}
          onChange={onChange}
          unit="%"
        />
        <FormField
          label="Requerimiento de Scoop"
          name="requerimientoScoop"
          value={inputValues.requerimientoScoop}
          onChange={onChange}
          unit="Scoop"
        />
        <FormField
          label="Costo Hr de Camion"
          name="costoHoraCamion"
          value={inputValues.costoHoraCamion}
          onChange={onChange}
          unit="US$/Hr"
        />
        <FormField
          label="Costo Mantenimiento Camion"
          name="costoMantenimientoCamion"
          value={inputValues.costoMantenimientoCamion}
          onChange={onChange}
          unit="US$/Hr"
        />
        <FormField
          label="Tiempo Carguio Camion (Tolva)"
          name="tiempoCarguioCamionTolva"
          value={inputValues.tiempoCarguioCamionTolva}
          onChange={onChange}
          unit="minutos"
        />
      </div>
    </div>
  );
}
