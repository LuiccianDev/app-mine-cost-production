import { create } from 'zustand';
import { type MallaData, defaultMallaValues } from '@/src/types/malla.types';
import { type CostoPerforacionData, defaultCostoPerforacionValues } from '@/src/types/costoPerforacion.tyes';
import { type CostoVoladuraData, defaultCostoVoladuraValues } from '@/src/types/costoVoladura.types';
import { type RequerimientoPerforadoraData, defaultRequerimientoPerforadoraValues } from '@/src/types/requerimientoPerforadora.types';
import { type CarguioData , defaultCarguioValues} from '@/src/types/carguio.types';
import { type LimpiezaData, defaultLimpiezaValues } from '@/src/types/limpieza.types';
import { type TransporteData, defaultTransporteValues } from '@/src/types/transporte.types';
import { type RellenoCementadoData, defaultRellenoCementadoValues } from '@/src/types/rellenoCementado.types';
import { type RellenoDetriticoData, defaultRellenoDetriticoValues } from '@/src/types/rellenoDentritico.types';




/*Malla state */
interface MallaState extends MallaData {
    /*create function change values */
    setAlturaBanco: (altura: number) => void;
    setDensidadMaterial: (densidad: number) => void;
    setFactorPotencia: (factor: number) => void;
    setDiametroTaladro: (diametro: number) => void;
    setDensidadAnfo: (densidad: number) => void;
}

export const useMallaStore = create<MallaState>()((set) => ({
    /* import default values */
    ...defaultMallaValues,

    /* functions change values */

    setAlturaBanco: (altura: number) => set({ alturaBanco: altura }),
    setDensidadMaterial: (densidad: number) => set({ densidadMaterial: densidad }),
    setFactorPotencia: (factor: number) => set({ factorPotencia: factor }),
    setDiametroTaladro: (diametro: number) => set({ diametroTaladro: diametro }),
    setDensidadAnfo: (densidad: number) => set({ densidadAnfo: densidad }),

}))


/* Costo Perforacion  */

interface CostosPerforacionState extends CostoPerforacionData {

    setCostoBrocaAccesorios: (costo: number) => void;
    setCostoEquipoPerforacion: (costo: number) => void;
    setTiempoPerforacion: (tiempo: number) => void;
    setRendimientoBroca: (rendimiento: number) => void;
    setTonelajePerforado: (tonelaje: number) => void;
    setAlturaBanco: (altura: number) => void;
}

export const useCostosPerforacionStore = create<CostosPerforacionState>()((set) => ({

    ...defaultCostoPerforacionValues,
    //costoBrocaAccesorios: 500,
    //costoEquipoPerforacion: 300,
    //tiempoPerforacion: 60,
    //rendimientoBroca: 1.5,
    //tonelajePerforado: 1000, /* AUTO */
    //alturaBanco: 50, /* Auto */

    setCostoBrocaAccesorios: (costo: number) => set({ costoBrocaAccesorios: costo }),
    setCostoEquipoPerforacion: (costo: number) => set({ costoEquipoPerforacion: costo }),
    setTiempoPerforacion: (tiempo: number) => set({ tiempoPerforacion: tiempo }),
    setRendimientoBroca: (rendimiento: number) => set({ rendimientoBroca: rendimiento }),
    setTonelajePerforado: (tonelaje: number) => set({ tonelajePerforado: tonelaje }),
    setAlturaBanco: (altura: number) => set({ alturaBanco: altura }),
}))


/* Costso de Voladuras */

interface CostosVoladurasState extends CostoVoladuraData {
/*     costoAnfo: number;
    costoDinamita: number;
    costoRetardoFanel: number;
    costoCordonDetonante: number;
    costoCamionAnfoCar: number;
    costoChispeo: number;
    costoManoDeObra: number;
    tonelajePerforado: number; */ /*  AUTO */


    /* values of de calulations apart */

/*     pentacordEmpleado: number;
    tiempoCarguioAnfoCar: number;
    mechaRapidaEmpleada: number;
    numeroHombresCarguio: number;
    tiempoEmpleadoCarguio: number; */

