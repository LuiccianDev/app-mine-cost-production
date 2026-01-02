import { create } from "zustand";
import { type PDFData , defaultPDFDataValues } from "../types/pdf.types";


interface PDFState extends PDFData {
    /* SetFunctions */
    setProjectCode: (code: string) => void;
    setBurden: (burden: number) => void;
    setEspaciamiento: (espaciamiento: number) => void;
    setVolumenRotaTaladro: (volumen: number) => void;
    setTonelaje: (tonelaje: number) => void;
    setLibrasAnfo: (libras: number) => void;
    setAlturaCarga: (altura: number) => void;
    setCostoPerforacionMetro: (costo: number) => void;
    setCostoPerforacionTon: (costo: number) => void;
    setNumeroPerforadoras: (numero: number) => void;
    setMetrosPerforado: (metros: number) => void;
    setCostoVoladura: (costo: number) => void;
    setRequerimientoScoops: (requerimiento: number) => void;
    setCostoLimpieza: (costo: number) => void;
    setRequerimientoScoop: (requerimiento: number) => void;
    setCostoCarguio: (costo: number) => void;
    setFlotaCamiones: (flota: number) => void;
    setProduccionFlotaCamiones: (produccion: number) => void;
    setCostoTransporte: (costo: number) => void;
    setRequerimientoPerforadora: (requerimiento: number) => void;
    setRequerimientoScoopsLimpieza: (requerimiento: number) => void;
    setRequerimientoScoopsCarguio: (requerimiento: number) => void;
    setRequerimientoScoopRelleno: (requerimiento: number) => void;
    setTotalScoops: (total: number) => void;
    setFlotaCamionesTransporte: (flota: number) => void;
    setCostoTransporteRC: (costo: number) => void;
    setCostoMaterialRelleno: (costo: number) => void;
    setCostoTotalRelleno35: (costo: number) => void;
    setCostoTotalRelleno30: (costo: number) => void;
    setCostoTransporteRD: (costo: number) => void;
    setCostoMaterialRellenoRD: (costo: number) => void;
    setCostoTotalRellenoRD: (costo: number) => void;
    setCostoMinadoProyectado: (costo: number) => void;
    setCostoMinado: (costo: number) => void;
}

export const usePDFStore = create<PDFState>((set) => ({
    ...defaultPDFDataValues,

    /* SetFunctions */

    setProjectCode: (code: string) => set({ projectCode: code }),
    setBurden: (burden: number) => set({ burden: burden }),
    setEspaciamiento: (espaciamiento: number) => set({ espaciamiento: espaciamiento }),
    setVolumenRotaTaladro: (volumen: number) => set({ volumenRotaTaladro: volumen }),
    setTonelaje: (tonelaje: number) => set({ tonelaje: tonelaje }),
    setLibrasAnfo: (libras: number) => set({ librasAnfo: libras }),
    setAlturaCarga: (altura: number) => set({ alturaCarga: altura }),
    setCostoPerforacionMetro: (costo: number) => set({ costoPerforacionMetro: costo }),
    setCostoPerforacionTon: (costo: number) => set({ costoPerforacionTon: costo }),
    setNumeroPerforadoras: (numero: number) => set({ numeroPerforadoras: numero }),
    setMetrosPerforado: (metros: number) => set({ metrosPerforado: metros }),
    setCostoVoladura: (costo: number) => set({ costoVoladura: costo }),
    setRequerimientoScoops: (requerimiento: number) => set({ requerimientoScoops: requerimiento }),
    setCostoLimpieza: (costo: number) => set({ costoLimpieza: costo }),
    setRequerimientoScoop: (requerimiento: number) => set({ requerimientoScoop: requerimiento }),
    setCostoCarguio: (costo: number) => set({ costoCarguio: costo }),
    setFlotaCamiones: (flota: number) => set({ flotaCamiones: flota }),
    setProduccionFlotaCamiones: (produccion: number) => set({ produccionFlotaCamiones: produccion }),
    setCostoTransporte: (costo: number) => set({ costoTransporte: costo }),
    setRequerimientoPerforadora: (requerimiento: number) => set({ requerimientoPerforadora: requerimiento }),
    setRequerimientoScoopsLimpieza: (requerimiento: number) => set({ requerimientoScoopsLimpieza: requerimiento }),
    setRequerimientoScoopsCarguio: (requerimiento: number) => set({ requerimientoScoopsCarguio: requerimiento }),
    setRequerimientoScoopRelleno: (requerimiento: number) => set({ requerimientoScoopRelleno: requerimiento }),
    setTotalScoops: (total: number) => set({ totalScoops: total }),
    setFlotaCamionesTransporte: (flota: number) => set({ flotaCamionesTransporte: flota }),
    setCostoTransporteRC: (costo: number) => set({ costoTransporteRC: costo }),
    setCostoMaterialRelleno: (costo: number) => set({ costoMaterialRelleno: costo }),
    setCostoTotalRelleno35: (costo: number) => set({ costoTotalRelleno35: costo }),
    setCostoTotalRelleno30: (costo: number) => set({ costoTotalRelleno30: costo }),
    setCostoTransporteRD: (costo: number) => set({ costoTransporteRD: costo }),
    setCostoMaterialRellenoRD: (costo: number) => set({ costoMaterialRellenoRD: costo }),
    setCostoTotalRellenoRD: (costo: number) => set({ costoTotalRellenoRD: costo }),
    setCostoMinadoProyectado: (costo: number) => set({ costoMinadoProyectado: costo }),
    setCostoMinado: (costo: number) => set({ costoMinado: costo }),
}));