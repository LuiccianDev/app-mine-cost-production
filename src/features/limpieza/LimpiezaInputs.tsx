import FormField from "../../components/ui/FormField";
import { useState } from "react";
import { useLimpiezaStore } from "@/src/stores/useMalla";

type LimpiezaInputsProps = {
  resultsComponent?: React.ReactNode;
};

export default function LimpiezaInputs({
  resultsComponent,
}: LimpiezaInputsProps) {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const {
    produccionMina,
    produccionDesmonte,
    mineralMasDesmonte,
    capacidadCuchara,
    factorCuchara,
    densidadRotaMineral,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    costoHoraDeEquipo,

    setProduccionMina,
    setProduccionDesmonte,
    setMineralMasDesmonte,
    setCapacidadCuchara,
    setFactorCuchara,
    setDensidadRotaMineral,
    setTiempoDeUnPase,
    setDisponibilidadMecanica,
    setDisponibilidadOperativa,
    setNumeroHorasPorGuardia,
    setNumeroGuardiasPorDia,
    setCostoHoraDeEquipo,
  } = useLimpiezaStore();

  return (
    <div className="border border-gray-200 rounded-xl p-6  shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Limpieza</h2>
        <button
          onClick={handleClick}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
        >
          <span>{isOpen ? "Cerrar Resultados" : "Ver Resultados"}</span>
          <svg
            className={`w-4 h-4 transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <FormField
          label="Producción Mineral"
          name="produccionMineral"
          value={produccionMina}
          onChange={(e) => setProduccionMina(parseFloat(e.target.value) || 0)}
          unit="TPD"
        />
        <FormField
          label="Producción Desmonte"
          name="produccionDesmonte"
          value={produccionDesmonte}
          onChange={(e) =>
            setProduccionDesmonte(parseFloat(e.target.value) || 0)
          }
          unit="TPD"
        />
        <FormField
          label="Mineral + Desmonte"
          name="mineralMasDesmonte"
          value={mineralMasDesmonte}
          onChange={(e) =>
            setMineralMasDesmonte(parseFloat(e.target.value) || 0)
          }
          unit="TPD"
        />
        <FormField
          label="Capacidad de Cuchara"
          name="capacidadCuchara"
          value={capacidadCuchara}
          onChange={(e) => setCapacidadCuchara(parseFloat(e.target.value) || 0)}
          unit="yd³/pase"
        />
        <FormField
          label="Factor de Cuchara"
          name="factorCuchara"
          value={factorCuchara}
          onChange={(e) => setFactorCuchara(parseFloat(e.target.value) || 0)}
          unit="%"
        />
        <FormField
          label="Densidad rota material"
          name="densidadRotaMaterial"
          value={densidadRotaMineral}
          onChange={(e) =>
            setDensidadRotaMineral(parseFloat(e.target.value) || 0)
          }
          unit="Ton/m3"
        />
        <FormField
          label="Tiempo De 1 Pase (viaje)"
          name="tiempoPase"
          value={tiempoDeUnPase}
          onChange={(e) => setTiempoDeUnPase(parseFloat(e.target.value) || 0)}
          unit="Seg/pase"
        />
        <FormField
          label="Disponibilidad Mecánica"
          name="disponibilidadMecanica"
          value={disponibilidadMecanica}
          onChange={(e) =>
            setDisponibilidadMecanica(parseFloat(e.target.value) || 0)
          }
          unit="%"
        />
        <FormField
          label="Disponibilidad Operativa"
          name="disponibilidadOperativa"
          value={disponibilidadOperativa}
          onChange={(e) =>
            setDisponibilidadOperativa(parseFloat(e.target.value) || 0)
          }
          unit="%"
        />
        <FormField
          label="Nº de Horas por Guardia"
          name="horasPorGuardia"
          value={numeroHorasPorGuardia}
          onChange={(e) =>
            setNumeroHorasPorGuardia(parseFloat(e.target.value) || 0)
          }
          unit="Hr/guardia"
        />
        <FormField
          label="Nº Guardia por Día"
          name="numeroGuardiasPorDia"
          value={numeroGuardiasPorDia}
          onChange={(e) =>
            setNumeroGuardiasPorDia(parseFloat(e.target.value) || 0)
          }
          unit="guardias/día"
        />
        <FormField
          label="Costo por Hr del Equipo"
          name="costoHoraEquipo"
          value={costoHoraDeEquipo}
          onChange={(e) =>
            setCostoHoraDeEquipo(parseFloat(e.target.value) || 0)
          }
          unit="US$/Hr"
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
