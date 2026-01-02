import {type RequerimientoPerforadoraData as RequerimientoPerforadoraFormData, type RequerimientoPerforadoraResultados} from '@/src/types/requerimientoPerforadora.types';


export function calcularRequerimientoPerforadora(data: RequerimientoPerforadoraFormData): RequerimientoPerforadoraResultados {
  const {
    produccionMina,
    tonelajePerforado,
    longuitudTaladro,
    rendimientoBroca,
    tiempoPerforacion,
    eficienciaPerforadora
  } = data;

  // Nº PERFORADORA = (Produccion TPD / Ton/Taladro) × (Long.Tal / Rend.Broca) × (Tiempo Perf / 24 Hr) × (1 / Efic.Perf)
  const numeroPerforadoras = (produccionMina / tonelajePerforado) * (longuitudTaladro / rendimientoBroca) * (tiempoPerforacion / 24) * (1 / eficienciaPerforadora);

  // METROS PERFORADO (m/dia) = Produccion TPD / (Ton/Taladro) × (1 Tal / Long.Tal m)
  const metrosPerforadosPorDia = (produccionMina / tonelajePerforado) * longuitudTaladro;

  // Convertir metros a pies (1 m = 3.28084 pies)
  const piesPerforadosPorDia = metrosPerforadosPorDia * 3.28084;

  return {
    numeroPerforadoras,
    metrosPerforadosPorDia,
    piesPerforadosPorDia
  };
}
