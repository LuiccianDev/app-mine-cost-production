// alturaBanco movido a SharedData
export type MallaData = {
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

export const defaultMallaValues: MallaData = {
    densidadMaterial: 3.75,
    factorPotencia: 0.40,
    diametroTaladro: 2.50,
    densidadAnfo: 0.80,
};