    setCostoAnfo: (costo: number) => void;
    setCostoDinamita: (costo: number) => void;
    setCostoRetardoFanel: (costo: number) => void;
    setCostoCordonDetonante: (costo: number) => void;
    setCostoCamionAnfoCar: (costo: number) => void;
    setCostoChispeo: (costo: number) => void;
    setCostoManoDeObra: (costo: number) => void;
    setTonelajePerforado: (tonelaje: number) => void;

    setPentacordEmpleado: (pentacord: number) => void;
    setTiempoCarguioAnfoCar: (tiempo: number) => void;
    setMechaRapidaEmpleada: (mecha: number) => void;
    setNumeroHombresCarguio: (numero: number) => void;
    setTiempoEmpleadoCarguio: (tiempo: number) => void;

}

export const useCostosVoladurasStore = create<CostosVoladurasState>()((set) => ({

    ...defaultCostoVoladuraValues,
    //! extende values of the form
/*     costoAnfo: 1.2,
    costoDinamita: 2.5,
    costoRetardoFanel: 0.5,
    costoCordonDetonante: 0.3,
    costoCamionAnfoCar: 150,
    costoChispeo: 200,
    costoManoDeObra: 250,
    tonelajePerforado: 1000, */ /* AUTO */

/* 
    pentacordEmpleado: 14.24,
    tiempoCarguioAnfoCar: 0.14,
    mechaRapidaEmpleada: 14.00,
    numeroHombresCarguio: 3.00,
    tiempoEmpleadoCarguio: 0.14, */

    setCostoAnfo: (costo: number) => set({ costoAnfo: costo }),
    setCostoDinamita: (costo: number) => set({ costoDinamita: costo }),
    setCostoRetardoFanel: (costo: number) => set({ costoRetardoFanel: costo }),
    setCostoCordonDetonante: (costo: number) => set({ costoCordonDetonante: costo }),
    setCostoCamionAnfoCar: (costo: number) => set({ costoCamionAnfoCar: costo }),
    setCostoChispeo: (costo: number) => set({ costoChispeo: costo }),
    setCostoManoDeObra: (costo: number) => set({ costoManoDeObra: costo }),
    setTonelajePerforado: (tonelaje: number) => set({ tonelajePerforado: tonelaje }),

    setPentacordEmpleado: (pentacord: number) => set({ pentacordEmpleado: pentacord }),
    setTiempoCarguioAnfoCar: (tiempo: number) => set({ tiempoCarguioAnfoCar: tiempo }),
    setMechaRapidaEmpleada: (mecha: number) => set({ mechaRapidaEmpleada: mecha }),
    setNumeroHombresCarguio: (numero: number) => set({ numeroHombresCarguio: numero }),
    setTiempoEmpleadoCarguio: (tiempo: number) => set({ tiempoEmpleadoCarguio: tiempo }),
}))


/* Requerimiento Perforadora */

interface RequerimientoPerforadoraState extends RequerimientoPerforadoraData  {
 
    // produccionMina: number;
    // alturaBanco: number; /* AUTO */
    // longuitudTaladro: number;
    // tonelajePerforado: number; /* AUTO */
    // rendimientoBroca: number; /* AUTO */
    // tiempoPerforacion: number; /* AUTO */
    // horasProgramadas: number;
    // horasTrabajadas: number;
    // eficienciaPerforadora: number;
    // produccionTPM: number;
    // diasOperacion: number;
    // produccionTPD: number;

    setProduccionMina: (produccion: number) => void;
    setAlturaBanco: (altura: number) => void;
    setLonguitudTaladro: (longuitud: number) => void;
    setTonelajePerforado: (tonelaje: number) => void;
    setRendimientoBroca: (rendimiento: number) => void;
    setTiempoPerforacion: (tiempo: number) => void;
    setHorasProgramadas: (horas: number) => void;
    setHorasTrabajadas: (horas: number) => void;
    setEficienciaPerforadora: (eficiencia: number) => void;
    setProduccionTPM: (produccion: number) => void;
    setDiasOperacion: (dias: number) => void;
    setProduccionTPD: (produccion: number) => void;
}

