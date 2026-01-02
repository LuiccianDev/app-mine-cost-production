export type LimpiezaData = {
    produccionMina: number; /* AUTO */
    produccionDesmonte: number; /* AUTO */
    mineralMasDesmonte: number; /* AUTO */
    capacidadCuchara: number; /* VERIFICAION del AUTO */
    factorCuchara: number; /* AUTO */
    densidadRotaMineral: number; /* AUTO */
    tiempoDeUnPase: number; /*VIAJE DE IDA Y VUELTA*/
    disponibilidadMecanica: number; /* AUTO */
    disponibilidadOperativa: number; /* AUTO */
    numeroHorasPorGuardia: number; /* AUTO */
    numeroGuardiasPorDia: number; /* AUTO */
    costoHoraDeEquipo: number; /* AUTO */
};

export type LimpiezaResultados = {
    toneladaPorPase: number;
    numeroPasesPorHora: number;
    produccionTonPorHora: number;
    produccionTonPorDia: number;
    requerimientoScoops: number;
    costoLimpieza: number;
};

export const defaultLimpiezaValues: LimpiezaData = {
    produccionMina: 1451.67,
    produccionDesmonte: 0.00,
    mineralMasDesmonte: 1451.67,
    capacidadCuchara: 5.00,
    factorCuchara: 75,
    densidadRotaMineral: 2.70,
    tiempoDeUnPase: 480.00,
    disponibilidadMecanica: 80.00,
    disponibilidadOperativa: 80.00,
    numeroHorasPorGuardia: 10.00,
    numeroGuardiasPorDia: 2.00,
    costoHoraDeEquipo: 60.00,
};