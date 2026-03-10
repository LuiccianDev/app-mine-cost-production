import { create } from 'zustand'
import { type CostoVoladuraData, defaultCostoVoladuraValues } from '@/src/types/costoVoladura.types'

interface CostosVoladuraState extends CostoVoladuraData {
  setCostoAnfo: (costo: number) => void
  setCostoDinamita: (costo: number) => void
  setCostoRetardoFanel: (costo: number) => void
  setCostoCordonDetonante: (costo: number) => void
  setCostoCamionAnfoCar: (costo: number) => void
  setCostoChispeo: (costo: number) => void
  setCostoManoDeObra: (costo: number) => void

  setPentacordEmpleado: (pentacord: number) => void
  setTiempoCarguioAnfoCar: (tiempo: number) => void
  setMechaRapidaEmpleada: (mecha: number) => void
  setNumeroHombresCarguio: (numero: number) => void
  setTiempoEmpleadoCarguio: (tiempo: number) => void
}

export const useCostosVoladurasStore = create<CostosVoladuraState>()((set) => ({
  ...defaultCostoVoladuraValues,

  setCostoAnfo: (costo) => set({ costoAnfo: costo }),
  setCostoDinamita: (costo) => set({ costoDinamita: costo }),
  setCostoRetardoFanel: (costo) => set({ costoRetardoFanel: costo }),
  setCostoCordonDetonante: (costo) => set({ costoCordonDetonante: costo }),
  setCostoCamionAnfoCar: (costo) => set({ costoCamionAnfoCar: costo }),
  setCostoChispeo: (costo) => set({ costoChispeo: costo }),
  setCostoManoDeObra: (costo) => set({ costoManoDeObra: costo }),

  setPentacordEmpleado: (pentacord) => set({ pentacordEmpleado: pentacord }),
  setTiempoCarguioAnfoCar: (tiempo) => set({ tiempoCarguioAnfoCar: tiempo }),
  setMechaRapidaEmpleada: (mecha) => set({ mechaRapidaEmpleada: mecha }),
  setNumeroHombresCarguio: (numero) => set({ numeroHombresCarguio: numero }),
  setTiempoEmpleadoCarguio: (tiempo) => set({ tiempoEmpleadoCarguio: tiempo }),
}))
