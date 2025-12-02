type CostoPerforacionFormData = {
  costoBrocaAccesorios: number;    // US$ / Und
  costoEquipoPerforacion: number;  // US$ / Hr
  tiempoPerforacion: number;       // Hr
  rendimientoBroca: number;        // m / broca
  tonelaje: number;              // Ton / Taladro
  alturaBanco: number;             // m
};

type CostoPerforacionResultados = {
  costoPerforacionPorMetro: number;  // US$ / m
  costoPerforacionPorTon: number;    // US$ / Ton
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
  // Simplificado: (Costo Perforacion US$/m) x (Altura Banco + SubDrilling) / (Ton/Taladro)
  // Según la imagen: 1.59 / 12.36 = 0.13
  // donde 12.36 = Ton/Taladro / (Altura Banco + SubDrilling)
  const costoPerforacionPorTon = costoPerforacionPorMetro / (tonelaje / alturaBanco);

  return {
    costoPerforacionPorMetro,
    costoPerforacionPorTon
  };
}
