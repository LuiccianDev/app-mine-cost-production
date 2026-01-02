import { type RellenoCementadoData as RellenoCementadoFormData, type RellenoCementadoResultados } from '@/src/types/rellenoCementado.types';


export const defaultRellenoCementadoValues = {
  produccionMineral: 1451.67,
  produccionRelleno: 390.34,
  capacidadCuchara: 3.00,
  factorCuchara: 75,
  densidadRotaMaterialRelleno: 2.00,
  tiempoPase: 480.00,
  disponibilidadMecanica: 80.00,
  disponibilidadOperativa: 80.00,
  horasPorGuardia: 10.00,
  numeroGuardiasPorDia: 2.00,
  costoHoraEquipo: 60.00,
  densidadMineral: 3.7,
  costoPreparacionAgregados: 2.50,
  costoPreparacionPlantaConcreto: 1.47,
  costoTransporteRelaveChura: 2.60,
  costoCemento: 10.80,
};

export function calcularRellenoCementado(data: RellenoCementadoFormData): RellenoCementadoResultados {
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
    costoPreparacionPlantaConcreto,
    costoTransporteRelaveChura,
    costoCemento,
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

  // COSTO MATERIAL RELLENO 3.5% (US$/Ton)
  const costoMaterialRelleno35 = (costoPreparacionAgregados + costoPreparacionPlantaConcreto + costoTransporteRelaveChura + costoCemento)/densidadMineral;
  // COSTO TOTAL RELLENO 3.5% (US$/Ton)
  const costoTotalRelleno35 = (costoMaterialRelleno35) + costoTransporte;

  // Para 3.0% los costos son similares pero con diferentes valores de cemento
  // Según la imagen, los valores son ligeramente diferentes
  const consumoCemnento_3 = 9.60 // averiguar datos 
  
  const costoMaterialRelleno30 = (costoPreparacionAgregados + costoPreparacionPlantaConcreto + costoTransporteRelaveChura + consumoCemnento_3)/densidadMineral;
  const costoTotalRelleno30 = costoMaterialRelleno30 + costoTransporte;

  return {
    toneladaPorPase,
    numeroPasesPorHora,
    produccionTonPorHora,
    produccionTonPorDia,
    requerimientoScoop,
    costoTransporte,
    costoMaterialRelleno35,
    costoTotalRelleno35,
    costoMaterialRelleno30,
    costoTotalRelleno30
  };
}
