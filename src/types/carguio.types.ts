export type CarguioData = {
    produccionMina: number;
    ratioDM: number;
    produccionDesmonte: number;
    mineralMasDesmonte: number;
    capacidadCuchara: number;
    factorCuchara: number;
    densidadRotaMineral: number;
    tiempoDeUnPase: number;
    disponibilidadMecanica: number;
    disponibilidadOperativa: number;
    numeroHorasPorGuardia: number;
    numeroGuardiasPorDia: number;
    costoHoraDeEquipo: number;
};

export type CarguioResultados = {
    toneladaPorPase: number;
    numeroPasesPorHora: number;
    produccionTonPorHora: number;
    produccionTonPorDia: number;
    requerimientoScoop: number;
    costoCarguio: number;
};

export const defaultCarguioValues: CarguioData = {
    produccionMina: 1451.67,
    ratioDM: 0.00,
    produccionDesmonte: 0.00,
    mineralMasDesmonte: 1451.67,
    capacidadCuchara: 3.00,
    factorCuchara: 75,
    densidadRotaMineral: 2.70,
    tiempoDeUnPase: 120.00,
    disponibilidadMecanica: 80.00,
    disponibilidadOperativa: 85.00,
    numeroHorasPorGuardia: 10.00,
    numeroGuardiasPorDia: 2.00,
    costoHoraDeEquipo: 60.00,
};