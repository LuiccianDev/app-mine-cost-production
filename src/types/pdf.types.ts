export type PDFData = {
    projectCode: string;
    // Malla de Perforación
    burden: number;
    espaciamiento: number;
    volumenRotaTaladro: number;
    tonelajePerforado: number;
    librasAnfo: number;
    alturaBanco: number;

    // Perforación
    costoPerforacionMetro: number;
    costoPerforacionTon: number;
    numeroPerforadoras: number;
    metrosPerforado: number;

    // Voladura
    costoVoladura: number;

    // Limpieza
    requerimientoScoops: number;
    costoLimpieza: number;

    // Carguio
    requerimientoScoop: number;
    costoCarguio: number;

    // Transporte
    flotaCamiones: number;
    produccionFlotaCamiones: number;
    costoTransporte: number;

    // Requerimiento Equipos
    requerimientoPerforadora: number;
    requerimientoScoopsLimpieza: number;
    requerimientoScoopsCarguio: number;
    requerimientoScoopRelleno: number;
    totalScoops: number;
    flotaCamionesTransporte: number;

    // Relleno Cementado
    costoTransporteRC: number;
    costoMaterialRelleno: number;
    costoTotalRelleno35: number;
    costoTotalRelleno30: number;

    // Relleno Detrítico
    costoTransporteRD: number;
    costoMaterialRellenoRD: number;
    costoTotalRellenoRD: number;

    // Costos Finales
    costoMinadoProyectado: number;
    costoMinado: number;
}

export const defaultPDFDataValues: PDFData = {
    projectCode: 'TEXT',
    // Malla de Perforación
    burden: 0,
    espaciamiento: 0,
    volumenRotaTaladro: 0,
    tonelajePerforado: 0,
    librasAnfo: 0,
    alturaBanco: 0,
    // Perforación
    costoPerforacionMetro: 0,
    costoPerforacionTon: 0,
    numeroPerforadoras: 0,
    metrosPerforado: 0,
    // Voladura
    costoVoladura: 0,
    // Limpieza
    requerimientoScoops: 0,
    costoLimpieza: 0,
    // Carguio
    requerimientoScoop: 0,
    costoCarguio: 0,
    // Transporte
    flotaCamiones: 0,
    produccionFlotaCamiones: 0,
    costoTransporte: 0,
    // Requerimiento Equipos
    requerimientoPerforadora: 0,
    requerimientoScoopsLimpieza: 0,
    requerimientoScoopsCarguio: 0,
    requerimientoScoopRelleno: 0,
    totalScoops: 0,
    flotaCamionesTransporte: 0,
    // Relleno Cementado
    costoTransporteRC: 0,
    costoMaterialRelleno: 0,
    costoTotalRelleno35: 0,
    costoTotalRelleno30: 0,
    // Relleno Detrítico
    costoTransporteRD: 0,
    costoMaterialRellenoRD: 0,
    costoTotalRellenoRD: 0,
    // Costos Finales
    costoMinadoProyectado: 0,

    costoMinado: 0
}