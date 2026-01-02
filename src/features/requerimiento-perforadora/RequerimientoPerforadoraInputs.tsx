import { useState } from 'react';
import FormField from '../../components/ui/FormField';
import { useRequerimientoPerforadoraStore } from '@/src/stores/useMalla';

type RequerimientoPerforadoraInputsProps = {
  resultsComponent?: React.ReactNode;
};

export default function RequerimientoPerforadoraInputs({ resultsComponent}: RequerimientoPerforadoraInputsProps) {
  
  const [isOpen, setIsOpen] = useState(true);
  const  handleClick = () => {
      setIsOpen(!isOpen);
    };

  const {
    produccionMina,
    alturaBanco,
    longuitudTaladro,
    tonelajePerforado,
    rendimientoBroca,
    tiempoPerforacion,
    horasProgramadas,
    horasTrabajadas,
    eficienciaPerforadora,
    produccionTPM,
    diasOperacion,
    produccionTPD,

    setProduccionMina,
    setAlturaBanco,
    setLonguitudTaladro,
    setTonelajePerforado,
    setRendimientoBroca,
    setTiempoPerforacion,
    setHorasProgramadas,
    setHorasTrabajadas,
    setEficienciaPerforadora,
    setProduccionTPM,
    setDiasOperacion,
    setProduccionTPD,

  }  = useRequerimientoPerforadoraStore();  
  
  return (
    <div className="border border-gray-200 rounded-xl p-6  shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Requerimiento de Perforadora</h2>
        <button
          onClick={handleClick}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <span>{isOpen ? 'Cerrar Resultados' : 'Ver Resultados'}</span>
          <svg
            className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
          label="Producción Mina"
          name="produccionMina"
          value={produccionMina}
          onChange={(e) => setProduccionMina(parseFloat(e.target.value) || 0)}
          unit="TPD"
        />
        <FormField
          label="Altura de Banco"
          name="alturaBanco"
          value={alturaBanco}
          onChange={(e) => setAlturaBanco(parseFloat(e.target.value) || 0)}
          unit="m"
        />
        <FormField
          label="Longitud de Taladro"
          name="longitudTaladro"
          value={longuitudTaladro}
          onChange={(e) => setLonguitudTaladro(parseFloat(e.target.value) || 0)}
          unit="m"
        />
        <FormField
          label="Ton / Taladro"
          name="tonelajePerforado"
          value={tonelajePerforado}
          onChange={(e) => setTonelajePerforado(parseFloat(e.target.value) || 0)}
          unit="Ton/taladro"
        />
        <FormField
          label="Rendimiento Broca"
          name="rendimientoBroca"
          value={rendimientoBroca}
          onChange={(e) => setRendimientoBroca(parseFloat(e.target.value) || 0)}
          unit="m/Broca"
        />
        <FormField
          label="Tiempo Perforación"
          name="tiempoPerforacion"
          value={tiempoPerforacion}
          onChange={(e) => setTiempoPerforacion(parseFloat(e.target.value) || 0)}
          unit="Hr"
        />
        <FormField
          label="Horas Programadas"
          name="horasProgramadas"
          value={horasProgramadas}
          onChange={(e) => setHorasProgramadas(parseFloat(e.target.value) || 0)}
          unit="Hr"
        />
        <FormField
          label="Horas Trabajadas"
          name="horasTrabajadas"
          value={horasTrabajadas}
          onChange={(e) => setHorasTrabajadas(parseFloat(e.target.value) || 0)}
          unit="Hr"
        />
        <FormField
          label="Eficiencia Perforadora"
          name="eficienciaPerforadora"
          value={eficienciaPerforadora}
          onChange={(e) => setEficienciaPerforadora(parseFloat(e.target.value) || 0)}
          unit="%"
        />
        <FormField
          label="Producción TPM"
          name="produccionTPM"
          value={produccionTPM}
          onChange={(e) => setProduccionTPM(parseFloat(e.target.value) || 0)}
          unit="Ton"
        />
        <FormField
          label="Días Operación"
          name="diasOperacion"
          value={diasOperacion}
          onChange={(e) => setDiasOperacion(parseFloat(e.target.value) || 0)}
          unit="Días"
        />
        <FormField
          label="Producción TPD"
          name="produccionTPD"
          value={produccionTPD}
          onChange={(e) => setProduccionTPD(parseFloat(e.target.value) || 0)}
          unit="Ton/Día"
        />
      </div>
      
      {isOpen && resultsComponent && (
        <div className="mt-6 pt-6 border-t border-gray-200">
          {resultsComponent}
        </div>
      )}
    </div>
  );
}
