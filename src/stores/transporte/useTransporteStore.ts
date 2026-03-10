import { create } from 'zustand'
import { type TransporteData, defaultTransporteValues } from '@/src/types/transporte.types'

interface TransporteState extends TransporteData {
  setCapacidadCamion: (capacidad: number) => void
  setEficienciaLlenado: (eficiencia: number) => void
  setTiempoAcarreo: (tiempo: number) => void
  setTiempoRetorno: (tiempo: number) => void
  setTiempoCargaDescarga: (tiempo: number) => void
  setTiempoCarguio: (tiempo: number) => void
  setCicloCamion: (ciclo: number) => void
  setDisponibilidadOperativaCamion: (disponibilidad: number) => void
  setDisponibilidadMecanicaCamion: (disponibilidad: number) => void
  setRequerimientoScoop: (requerimiento: number) => void
  setCostoHoraCamion: (costo: number) => void
  setCostoMantenimientoCamion: (costo: number) => void
  setTiempoCarguioCamionTolva: (tiempo: number) => void
}

export const useTransporteStore = create<TransporteState>()((set) => ({
  ...defaultTransporteValues,

  setCapacidadCamion: (capacidad) => set({ capacidadCamion: capacidad }),
  setEficienciaLlenado: (eficiencia) => set({ eficienciaLlenado: eficiencia }),
  setTiempoAcarreo: (tiempo) => set({ tiempoAcarreo: tiempo }),
  setTiempoRetorno: (tiempo) => set({ tiempoRetorno: tiempo }),
  setTiempoCargaDescarga: (tiempo) => set({ tiempoCargaDescarga: tiempo }),
  setTiempoCarguio: (tiempo) => set({ tiempoCarguio: tiempo }),
  setCicloCamion: (ciclo) => set({ cicloCamion: ciclo }),
  setDisponibilidadOperativaCamion: (disponibilidad) =>
    set({ disponibilidadOperativaCamion: disponibilidad }),
  setDisponibilidadMecanicaCamion: (disponibilidad) =>
    set({ disponibilidadMecanicaCamion: disponibilidad }),
  setRequerimientoScoop: (requerimiento) => set({ requerimientoScoop: requerimiento }),
  setCostoHoraCamion: (costo) => set({ costoHoraCamion: costo }),
  setCostoMantenimientoCamion: (costo) => set({ costoMantenimientoCamion: costo }),
  setTiempoCarguioCamionTolva: (tiempo) => set({ tiempoCarguioCamionTolva: tiempo }),
}))