export const useRequerimientoPerforadoraStore = create<RequerimientoPerforadoraState>()((set) => ({
    ...defaultRequerimientoPerforadoraValues,
    // produccionMina: 5000, /* AUTO */
    // alturaBanco: 50, /* AUTO */
    // longuitudTaladro: 60,
    // tonelajePerforado: 1000, /* AUTO */
    // rendimientoBroca: 1.5, /* AUTO */
    // tiempoPerforacion: 60, /* AUTO */
    // horasProgramadas: 20,
    // horasTrabajadas: 10,
    // eficienciaPerforadora: 0.85,
    // produccionTPM: 0,
    // diasOperacion: 0,
    // produccionTPD: 0,

    setProduccionMina: (produccion: number) => set({ produccionMina: produccion }),
    setAlturaBanco: (altura: number) => set({ alturaBanco: altura }),
    setLonguitudTaladro: (longuitud: number) => set({ longuitudTaladro: longuitud }),
    setTonelajePerforado: (tonelaje: number) => set({ tonelajePerforado: tonelaje }),
    setRendimientoBroca: (rendimiento: number) => set({ rendimientoBroca: rendimiento }),
    setTiempoPerforacion: (tiempo: number) => set({ tiempoPerforacion: tiempo }),
    setHorasProgramadas: (horas: number) => set({ horasProgramadas: horas }),
    setHorasTrabajadas: (horas: number) => set({ horasTrabajadas: horas }),
    setEficienciaPerforadora: (eficiencia: number) => set({ eficienciaPerforadora: eficiencia }),
    setProduccionTPM: (produccion: number) => set({ produccionTPM: produccion }),
    setDiasOperacion: (dias: number) => set({ diasOperacion: dias }),
    setProduccionTPD: (produccion: number) => set({ produccionTPD: produccion }),
}))

/* Carguio */

interface CarguioState extends CarguioData {
    // produccionMina: number;
    // ratioDM: number;
    // produccionDesmonte: number;
    // mineralMasDesmonte: number;
    // capacidadCuchara: number;
    // factorCuchara: number;
    // densidaRotaMineral: number;
    // tiempoDeUnPase: number;
    // disponibilidadMecanica: number;
    // disponibilidadOperativa: number;
    // numeroHorasPorGuardia: number;
    // numeroGuardiasPorDia: number;
    // costoHoraDeEquipo: number;

    setProduccionMina: (produccion: number) => void;
    setRatioDM: (ratio: number) => void;
    setProduccionDesmonte: (produccion: number) => void;
    setMineralMasDesmonte: (valor: number) => void;
    setCapacidadCuchara: (capacidad: number) => void;
    setFactorCuchara: (factor: number) => void;
    setDensidadRotaMineral: (densidad: number) => void;
    setTiempoDeUnPase: (tiempo: number) => void;
    setDisponibilidadMecanica: (disponibilidad: number) => void;
    setDisponibilidadOperativa: (disponibilidad: number) => void;
    setNumeroHorasPorGuardia: (horas: number) => void;
    setNumeroGuardiasPorDia: (numero: number) => void;
    setCostoHoraDeEquipo: (costo: number) => void;

}

