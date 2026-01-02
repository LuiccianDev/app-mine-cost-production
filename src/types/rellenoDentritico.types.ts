export type RellenoDetriticoData = {
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
    costoTransporteDesmonte: number;
};

export type RellenoDetriticoResultados = {
    toneladaPorPase: number;
    numeroPasesPorHora: number;
    produccionTonPorHora: number;
    produccionTonPorDia: number;
    requerimientoScoop: number;
    costoTransporte: number;
    costoMaterialRelleno: number;
    costoTotalRelleno: number;
};

export const defaultRellenoDetriticoValues: RellenoDetriticoData = {
    produccionMineral: 1451.67,
    produccionRelleno: 414.76,
    capacidadCuchara: 3.00,
    factorCuchara: 75,
    densidadRotaMaterialRelleno: 3.00,
    tiempoDeUnPase: 480.00,
    disponibilidadMecanica: 85.00,
    disponibilidadOperativa: 85.00,
    numeroHorasPorGuardia: 10.00,
    numeroGuardiasPorDia: 2.00,
    costoHoraEquipo: 60.00,
    densidadMineral: 3.50,
    costoPreparacionAgregados: 0,
    costoTransporteDesmonte: 1.75,
};

