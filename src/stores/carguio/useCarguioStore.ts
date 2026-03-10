import { create } from 'zustand'
import { type CarguioData, defaultCarguioValues } from '@/src/types/carguio.types'

interface CarguioState extends CarguioData {
  setRatioDM: (ratio: number) => void
  setProduccionDesmonte: (produccion: number) => void
  setMineralMasDesmonte: (valor: number) => void
  setCapacidadCuchara: (capacidad: number) => void
  setFactorCuchara: (factor: number) => void
  setDensidadRotaMineral: (densidad: number) => void
  setTiempoDeUnPase: (tiempo: number) => void
  setDisponibilidadMecanica: (disponibilidad: number) => void
  setDisponibilidadOperativa: (disponibilidad: number) => void
  setNumeroHorasPorGuardia: (horas: number) => void
  setNumeroGuardiasPorDia: (numero: number) => void
  setCostoHoraDeEquipo: (costo: number) => void
}

export const useCarguioStore = create<CarguioState>()((set) => ({
  ...defaultCarguioValues,

  setRatioDM: (ratio) => set({ ratioDM: ratio }),
  setProduccionDesmonte: (produccion) => set({ produccionDesmonte: produccion }),
  setMineralMasDesmonte: (valor) => set({ mineralMasDesmonte: valor }),
  setCapacidadCuchara: (capacidad) => set({ capacidadCuchara: capacidad }),
  setFactorCuchara: (factor) => set({ factorCuchara: factor }),
  setDensidadRotaMineral: (densidad) => set({ densidadRotaMineral: densidad }),
  setTiempoDeUnPase: (tiempo) => set({ tiempoDeUnPase: tiempo }),
  setDisponibilidadMecanica: (disponibilidad) => set({ disponibilidadMecanica: disponibilidad }),
  setDisponibilidadOperativa: (disponibilidad) => set({ disponibilidadOperativa: disponibilidad }),
  setNumeroHorasPorGuardia: (horas) => set({ numeroHorasPorGuardia: horas }),
  setNumeroGuardiasPorDia: (numero) => set({ numeroGuardiasPorDia: numero }),
  setCostoHoraDeEquipo: (costo) => set({ costoHoraDeEquipo: costo }),
}))
