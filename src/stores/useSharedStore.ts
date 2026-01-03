import { create } from 'zustand';
import { type SharedData, defaultSharedValues } from '@/src/types/shared.types';

interface SharedState extends SharedData {
  setProduccionMina: (valor: number) => void;
  setAlturaBanco: (valor: number) => void;
  setTonelajePerforado: (valor: number) => void;
  setRendimientoBroca: (valor: number) => void;
  setTiempoPerforacion: (valor: number) => void;
}

export const useSharedStore = create<SharedState>()((set) => ({
  ...defaultSharedValues,

  setProduccionMina: (valor: number) => set({ produccionMina: valor }),
  setAlturaBanco: (valor: number) => set({ alturaBanco: valor }),
  setTonelajePerforado: (valor: number) => set({ tonelajePerforado: valor }),
  setRendimientoBroca: (valor: number) => set({ rendimientoBroca: valor }),
  setTiempoPerforacion: (valor: number) => set({ tiempoPerforacion: valor }),
}));
