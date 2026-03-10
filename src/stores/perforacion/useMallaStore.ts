import { create } from 'zustand'
import { type MallaData, defaultMallaValues } from '@/src/types/malla.types'

interface MallaState extends MallaData {
  setDensidadMaterial: (densidad: number) => void
  setFactorPotencia: (factor: number) => void
  setDiametroTaladro: (diametro: number) => void
  setDensidadAnfo: (densidad: number) => void
}

export const useMallaStore = create<MallaState>()((set) => ({
  ...defaultMallaValues,

  setDensidadMaterial: (densidad) => set({ densidadMaterial: densidad }),
  setFactorPotencia: (factor) => set({ factorPotencia: factor }),
  setDiametroTaladro: (diametro) => set({ diametroTaladro: diametro }),
  setDensidadAnfo: (densidad) => set({ densidadAnfo: densidad }),
}))
