import { create } from 'zustand'
import {
  type RellenoCementadoData,
  defaultRellenoCementadoValues,
} from '@/src/types/rellenoCementado.types'

interface RellenoCementadoState extends RellenoCementadoData {
  setProduccionMineral: (valor: number) => void
  setProduccionRelleno: (valor: number) => void
  setCapacidadCuchara: (valor: number) => void
  setFactorCuchara: (valor: number) => void
  setDensidadRotaMaterialRelleno: (valor: number) => void
  setTiempoDeUnPase: (valor: number) => void
  setDisponibilidadMecanica: (valor: number) => void
  setDisponibilidadOperativa: (valor: number) => void
  setNumeroHorasPorGuardia: (valor: number) => void
  setNumeroGuardiasPorDia: (valor: number) => void
  setCostoHoraEquipo: (valor: number) => void
  setDensidadMineral: (valor: number) => void
  setCostoPreparacionAgregados: (valor: number) => void
  setCostoPreparacionPlantaConcreto: (valor: number) => void
  setCostoTransporteRelaveChura: (valor: number) => void
  setCostoCemento: (valor: number) => void
}

export const useRellenoCementadoStore = create<RellenoCementadoState>()((set) => ({
  ...defaultRellenoCementadoValues,

  setProduccionMineral: (valor) => set({ produccionMineral: valor }),
  setProduccionRelleno: (valor) => set({ produccionRelleno: valor }),
  setCapacidadCuchara: (valor) => set({ capacidadCuchara: valor }),
  setFactorCuchara: (valor) => set({ factorCuchara: valor }),
  setDensidadRotaMaterialRelleno: (valor) => set({ densidadRotaMaterialRelleno: valor }),
  setTiempoDeUnPase: (valor) => set({ tiempoDeUnPase: valor }),
  setDisponibilidadMecanica: (valor) => set({ disponibilidadMecanica: valor }),
  setDisponibilidadOperativa: (valor) => set({ disponibilidadOperativa: valor }),
  setNumeroHorasPorGuardia: (valor) => set({ numeroHorasPorGuardia: valor }),
  setNumeroGuardiasPorDia: (valor) => set({ numeroGuardiasPorDia: valor }),
  setCostoHoraEquipo: (valor) => set({ costoHoraEquipo: valor }),
  setDensidadMineral: (valor) => set({ densidadMineral: valor }),
  setCostoPreparacionAgregados: (valor) => set({ costoPreparacionAgregados: valor }),
  setCostoPreparacionPlantaConcreto: (valor) => set({ costoPreparacionPlantaConcreto: valor }),
  setCostoTransporteRelaveChura: (valor) => set({ costoTransporteRelaveChura: valor }),
  setCostoCemento: (valor) => set({ costoCemento: valor }),
}))
