import { create } from 'zustand'
import {
  type RellenoDetriticoData,
  defaultRellenoDetriticoValues,
} from '@/src/types/rellenoDentritico.types'

interface RellenoDetriticoState extends RellenoDetriticoData {
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
  setCostoTransporteDesmonte: (valor: number) => void
}

export const useRellenoDetriticoStore = create<RellenoDetriticoState>()((set) => ({
  ...defaultRellenoDetriticoValues,

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
  setCostoTransporteDesmonte: (valor) => set({ costoTransporteDesmonte: valor }),
}))
