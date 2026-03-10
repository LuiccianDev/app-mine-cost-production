import { create } from 'zustand'
import {
  type RequerimientoPerforadoraData,
  defaultRequerimientoPerforadoraValues,
} from '@/src/types/requerimientoPerforadora.types'

interface RequerimientoPerforadoraState extends RequerimientoPerforadoraData {
  setLonguitudTaladro: (longuitud: number) => void
  setHorasProgramadas: (horas: number) => void
  setHorasTrabajadas: (horas: number) => void
  setEficienciaPerforadora: (eficiencia: number) => void
  setProduccionTPM: (produccion: number) => void
  setDiasOperacion: (dias: number) => void
  setProduccionTPD: (produccion: number) => void
}

export const useRequerimientoPerforadoraStore = create<RequerimientoPerforadoraState>()((set) => ({
  ...defaultRequerimientoPerforadoraValues,

  setLonguitudTaladro: (longuitud) => set({ longuitudTaladro: longuitud }),
  setHorasProgramadas: (horas) => set({ horasProgramadas: horas }),
  setHorasTrabajadas: (horas) => set({ horasTrabajadas: horas }),
  setEficienciaPerforadora: (eficiencia) => set({ eficienciaPerforadora: eficiencia }),
  setProduccionTPM: (produccion) => set({ produccionTPM: produccion }),
  setDiasOperacion: (dias) => set({ diasOperacion: dias }),
  setProduccionTPD: (produccion) => set({ produccionTPD: produccion }),
}))