export const useCarguioStore = create<CarguioState>()((set) => ({
    ...defaultCarguioValues,
    // produccionMina: 5000,
    // ratioDM: 1.5,
    // produccionDesmonte: 7500,
    // mineralMasDesmonte: 10000,
    // capacidadCuchara: 5,
    // factorCuchara: 0.8,
    // densidaRotaMineral: 0.9,
    // tiempoDeUnPase: 0.5,
    // disponibilidadMecanica: 0.85,
    // disponibilidadOperativa: 0.9,
    // numeroHorasPorGuardia: 8,
    // numeroGuardiasPorDia: 3,
    // costoHoraDeEquipo: 150,

    setProduccionMina: (produccion: number) => set({ produccionMina: produccion }),
    setRatioDM: (ratio: number) => set({ ratioDM: ratio }),
    setProduccionDesmonte: (produccion: number) => set({ produccionDesmonte: produccion }),
    setMineralMasDesmonte: (valor: number) => set({ mineralMasDesmonte: valor }),
    setCapacidadCuchara: (capacidad: number) => set({ capacidadCuchara: capacidad }),
    setFactorCuchara: (factor: number) => set({ factorCuchara: factor }),
    setDensidadRotaMineral: (densidad: number) => set({ densidadRotaMineral: densidad }),
    setTiempoDeUnPase: (tiempo: number) => set({ tiempoDeUnPase: tiempo }),
    setDisponibilidadMecanica: (disponibilidad: number) => set({ disponibilidadMecanica: disponibilidad }),
    setDisponibilidadOperativa: (disponibilidad: number) => set({ disponibilidadOperativa: disponibilidad }),
    setNumeroHorasPorGuardia: (horas: number) => set({ numeroHorasPorGuardia: horas }),
    setNumeroGuardiasPorDia: (numero: number) => set({ numeroGuardiasPorDia: numero }),
    setCostoHoraDeEquipo: (costo: number) => set({ costoHoraDeEquipo: costo }),
}))


/* Limpieza */

interface LimpiezaState extends LimpiezaData {
    // produccionMina: number; /* AUTO */
    // produccionDesmonte: number; /* AUTO */
    // mineralMasDesmonte: number; /* AUTO */
    // capacidadCuchara: number; /* VERIFICAION del AUTO */
    // factorCuchara: number; /* AUTO */
    // densidadRotaMineral: number; /* AUTO */
    // tiempoDeUnPase: number; /*VIAJE DE IDA Y VUELTA*/
    // disponibilidadMecanica: number; /* AUTO */
    // disponibilidadOperativa: number; /* AUTO */
    // numeroHorasPorGuardia: number; /* AUTO */
    // numeroGuardiasPorDia: number; /* AUTO */
    // costoHoraDeEquipo: number; /* AUTO */


    setProduccionMina: (produccion: number) => void;
    setProduccionDesmonte: (produccion: number) => void;
    setMineralMasDesmonte: (valor: number) => void;
    setCapacidadCuchara: (capacidad: number) => void;
    setFactorCuchara: (factor: number) => void;
    setDensidadRotaMineral: (densidad: number) => void;
    setTiempoDeUnPase: (tiempo: number) => void;
    setDisponibilidadMecanica: (disponibilidad: number) => void;
    setDisponibilidadOperativa: (disponibilidad: number) => void;
    setNumeroHorasPorGuardia: (horas: number) => void;
    setNumeroGuardiasPorDia: (numero: number) => void;
    setCostoHoraDeEquipo: (costo: number) => void;
}

export const useLimpiezaStore = create<LimpiezaState>()((set) => ({

    ...defaultLimpiezaValues,
    // produccionMina: 5000, /* AUTO */
    // produccionDesmonte: 7500, /* AUTO */
    // mineralMasDesmonte: 10000, /* AUTO */
    // capacidadCuchara: 5, /* VERIFICAION del AUTO */
    // factorCuchara: 0.8, /* AUTO */
    // densidadRotaMineral: 0.9, /* AUTO */
    // tiempoDeUnPase: 1, /*VIAJE DE IDA Y VUELTA*/
    // disponibilidadMecanica: 0.85, /* AUTO */
    // disponibilidadOperativa: 0.9, /* AUTO */
    // numeroHorasPorGuardia: 8, /* AUTO */
    // numeroGuardiasPorDia: 3, /* AUTO */
    // costoHoraDeEquipo: 150, /* AUTO */

    setProduccionMina: (produccion: number) => set({ produccionMina: produccion }),
    setProduccionDesmonte: (produccion: number) => set({ produccionDesmonte: produccion }),
    setMineralMasDesmonte: (valor: number) => set({ mineralMasDesmonte: valor }),
    setCapacidadCuchara: (capacidad: number) => set({ capacidadCuchara: capacidad }),
    setFactorCuchara: (factor: number) => set({ factorCuchara: factor }),
    setDensidadRotaMineral: (densidad: number) => set({ densidadRotaMineral: densidad }),
    setTiempoDeUnPase: (tiempo: number) => set({ tiempoDeUnPase: tiempo }),
    setDisponibilidadMecanica: (disponibilidad: number) => set({ disponibilidadMecanica: disponibilidad }),
    setDisponibilidadOperativa: (disponibilidad: number) => set({ disponibilidadOperativa: disponibilidad }),
    setNumeroHorasPorGuardia: (horas: number) => set({ numeroHorasPorGuardia: horas }),
    setNumeroGuardiasPorDia: (numero: number) => set({ numeroGuardiasPorDia: numero }),
    setCostoHoraDeEquipo: (costo: number) => set({ costoHoraDeEquipo: costo }),
}))


