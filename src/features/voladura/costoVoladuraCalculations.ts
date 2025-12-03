export type CostoVoladuraInputsData = {
  costoAnfo: number;
  costoDinamita: number;
  costoRetardos: number;
  costoCordonDetonante: number;
  costoCamionAnfocar: number;
  costoChispeo: number;
  costoManoObra: number;
  tonelajePorTaladro: number;
  pentacordEmpleado: number;
  tiempoCarguioAnfocar: number;
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

export const defaultCostoVoladuraValues: CostoVoladuraInputsData = {
  costoAnfo: 0.21,
  costoDinamita: 0.13,
  costoRetardos: 1.03,
  costoCordonDetonante: 0.12,
  costoCamionAnfocar: 0.00,
  costoChispeo: 0.08,
  costoManoObra: 2.00,
  tonelajePorTaladro: 122.45,
  pentacordEmpleado: 14.24,
  tiempoCarguioAnfocar: 0.14,
  mechaRapidaEmpleada: 14.00,
  numeroHombresCarguio: 3.00,
  tiempoEmpleadoCarguio: 0.14,
};

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
