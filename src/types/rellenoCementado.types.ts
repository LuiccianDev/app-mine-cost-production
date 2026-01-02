export type RellenoCementadoData = {
    produccionMineral: number;
    produccionRelleno: number;
    capacidadCuchara: number;
    factorCuchara: number;
    densidadRotaMaterialRelleno: number;
    tiempoDeUnPase: number;
    disponibilidadMecanica: number;
    disponibilidadOperativa: number;
    numeroHorasPorGuardia: number;
    numeroGuardiasPorDia: number;
    costoHoraEquipo: number;
    densidadMineral: number;
    costoPreparacionAgregados: number;
    costoPreparacionPlantaConcreto: number;
    costoTransporteRelaveChura: number;
    costoCemento: number;
};

export type RellenoCementadoResultados = {
    toneladaPorPase: number;
    numeroPasesPorHora: number;
    produccionTonPorHora: number;
    produccionTonPorDia: number;
    requerimientoScoop: number;
    costoTransporte: number;
    costoMaterialRelleno35: number;
    costoTotalRelleno35: number;
    costoMaterialRelleno30: number;
    costoTotalRelleno30: number;
};

export const defaultRellenoCementadoValues: RellenoCementadoData = {
    produccionMineral: 1451.67,
    produccionRelleno: 390.34,
    capacidadCuchara: 3.00,
    factorCuchara: 75,
    densidadRotaMaterialRelleno: 2.00,
    tiempoDeUnPase: 480.00,
    disponibilidadMecanica: 80.00,
    disponibilidadOperativa: 80.00,
    numeroHorasPorGuardia: 10.00,
    numeroGuardiasPorDia: 2.00,
    costoHoraEquipo: 60.00,
    densidadMineral: 3.7,
    costoPreparacionAgregados: 2.50,
    costoPreparacionPlantaConcreto: 1.47,
    costoTransporteRelaveChura: 2.60,
    costoCemento: 10.80,
};