/* Transporte */

interface TransporteState extends TransporteData {
    // capacidadCamion: number;
    // eficienciaLlenado: number;
    // tiempoAcarreo: number;
    // tiempoRetorno: number;
    // tiempoCargaDescarga: number;
    // tiempoCarguio: number;
    // cicloCamion: number;
    // disponibilidadOperativaCamion: number;
    // disponibilidadMecanicaCamion: number;
    // requerimientoScoop: number;
    // costoHoraCamion: number;
    // costoMantenimientoCamion: number;
    // tiempoCarguioCamionTolva: number;

    setCapacidadCamion: (capacidad: number) => void;
    setEficienciaLlenado: (eficiencia: number) => void;
    setTiempoAcarreo: (tiempo: number) => void;
    setTiempoRetorno: (tiempo: number) => void;
    setTiempoCargaDescarga: (tiempo: number) => void;
    setTiempoCarguio: (tiempo: number) => void;
    setCicloCamion: (ciclo: number) => void;
    setDisponibilidadOperativaCamion: (disponibilidad: number) => void;
    setDisponibilidadMecanicaCamion: (disponibilidad: number) => void;
    setRequerimientoScoop: (requerimiento: number) => void;
    setCostoHoraCamion: (costo: number) => void;
    setCostoMantenimientoCamion: (costo: number) => void;
    setTiempoCarguioCamionTolva: (tiempo: number) => void;
}

export const useTransporteStore = create<TransporteState>()((set) => ({
    ...defaultTransporteValues,
    // capacidadCamion: 20,
    // eficienciaLlenado: 0.9,
    // tiempoAcarreo: 15,
    // tiempoRetorno: 10,
    // tiempoCargaDescarga: 5,
    // tiempoCarguio: 0,
    // cicloCamion: 0,
    // disponibilidadOperativaCamion: 0.9,
    // disponibilidadMecanicaCamion: 0.8,
    // requerimientoScoop: 0,
    // costoHoraCamion: 200,
    // costoMantenimientoCamion: 100,
    // tiempoCarguioCamionTolva: 0,

    setCapacidadCamion: (capacidad: number) => set({ capacidadCamion: capacidad }),
    setEficienciaLlenado: (eficiencia: number) => set({ eficienciaLlenado: eficiencia }),
    setTiempoAcarreo: (tiempo: number) => set({ tiempoAcarreo: tiempo }),
    setTiempoRetorno: (tiempo: number) => set({ tiempoRetorno: tiempo }),
    setTiempoCargaDescarga: (tiempo: number) => set({ tiempoCargaDescarga: tiempo }),
    setTiempoCarguio: (tiempo: number) => set({ tiempoCarguio: tiempo }),
    setCicloCamion: (ciclo: number) => set({ cicloCamion: ciclo }),
    setDisponibilidadOperativaCamion: (disponibilidad: number) => set({ disponibilidadOperativaCamion: disponibilidad }),
    setDisponibilidadMecanicaCamion: (disponibilidad: number) => set({ disponibilidadMecanicaCamion: disponibilidad }),
    setRequerimientoScoop: (requerimiento: number) => set({ requerimientoScoop: requerimiento }),
    setCostoHoraCamion: (costo: number) => set({ costoHoraCamion: costo }),
    setCostoMantenimientoCamion: (costo: number) => set({ costoMantenimientoCamion: costo }),
    setTiempoCarguioCamionTolva: (tiempo: number) => set({ tiempoCarguioCamionTolva: tiempo }),
}))


