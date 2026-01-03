// tiempoPerforacion, rendimientoBroca, tonelajePerforado, alturaBanco movidos a SharedData
export type CostoPerforacionData = {
  costoBrocaAccesorios: number;
  costoEquipoPerforacion: number;
};

export type CostoPerforacionResultados = {
  costoPerforacionPorMetro: number;
  costoPerforacionPorTon: number;
};

export const defaultCostoPerforacionValues: CostoPerforacionData = {
  costoBrocaAccesorios: 215.22,
  costoEquipoPerforacion: 12.50,
};