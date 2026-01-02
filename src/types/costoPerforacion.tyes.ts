export type CostoPerforacionData = {
  costoBrocaAccesorios: number;
  costoEquipoPerforacion: number;
  tiempoPerforacion: number;
  rendimientoBroca: number;
  tonelajePerforado: number;
  alturaBanco: number;
};

export type CostoPerforacionResultados = {
  costoPerforacionPorMetro: number;
  costoPerforacionPorTon: number;
};

export const defaultCostoPerforacionValues : CostoPerforacionData = {
  costoBrocaAccesorios: 215.22,
  costoEquipoPerforacion: 12.50,
  tiempoPerforacion: 80.00,
  rendimientoBroca: 762.00,
  tonelajePerforado: 122.45,
  alturaBanco: 9.91,
};