/* Relleno Cementado */

interface RellenoCementadoState extends RellenoCementadoData {
    // produccionMineral: number;
    // produccionRelleno: number;
    // capacidadCuchara: number;
    // factorCuchara: number;
    // densidadRotaMaterialRelleno: number;
    // tiempoDeUnPase: number;
    // disponibilidadMecanica: number;
    // disponibilidadOperativa: number;
    // numeroHorasPorGuardia: number;
    // numeroGuardiasPorDia: number;
    // costoHoraEquipo: number;
    // densidadMineral: number;
    // costoPreparacionAgregados: number;
    // costoPreparacionPlantaConcreto: number;
    // costoTransporteRelaveChura: number;
    // costoCemento: number;

    setProduccionMineral: (valor: number) => void;
    setProduccionRelleno: (valor: number) => void;
    setCapacidadCuchara: (valor: number) => void;
    setFactorCuchara: (valor: number) => void;
    setDensidadRotaMaterialRelleno: (valor: number) => void;
    setTiempoDeUnPase: (valor: number) => void;
    setDisponibilidadMecanica: (valor: number) => void;
    setDisponibilidadOperativa: (valor: number) => void;
    setNumeroHorasPorGuardia: (valor: number) => void;
    setNumeroGuardiasPorDia: (valor: number) => void;
    setCostoHoraEquipo: (valor: number) => void;
    setDensidadMineral: (valor: number) => void;
    setCostoPreparacionAgregados: (valor: number) => void;
    setCostoPreparacionPlantaConcreto: (valor: number) => void;
    setCostoTransporteRelaveChura: (valor: number) => void;
    setCostoCemento: (valor: number) => void;
}

export const useRellenoCementadoStore = create<RellenoCementadoState>()((set) => ({
    ...defaultRellenoCementadoValues,
    // produccionMineral: 1451.67,
    // produccionRelleno: 390.34,
    // capacidadCuchara: 3,
    // factorCuchara: 75,
    // densidadRotaMaterialRelleno: 2,
    // tiempoDeUnPase: 480,
    // disponibilidadMecanica: 80,
    // disponibilidadOperativa: 80,
    // numeroHorasPorGuardia: 10,
    // numeroGuardiasPorDia: 2,
    // costoHoraEquipo: 60,
    // densidadMineral: 3.7,
    // costoPreparacionAgregados: 2.5,
    // costoPreparacionPlantaConcreto: 1.47,
    // costoTransporteRelaveChura: 2.6,
    // costoCemento: 10.8,

    setProduccionMineral: (valor: number) => set({ produccionMineral: valor }),
    setProduccionRelleno: (valor: number) => set({ produccionRelleno: valor }),
    setCapacidadCuchara: (valor: number) => set({ capacidadCuchara: valor }),
    setFactorCuchara: (valor: number) => set({ factorCuchara: valor }),
    setDensidadRotaMaterialRelleno: (valor: number) => set({ densidadRotaMaterialRelleno: valor }),
    setTiempoDeUnPase: (valor: number) => set({ tiempoDeUnPase: valor }),
    setDisponibilidadMecanica: (valor: number) => set({ disponibilidadMecanica: valor }),
    setDisponibilidadOperativa: (valor: number) => set({ disponibilidadOperativa: valor }),
    setNumeroHorasPorGuardia: (valor: number) => set({ numeroHorasPorGuardia: valor }),
    setNumeroGuardiasPorDia: (valor: number) => set({ numeroGuardiasPorDia: valor }),
    setCostoHoraEquipo: (valor: number) => set({ costoHoraEquipo: valor }),
    setDensidadMineral: (valor: number) => set({ densidadMineral: valor }),
    setCostoPreparacionAgregados: (valor: number) => set({ costoPreparacionAgregados: valor }),
    setCostoPreparacionPlantaConcreto: (valor: number) => set({ costoPreparacionPlantaConcreto: valor }),
    setCostoTransporteRelaveChura: (valor: number) => set({ costoTransporteRelaveChura: valor }),
    setCostoCemento: (valor: number) => set({ costoCemento: valor }),
}))


