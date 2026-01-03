import { type CostoPerforacionData, type CostoPerforacionResultados } from '@/src/types/costoPerforacion.tyes';
import { type SharedData } from '@/src/types/shared.types';

// Tipo combinado para los cálculos
type CostoPerforacionCalculationData = CostoPerforacionData & Pick<SharedData, 'tiempoPerforacion' | 'rendimientoBroca' | 'tonelajePerforado' | 'alturaBanco'>;

export function calcularCostoPerforacion(data: CostoPerforacionCalculationData): CostoPerforacionResultados {
  const { 
    costoBrocaAccesorios, 
    costoEquipoPerforacion, 
    tiempoPerforacion, 
    rendimientoBroca, 
    tonelajePerforado, 
    alturaBanco 
  } = data;

  //* COSTO PERFORACION (US$/m) = (Costo Broca + Costo Equipo Perforac. x Tiempo Perf.) / Rendimiento Broca
  const costoPerforacionPorMetro = (costoBrocaAccesorios + (costoEquipoPerforacion * tiempoPerforacion)) / rendimientoBroca;

  // COSTO PERFORACION (US$/Ton) = (Costo Perforacion US$/m) / ((Ton/Taladro) / (Altura Banco + SubDrilling))
  const costoPerforacionPorTon = costoPerforacionPorMetro / (tonelajePerforado / alturaBanco);

  return {
    costoPerforacionPorMetro,
    costoPerforacionPorTon
  };
}
