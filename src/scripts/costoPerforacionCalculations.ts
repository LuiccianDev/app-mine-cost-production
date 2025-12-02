type CostoPerforacionFormData = {
  costoBrocaAccesorios: number;
  costoEquipoPerforacion: number;
  tiempoPerforacion: number;
  rendimientoBroca: number;
  tonelaje: number;
  alturaBanco: number;
};

export type CostoPerforacionResultados = {
  costoPerforacionPorMetro: number;
  costoPerforacionPorTon: number;
};

export const defaultCostoPerforacionValues = {
  costoBrocaAccesorios: 215.22,
  costoEquipoPerforacion: 12.50,
  tiempoPerforacion: 80.00,
  rendimientoBroca: 762.00,
  tonelaje: 122.45,
  alturaBanco: 9.91,
};

export function calcularCostoPerforacion(data: CostoPerforacionFormData): CostoPerforacionResultados {
  const { 
    costoBrocaAccesorios, 
    costoEquipoPerforacion, 
    tiempoPerforacion, 
    rendimientoBroca, 
    tonelaje, 
    alturaBanco 
  } = data;

  //* COSTO PERFORACION (US$/m) = (Costo Broca + Costo Equipo Perforac. x Tiempo Perf.) / Rendimiento Broca
  const costoPerforacionPorMetro = 
    (costoBrocaAccesorios + (costoEquipoPerforacion * tiempoPerforacion)) / rendimientoBroca;

  // COSTO PERFORACION (US$/Ton) = (Costo Perforacion US$/m) / ((Ton/Taladro) / (Altura Banco + SubDrilling))
  const costoPerforacionPorTon = costoPerforacionPorMetro / (tonelaje / alturaBanco);

  return {
    costoPerforacionPorMetro,
    costoPerforacionPorTon
  };
}
