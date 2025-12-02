import FormField from '../ui/FormField';

type RequerimientoPerforadoraInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RequerimientoPerforadoraInputs({ inputValues, onChange }: RequerimientoPerforadoraInputsProps) {
  return (
    <div className="border border-gray-300 rounded-3xl p-8 bg-white w-full h-full min-w-0">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-900">REQUERIMIENTO DE PERFORADORA</h2>
        <p className="text-sm text-gray-500 mt-1">Datos</p>
      </div>
      <div className="flex flex-col gap-y-4 min-w-0">
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
          name="tonelajePorTaladro"
          value={inputValues.tonelajePorTaladro}
          onChange={onChange}
          unit="Ton/taladro"
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
    </div>
  );
}
