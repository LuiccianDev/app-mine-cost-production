

export type CostoVoladuraData = {
    costoAnfo: number;
    costoDinamita: number;
    costoRetardoFanel: number;
    costoCordonDetonante: number;
    costoCamionAnfoCar: number;
    costoChispeo: number;
    costoManoDeObra: number;
    tonelajePerforado: number; /*  AUTO */

    pentacordEmpleado: number;
    tiempoCarguioAnfoCar: number;
    mechaRapidaEmpleada: number;
    numeroHombresCarguio: number;
    tiempoEmpleadoCarguio: number;

};

export type CostoVoladuraResultsData = {
    consumoAnfo: number;
    consumoDinamita: number;
    consumoRetardos: number;
    consumoPentacord: number;
    consumoCamion: number;
    consumoChispeo: number;
    consumoManoObra: number;
    totalAnfo: number;
    totalDinamita: number;
    totalRetardos: number;
    totalPentacord: number;
    totalCamion: number;
    totalChispeo: number;
    totalManoObra: number;
    costoTotalPorTaladro: number;
    costoVoladuraPorTonelada: number;
};

export const defaultCostoVoladuraValues: CostoVoladuraData = {
    costoAnfo: 0.21,
    costoDinamita: 0.13,
    costoRetardoFanel: 1.03,
    costoCordonDetonante: 0.12,
    costoCamionAnfoCar: 0.00,
    costoChispeo: 0.08,
    costoManoDeObra: 2.00,
    tonelajePerforado: 122.45,

    /* values not in form  */
    pentacordEmpleado: 14.24,
    tiempoCarguioAnfoCar: 0.14,
    mechaRapidaEmpleada: 14.00,
    numeroHombresCarguio: 3.00,
    tiempoEmpleadoCarguio: 0.14,
};