export type TransporteData = {
    capacidadCamion: number;
    eficienciaLlenado: number;
    tiempoAcarreo: number;
    tiempoRetorno: number;
    tiempoCargaDescarga: number;
    tiempoCarguio: number;
    cicloCamion: number;
    disponibilidadOperativaCamion: number;
    disponibilidadMecanicaCamion: number;
    requerimientoScoop: number;
    costoHoraCamion: number;
    costoMantenimientoCamion: number;
    tiempoCarguioCamionTolva: number;
};

export type TransporteResultados = {
    cicloTotalCamion: number;
    numeroViajesPorHora: number;
    produccionCamion: number;
    numeroCamionesPorTolva: number;
    flotaCamiones: number;
    camionesOperacion: number;
    camionesStandBy: number;
    produccionFlotaCamiones: number;
    costoTransporte: number;
};

export const defaultTransporteValues : TransporteData = {
    capacidadCamion: 30.00,
    eficienciaLlenado: 95.00,
    tiempoAcarreo: 10.00,
    tiempoRetorno: 8.00,
    tiempoCargaDescarga: 2.00,
    tiempoCarguio: 2.00,
    cicloCamion: 22.00,
    disponibilidadOperativaCamion: 85.00,
    disponibilidadMecanicaCamion: 80.00,
    requerimientoScoop: 0.77,
    costoHoraCamion: 60.00,
    costoMantenimientoCamion: 0.00,
    tiempoCarguioCamionTolva: 5.00,
};
