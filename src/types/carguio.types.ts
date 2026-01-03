// produccionMina movido a SharedData
export type CarguioData = {
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
    ratioDM: 0.0,
    produccionDesmonte: 0.0,
    mineralMasDesmonte: 1451.67,
    capacidadCuchara: 3.0,
    factorCuchara: 75,
    densidadRotaMineral: 2.7,
    tiempoDeUnPase: 120.0,
    disponibilidadMecanica: 80.0,
    disponibilidadOperativa: 85.0,
    numeroHorasPorGuardia: 10.0,
    numeroGuardiasPorDia: 2.0,
    costoHoraDeEquipo: 60.0,
};