/* Relleno Detrítico */

interface RellenoDetriticoState extends RellenoDetriticoData {
    // produccionMineral: number;
    // produccionRelleno: number;
    // capacidadCuchara: number;
    // factorCuchara: number;
    // densidadRotaMaterialRelleno: number;
    // tiempoDeUnPase: number;
    // disponibilidadMecanica: number;
    // disponibilidadOperativa: number;
    // numeroHorasPorGuardia: number;
    // numeroGuardiasPorDia: number;
    // costoHoraEquipo: number;
    // densidadMineral: number;
    // costoPreparacionAgregados: number;
    // costoTransporteDesmonte: number;

    setProduccionMineral: (valor: number) => void;
    setProduccionRelleno: (valor: number) => void;
    setCapacidadCuchara: (valor: number) => void;
    setFactorCuchara: (valor: number) => void;
    setDensidadRotaMaterialRelleno: (valor: number) => void;
    setTiempoDeUnPase: (valor: number) => void;
    setDisponibilidadMecanica: (valor: number) => void;
    setDisponibilidadOperativa: (valor: number) => void;
    setNumeroHorasPorGuardia: (valor: number) => void;
    setNumeroGuardiasPorDia: (valor: number) => void;
    setCostoHoraEquipo: (valor: number) => void;
    setDensidadMineral: (valor: number) => void;
    setCostoPreparacionAgregados: (valor: number) => void;
    setCostoTransporteDesmonte: (valor: number) => void;
}

export const useRellenoDetriticoStore = create<RellenoDetriticoState>()((set) => ({
    ...defaultRellenoDetriticoValues,
    // produccionMineral: 1451.67,
    // produccionRelleno: 414.76,
    // capacidadCuchara: 3,
    // factorCuchara: 75,
    // densidadRotaMaterialRelleno: 3,
    // tiempoDeUnPase: 480,
    // disponibilidadMecanica: 85,
    // disponibilidadOperativa: 85,
    // numeroHorasPorGuardia: 10,
    // numeroGuardiasPorDia: 2,
    // costoHoraEquipo: 60,
    // densidadMineral: 3.5,
    // costoPreparacionAgregados: 0,
    // costoTransporteDesmonte: 1.75,

    setProduccionMineral: (valor: number) => set({ produccionMineral: valor }),
    setProduccionRelleno: (valor: number) => set({ produccionRelleno: valor }),
    setCapacidadCuchara: (valor: number) => set({ capacidadCuchara: valor }),
    setFactorCuchara: (valor: number) => set({ factorCuchara: valor }),
    setDensidadRotaMaterialRelleno: (valor: number) => set({ densidadRotaMaterialRelleno: valor }),
    setTiempoDeUnPase: (valor: number) => set({ tiempoDeUnPase: valor }),
    setDisponibilidadMecanica: (valor: number) => set({ disponibilidadMecanica: valor }),
    setDisponibilidadOperativa: (valor: number) => set({ disponibilidadOperativa: valor }),
    setNumeroHorasPorGuardia: (valor: number) => set({ numeroHorasPorGuardia: valor }),
    setNumeroGuardiasPorDia: (valor: number) => set({ numeroGuardiasPorDia: valor }),
    setCostoHoraEquipo: (valor: number) => set({ costoHoraEquipo: valor }),
    setDensidadMineral: (valor: number) => set({ densidadMineral: valor }),
    setCostoPreparacionAgregados: (valor: number) => set({ costoPreparacionAgregados: valor }),
    setCostoTransporteDesmonte: (valor: number) => set({ costoTransporteDesmonte: valor }),
}))