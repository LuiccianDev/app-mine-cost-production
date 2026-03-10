import { create } from 'zustand'
import { type SharedData, defaultSharedValues } from '@/src/types/shared.types'

interface SharedState extends SharedData {
  setProduccionMina: (valor: number) => void
  setAlturaBanco: (valor: number) => void
  setTonelajePerforado: (valor: number) => void
  setRendimientoBroca: (valor: number) => void
  setTiempoPerforacion: (valor: number) => void
}

export const useSharedStore = create<SharedState>()((set) => ({
  ...defaultSharedValues,

  setProduccionMina: (valor) => set({ produccionMina: valor }),
  setAlturaBanco: (valor) => set({ alturaBanco: valor }),
  setTonelajePerforado: (valor) => set({ tonelajePerforado: valor }),
  setRendimientoBroca: (valor) => set({ rendimientoBroca: valor }),
  setTiempoPerforacion: (valor) => set({ tiempoPerforacion: valor }),
}))
