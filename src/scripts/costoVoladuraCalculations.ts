import { CostoVoladuraInputsData } from '../components/forms/CostoVoladuraInputs';
import { CostoVoladuraResultsData } from '../components/results/CostoVoladuraResults';

export function calculateCostoVoladura(
  inputs: CostoVoladuraInputsData
): CostoVoladuraResultsData {
  // Los consumos vienen de cálculos previos de la malla
  // Para este ejemplo, usaremos valores fijos basados en la imagen
  // En producción, estos vendrían de los cálculos de malla
  
  const consumoAnfo = 48.98; // lb/taladro
  const consumoDinamita = 1.5; // cart/taladro
  const consumoRetardos = 1; // unid/taladro
  const consumoPentacord = inputs.pentacordEmpleado * 3.28084; // convertir m a pies: 46.71 pies
  const consumoCamion = inputs.tiempoCarguioAnfocar; // 0.14 hr/taladro
  const consumoChispeo = inputs.mechaRapidaEmpleada; // 14 pies
  const consumoManoObra = inputs.tiempoEmpleadoCarguio; // 0.4 hr/taladro

  // Calcular totales por item
  const totalAnfo = inputs.costoAnfo * consumoAnfo;
  const totalDinamita = inputs.costoDinamita * consumoDinamita;
  const totalRetardos = inputs.costoRetardos * consumoRetardos;
  const totalPentacord = inputs.costoCordonDetonante * consumoPentacord;
  const totalCamion = inputs.costoCamionAnfocar * consumoCamion;
  const totalChispeo = inputs.costoChispeo * consumoChispeo;
  const totalManoObra = inputs.costoManoObra * consumoManoObra;

  // Total por taladro
  const costoTotalPorTaladro = 
    totalAnfo + 
    totalDinamita + 
    totalRetardos + 
    totalPentacord + 
    totalCamion + 
    totalChispeo + 
    totalManoObra;

  // Costo por tonelada
  const costoVoladuraPorTonelada = costoTotalPorTaladro / inputs.tonelajePorTaladro;

  return {
    consumoAnfo,
    consumoDinamita,
    consumoRetardos,
    consumoPentacord,
    consumoCamion,
    consumoChispeo,
    consumoManoObra,
    totalAnfo,
    totalDinamita,
    totalRetardos,
    totalPentacord,
    totalCamion,
    totalChispeo,
    totalManoObra,
    costoTotalPorTaladro,
    costoVoladuraPorTonelada,
  };
}
