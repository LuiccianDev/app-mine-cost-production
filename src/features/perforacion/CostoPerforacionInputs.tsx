import { useCostosPerforacionStore } from '@/src/stores/useMalla';
import FormField from '../../components/ui/FormField';
import { useState } from "react";


type CostoPerforacionInputsProps = {
  resultsComponent?: React.ReactNode;
};

export default function CostoPerforacionInputs({ resultsComponent, }: CostoPerforacionInputsProps) {
  
  const [isOpen, setIsOpen] = useState(true);
    const  handleClick = () => {
    setIsOpen(!isOpen);
  };

  const {costoBrocaAccesorios,
          costoEquipoPerforacion,
          tiempoPerforacion,
          rendimientoBroca,
          tonelajePerforado,
          alturaBanco,
          setCostoBrocaAccesorios,
          setCostoEquipoPerforacion,
          setTiempoPerforacion,
          setRendimientoBroca,
          setTonelajePerforado,
          setAlturaBanco
  } = useCostosPerforacionStore();
  
  return (
    <div className="border border-gray-200 rounded-xl p-6  shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Costo de Perforación</h2>
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
          label="Costo Broca + Accesorios"
          name="costoBrocaAccesorios"
          value={costoBrocaAccesorios}
          onChange={(e) => setCostoBrocaAccesorios(parseFloat(e.target.value) || 0)}
          unit="$/und"
        />
        <FormField
          label="Costo equipo Perforacion"
          name="costoEquipoPerforacion"
          value={costoEquipoPerforacion}
          onChange={(e) => setCostoEquipoPerforacion(parseFloat(e.target.value) || 0)}
          unit="$/h"
        />
        <FormField
          label="Tiempo de Perforac. (Rend. Broca)"
          name="tiempoPerforacion"
          value={tiempoPerforacion}
          onChange={(e) => setTiempoPerforacion(parseFloat(e.target.value) || 0)}
          unit="hr"
        />
        <FormField
          label="Rendimiento Broca"
          name="rendimientoBroca"
          value={rendimientoBroca}
          onChange={(e) => setRendimientoBroca(parseFloat(e.target.value) || 0)}
          unit="m /broca"
        />
        <FormField
          label="Tonelaje"
          name="tonelajePerforado"
          value={tonelajePerforado}
          onChange={(e) => setTonelajePerforado(parseFloat(e.target.value) || 0)}
          unit="ton / taladro"
          decimals={2}
        />
        <FormField
          label="Altura de banco" /* misma  */
          name="alturaBanco"
          value={alturaBanco}
          onChange={(e) => setAlturaBanco(parseFloat(e.target.value) || 0)}
          unit="m"
          decimals={2}
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
