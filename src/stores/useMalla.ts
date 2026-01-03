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
    setDensidadMaterial: (densidad: number) => void;
    setFactorPotencia: (factor: number) => void;
    setDiametroTaladro: (diametro: number) => void;
    setDensidadAnfo: (densidad: number) => void;
}

export const useMallaStore = create<MallaState>()((set) => ({
    /* import default values */
    ...defaultMallaValues,

    /* functions change values */
    setDensidadMaterial: (densidad: number) => set({ densidadMaterial: densidad }),
    setFactorPotencia: (factor: number) => set({ factorPotencia: factor }),
    setDiametroTaladro: (diametro: number) => set({ diametroTaladro: diametro }),
    setDensidadAnfo: (densidad: number) => set({ densidadAnfo: densidad }),

}))


/* Costo Perforacion - campos compartidos (tiempoPerforacion, rendimientoBroca, tonelajePerforado, alturaBanco) en useSharedStore */

interface CostosPerforacionState extends CostoPerforacionData {
    setCostoBrocaAccesorios: (costo: number) => void;
    setCostoEquipoPerforacion: (costo: number) => void;
}

export const useCostosPerforacionStore = create<CostosPerforacionState>()((set) => ({
    ...defaultCostoPerforacionValues,

    setCostoBrocaAccesorios: (costo: number) => set({ costoBrocaAccesorios: costo }),
    setCostoEquipoPerforacion: (costo: number) => set({ costoEquipoPerforacion: costo }),
}))


/* Costos de Voladuras - tonelajePerforado movido a useSharedStore */

interface CostosVoladuraState extends CostoVoladuraData {
    setCostoAnfo: (costo: number) => void;
    setCostoDinamita: (costo: number) => void;
    setCostoRetardoFanel: (costo: number) => void;
    setCostoCordonDetonante: (costo: number) => void;
    setCostoCamionAnfoCar: (costo: number) => void;
    setCostoChispeo: (costo: number) => void;
    setCostoManoDeObra: (costo: number) => void;

    setPentacordEmpleado: (pentacord: number) => void;
    setTiempoCarguioAnfoCar: (tiempo: number) => void;
    setMechaRapidaEmpleada: (mecha: number) => void;
    setNumeroHombresCarguio: (numero: number) => void;
    setTiempoEmpleadoCarguio: (tiempo: number) => void;
}

export const useCostosVoladurasStore = create<CostosVoladuraState>()((set) => ({
    ...defaultCostoVoladuraValues,

    setCostoAnfo: (costo: number) => set({ costoAnfo: costo }),
    setCostoDinamita: (costo: number) => set({ costoDinamita: costo }),
    setCostoRetardoFanel: (costo: number) => set({ costoRetardoFanel: costo }),
    setCostoCordonDetonante: (costo: number) => set({ costoCordonDetonante: costo }),
    setCostoCamionAnfoCar: (costo: number) => set({ costoCamionAnfoCar: costo }),
    setCostoChispeo: (costo: number) => set({ costoChispeo: costo }),
    setCostoManoDeObra: (costo: number) => set({ costoManoDeObra: costo }),

    setPentacordEmpleado: (pentacord: number) => set({ pentacordEmpleado: pentacord }),
    setTiempoCarguioAnfoCar: (tiempo: number) => set({ tiempoCarguioAnfoCar: tiempo }),
    setMechaRapidaEmpleada: (mecha: number) => set({ mechaRapidaEmpleada: mecha }),
    setNumeroHombresCarguio: (numero: number) => set({ numeroHombresCarguio: numero }),
    setTiempoEmpleadoCarguio: (tiempo: number) => set({ tiempoEmpleadoCarguio: tiempo }),
}))


/* Requerimiento Perforadora - campos compartidos en useSharedStore */

interface RequerimientoPerforadoraState extends RequerimientoPerforadoraData {
    setLonguitudTaladro: (longuitud: number) => void;
    setHorasProgramadas: (horas: number) => void;
    setHorasTrabajadas: (horas: number) => void;
    setEficienciaPerforadora: (eficiencia: number) => void;
    setProduccionTPM: (produccion: number) => void;
    setDiasOperacion: (dias: number) => void;
    setProduccionTPD: (produccion: number) => void;
}

export const useRequerimientoPerforadoraStore = create<RequerimientoPerforadoraState>()((set) => ({
    ...defaultRequerimientoPerforadoraValues,

    setLonguitudTaladro: (longuitud: number) => set({ longuitudTaladro: longuitud }),
    setHorasProgramadas: (horas: number) => set({ horasProgramadas: horas }),
    setHorasTrabajadas: (horas: number) => set({ horasTrabajadas: horas }),
    setEficienciaPerforadora: (eficiencia: number) => set({ eficienciaPerforadora: eficiencia }),
    setProduccionTPM: (produccion: number) => set({ produccionTPM: produccion }),
    setDiasOperacion: (dias: number) => set({ diasOperacion: dias }),
    setProduccionTPD: (produccion: number) => set({ produccionTPD: produccion }),
}))

/* Carguio - produccionMina movido a useSharedStore */

interface CarguioState extends CarguioData {
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


/* Limpieza - produccionMina movido a useSharedStore */

interface LimpiezaState extends LimpiezaData {
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