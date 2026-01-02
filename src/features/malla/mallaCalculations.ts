import { type MallaData as MallaFormData, type MallaResultados} from "@/src/types/malla.types";

// Función para calcular la malla usando los datos del formulario
export function calcularMalla(data: MallaFormData): MallaResultados {
  const { alturaBanco, densidadMaterial, factorPotencia, diametroTaladro, densidadAnfo } = data;

  // Convert to meters and kg/m3 where needed
  const alturaBanco_m = alturaBanco * 0.3048; // Pies to metros (Altura de Banco)
  const diametroTaladro_m = diametroTaladro * 0.0254; // Pulgadas a metros
  const radio_m = diametroTaladro_m / 2;

  // Burden = B (a calcular)
  // Sub Drilling = 0.3 B
  // Espaciamiento = 1.25 B

  // PASO 1: Cálculos iniciales en términos de B²
  const Volumen = alturaBanco_m * 1.25; // Volumen 

  const Tonelaje = Volumen * densidadMaterial; // Tonelaje = Volumen × Densidad (Ton)

  const LibrasAnfo = Tonelaje * factorPotencia; // Libras de Anfo = Tonelaje × Factor Potencia (lib)

  // PASO 2: Capacidad de ANFO por metro de taladro
  const VolumenAnfoPorMetro = Math.PI * Math.pow(radio_m, 2) * 1; // Vol = π × r² × 1m (m³)

  const CapacidadAnfoPorMetro = VolumenAnfoPorMetro * (densidadAnfo * 1000000 / 453.592); // lib/m

  const AlturaCargaAnfo = LibrasAnfo / CapacidadAnfoPorMetro; // Altura de carga en términos de B² (m)

  // PASO 3: Ecuación de Altura de Collar
  // Altura de Collar = H + Sub Drilling - Altura de Carga = 0
  // H + 0.3B - AlturaCargaAnfo × B² = 0
  // Reorganizando: AlturaCargaAnfo × B² - 0.3B - H = 0
  // Forma cuadrática: a×B² + b×B + c = 0
  
  const a = AlturaCargaAnfo; // Coeficiente de B²
  const b = 0.7;            // Coeficiente de B (negativo porque es -0.3B)
  const c = -alturaBanco_m;              // Término independiente (negativo porque es -H)

  // Fórmula cuadrática: B = (-b ± √(b² - 4ac)) / (2a)
  const discriminante = Math.sqrt(b * b - 4 * a * c);
  const B_positivo = (-b + discriminante) / (2 * a); // Solución positiva
  //const B_negativo = (-b - discriminante) / (2 * a); // Solución negativa (descartada)

  // PASO 4: Usar el Burden calculado para obtener valores finales
  const burden = B_positivo; // Este es el B que buscamos (m)
  const espaciamientoFinal = 1.25 * burden; // 1.25 × B (m)

  // PASO 5: Recalcular todos los valores con el Burden final
  const volumenRotaTaladro = alturaBanco_m * burden * espaciamientoFinal; // H × B × E (m³)
  const tonelajeFinal = volumenRotaTaladro * densidadMaterial; // Tonelaje por taladro (Ton/Tal)
  const librasAnfoFinal = tonelajeFinal * factorPotencia; // Libras ANFO por taladro (lib/Tal)
  const alturaCargaFinal = librasAnfoFinal / CapacidadAnfoPorMetro; // Altura de carga final (m)

  return {
    burden: burden,
    espaciamiento: espaciamientoFinal,
    volumenRotaTaladro: volumenRotaTaladro,
    tonelajePerforado: tonelajeFinal,
    librasAnfo: librasAnfoFinal,
    alturaCarga: alturaCargaFinal,
    alturaBanco: alturaBanco_m // Guardar altura de banco en metros
  };
}
