export type MallaData = {
    alturaBanco: number;
    densidadMaterial: number;
    factorPotencia: number;
    diametroTaladro: number;
    densidadAnfo: number;
};


export type MallaResultados = {
    burden: number;
    espaciamiento: number;
    volumenRotaTaladro: number;
    tonelajePerforado: number;
    librasAnfo: number;
    alturaCarga: number;
    alturaBanco: number; // en metros
};

export const defaultMallaValues : MallaData = {
    alturaBanco: 32.5,
    densidadMaterial: 3.75,
    factorPotencia: 0.40,
    diametroTaladro: 2.50,
    densidadAnfo: 0.80,
};