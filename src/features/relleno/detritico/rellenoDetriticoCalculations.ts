import {type RellenoDetriticoData as RellenoDetriticoFormData, type RellenoDetriticoResultados} from '@/src/types/rellenoDentritico.types';


export const defaultRellenoDetriticoValues = {
  produccionMineral: 1451.67,
  produccionRelleno: 414.76,
  capacidadCuchara: 3.00,
  factorCuchara: 75,
  densidadRotaMaterialRelleno: 3.00,
  tiempoPase: 480.00,
  disponibilidadMecanica: 85.00,
  disponibilidadOperativa: 85.00,
  horasPorGuardia: 10.00,
  numeroGuardiasPorDia: 2.00,
  costoHoraEquipo: 60.00,
  densidadMineral: 3.50,
  costoPreparacionAgregados: 0,
  costoTransporteDesmonte: 1.75,
};

export function calcularRellenoDetritico(data: RellenoDetriticoFormData): RellenoDetriticoResultados {
  const {
    capacidadCuchara,
    densidadRotaMaterialRelleno,
    factorCuchara,
    tiempoDeUnPase,
    disponibilidadMecanica,
    disponibilidadOperativa,
    numeroHorasPorGuardia,
    numeroGuardiasPorDia,
    produccionRelleno,
    costoHoraEquipo,
    costoPreparacionAgregados,
    costoTransporteDesmonte,
    densidadMineral
  } = data;

  // TONELADA POR PASE (SCOOP) = Yd3/Pase × Densid.rota × Factor Cuchara
  const toneladaPorPase = capacidadCuchara * densidadRotaMaterialRelleno * factorCuchara * 0.765 /100;

  // Nº DE PASES POR HORA = 1 Hr / Tiempo de 1 pase
  const numeroPasesPorHora = 60 / (tiempoDeUnPase / 60);

  // PRODUCCION (Ton/Hr) = Ton/Pase × Pases/Hr × Disponib.Mecanica × Disponib.Operativa
  const produccionTonPorHora = toneladaPorPase * numeroPasesPorHora * (disponibilidadMecanica / 100) * (disponibilidadOperativa / 100);

  // PRODUCCION (Ton/Dia) = Produccion (Ton/Hr) × (Hr/Guardia) × (Nº guardia/dia)
  const produccionTonPorDia = produccionTonPorHora * numeroHorasPorGuardia * numeroGuardiasPorDia;

  // REQUERIMIENTO DE SCOOP = (Material Ton/dia) / (Produccion Ton/dia)
  const requerimientoScoop = produccionRelleno / produccionTonPorDia;

  // COSTO DE TRANSPORTE (US$/Ton) = (Costo por Hr del Equipo) / (Produccion Ton/Hr)
  const costoTransporte = costoHoraEquipo / produccionTonPorHora;

  // COSTO MATERIAL RELLENO (US$/Ton) = Costo de preparacion relleno / densidad de mineral
  const costoMaterialRelleno = (costoPreparacionAgregados + costoTransporteDesmonte) / densidadMineral;

  // COSTO TOTAL RELLENO (US$/Ton)
  const costoTotalRelleno = costoMaterialRelleno + costoTransporte;

  return {
    toneladaPorPase,
    numeroPasesPorHora,
    produccionTonPorHora,
    produccionTonPorDia,
    requerimientoScoop,
    costoTransporte,
    costoMaterialRelleno,
    costoTotalRelleno
  };
}
