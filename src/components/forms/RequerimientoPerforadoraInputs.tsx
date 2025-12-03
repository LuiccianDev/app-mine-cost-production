import FormField from '../ui/FormField';

type RequerimientoPerforadoraInputsProps = {
  inputValues: Record<string, number>;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function RequerimientoPerforadoraInputs({ inputValues, onChange }: RequerimientoPerforadoraInputsProps) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm">
      <div className="mb-5">
        <h2 className="text-lg font-semibold text-gray-900">Requerimiento de Perforadora</h2>
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
