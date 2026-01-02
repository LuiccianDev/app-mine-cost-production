import {type RequerimientoPerforadoraData as RequerimientoPerforadoraFormData, type RequerimientoPerforadoraResultados} from '@/src/types/requerimientoPerforadora.types';



export const defaultRequerimientoPerforadoraValues = {
  produccionMina: 1451.67,
  alturaBanco: 9.91,
  longuitudTaladro: 9.91,
  tonelajePerforado: 122.45,
  rendimientoBroca: 762.00,
  tiempoPerforacion: 80.00,
  horasProgramadas: 530.00,
  horasTrabajadas: 250.00,
  eficienciaPerforadora: 0.47,
  produccionTPM: 43.550,
  diasOperacion: 30,
  produccionTPD: 1452,
};

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
