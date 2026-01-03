import { useTransporteStore } from '@/src/stores/useMalla'
import FormField from '../../components/ui/FormField'
import { useState } from 'react'

type TransporteInputsProps = {
  resultsComponent?: React.ReactNode
}

export default function TransporteInputs({ resultsComponent }: TransporteInputsProps) {
  const [isOpen, setIsOpen] = useState(false)
  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  const {
    capacidadCamion,
    eficienciaLlenado,
    tiempoAcarreo,
    tiempoRetorno,
    tiempoCargaDescarga,
    tiempoCarguio,
    cicloCamion,
    disponibilidadOperativaCamion,
    disponibilidadMecanicaCamion,
    requerimientoScoop,
    costoHoraCamion,
    costoMantenimientoCamion,
    tiempoCarguioCamionTolva,

    setCapacidadCamion,
    setEficienciaLlenado,
    setTiempoAcarreo,
    setTiempoRetorno,
    setTiempoCargaDescarga,
    setTiempoCarguio,
    setCicloCamion,
    setDisponibilidadOperativaCamion,
    setDisponibilidadMecanicaCamion,
    setRequerimientoScoop,
    setCostoHoraCamion,
    setCostoMantenimientoCamion,
    setTiempoCarguioCamionTolva,
  } = useTransporteStore()

  return (
    <div className="rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900">Transporte</h2>
        <button
          onClick={handleClick}
          className="flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
        >
          <span>{isOpen ? 'Cerrar Resultados' : 'Ver Resultados'}</span>
          <svg
            className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
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
          label="Capacidad de camion"
          name="capacidadCamion"
          value={capacidadCamion}
          onChange={(e) => setCapacidadCamion(parseFloat(e.target.value) || 0)}
          unit="Ton"
        />
        <FormField
          label="Eficiencia de llenado"
          name="eficienciaLlenado"
          value={eficienciaLlenado}
          onChange={(e) => setEficienciaLlenado(parseFloat(e.target.value) || 0)}
          unit="%"
        />
        <FormField
          label="Tiempo de Acarreo"
          name="tiempoAcarreo"
          value={tiempoAcarreo}
          onChange={(e) => setTiempoAcarreo(parseFloat(e.target.value) || 0)}
          unit="min"
        />
        <FormField
          label="Tiempo de Retorno"
          name="tiempoRetorno"
          value={tiempoRetorno}
          onChange={(e) => setTiempoRetorno(parseFloat(e.target.value) || 0)}
          unit="min"
        />
        <FormField
          label="Tiempo de Carg y Descarga"
          name="tiempoCargaDescarga"
          value={tiempoCargaDescarga}
          onChange={(e) => setTiempoCargaDescarga(parseFloat(e.target.value) || 0)}
          unit="min"
        />
        <FormField
          label="Tiempo para Carguirse"
          name="tiempoCarguio"
          value={tiempoCarguio}
          onChange={(e) => setTiempoCarguio(parseFloat(e.target.value) || 0)}
          unit="min"
        />
        <FormField
          label="Ciclo Camion"
          name="cicloCamion"
          value={cicloCamion}
          onChange={(e) => setCicloCamion(parseFloat(e.target.value) || 0)}
          unit="min"
        />
        <FormField
          label="Disponibilidad Operativa Camion"
          name="disponibilidadOperativaCamion"
          value={disponibilidadOperativaCamion}
          onChange={(e) => setDisponibilidadOperativaCamion(parseFloat(e.target.value) || 0)}
          unit="%"
        />
        <FormField
          label="Disponibilidad Mecanica Camion"
          name="disponibilidadMecanicaCamion"
          value={disponibilidadMecanicaCamion}
          onChange={(e) => setDisponibilidadMecanicaCamion(parseFloat(e.target.value) || 0)}
          unit="%"
        />
        <FormField
          label="Requerimiento de Scoop"
          name="requerimientoScoop"
          value={requerimientoScoop}
          onChange={(e) => setRequerimientoScoop(parseFloat(e.target.value) || 0)}
          unit="Scoop"
        />
        <FormField
          label="Costo Hr de Camion"
          name="costoHoraCamion"
          value={costoHoraCamion}
          onChange={(e) => setCostoHoraCamion(parseFloat(e.target.value) || 0)}
          unit="US$/Hr"
        />
        <FormField
          label="Costo Mantenimiento Camion"
          name="costoMantenimientoCamion"
          value={costoMantenimientoCamion}
          onChange={(e) => setCostoMantenimientoCamion(parseFloat(e.target.value) || 0)}
          unit="US$/Hr"
        />
        <FormField
          label="Tiempo Carguio Camion (Tolva)"
          name="tiempoCarguioCamionTolva"
          value={tiempoCarguioCamionTolva}
          onChange={(e) => setTiempoCarguioCamionTolva(parseFloat(e.target.value) || 0)}
          unit="minutos"
        />
      </div>

      {isOpen && resultsComponent && (
        <div className="mt-6 border-t border-gray-200 pt-6">{resultsComponent}</div>
      )}
    </div>
  )
}
