import { create } from 'zustand'
import {
  type CostoPerforacionData,
  defaultCostoPerforacionValues,
} from '@/src/types/costoPerforacion.types'

interface CostosPerforacionState extends CostoPerforacionData {
  setCostoBrocaAccesorios: (costo: number) => void
  setCostoEquipoPerforacion: (costo: number) => void
}

export const useCostosPerforacionStore = create<CostosPerforacionState>()((set) => ({
  ...defaultCostoPerforacionValues,

  setCostoBrocaAccesorios: (costo) => set({ costoBrocaAccesorios: costo }),
  setCostoEquipoPerforacion: (costo) => set({ costoEquipoPerforacion: costo }),
}))
