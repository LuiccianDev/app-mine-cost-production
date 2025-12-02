// Datos obtenidos del formulario MallaForm.tsx
type MallaFormData = {
  alturaBanco: number;        // Pies (= 9,91 m)
  densidadMaterial: number;   // Ton / m³
  factorPotencia: number;     // Lib / Ton (= 0,18 kg / Ton)
  diametroTaladro: number;    // Pulg (= 0,06 m)
  densidadAnfo: number;       // gr / cm³
};

type MallaResultados = {
  // CALCULO
  burden: number;                    // B
  subDrilling: number;               // 0.3 B
  espaciamiento: number;             // 1.25 B
  
  // VOLUMEN
  volumenB2: number;                 // H x B x E (en B2 m³)
  
  // TONELAJE
  tonelaje: number;                  // Volumen x P.E.Material (en B2 Ton)
  
  // LIBRAS DE ANFO
  librasAnfo: number;                // Factor Potencia x Tonelaje (en B2 lib)
  
  // VOL. ANFO EN 1 mt DE TALADRO
  volumenAnfoPorMetro: number;       // Pi x r² x h (en m³)
  
  // CAP. DE ANFO EN 1 m TALADRO
  capacidadAnfoPorMetro: number;     // Volumen anfo en 1 m x densidad anfo (en lib/m)
  
  // ALTURA DE CARGA DE ANFO
  alturaCargaAnfo: number;           // Consumo de Anfo / Capacidad de Taladro (en B2 m)
  
  // ALTURA DE COLLAR
  alturaCollar: number;              // Altura de Banco + Sub Drilling - Altura de Carga (= 0)
  burdenCalculado: number;           // B calculado con fórmula cuadrática (en m)
  
  // REEMPLAZANDO
  burdenFinal: number;               // B (en m)
  espaciamientoFinal: number;        // 1.25 B (en m)
  volumenRotaTaladro: number;        // Rotura x Taladro (12.38 B2 = valor en m³)
  tonelajeFinal: number;             // 46.43 B2 = valor en Ton/Tal
  librasAnfoFinal: number;           // 18.57 B2 = valor en lib anfo/Talad
  alturaCargaFinal: number;          // 3.33 B2 = valor en m
};

// Función para calcular la malla usando los datos del formulario
export function calcularMalla(data: MallaFormData): MallaResultados {
  const { alturaBanco, densidadMaterial, factorPotencia, diametroTaladro, densidadAnfo } = data;

  // Convert to meters and kg/m3 where needed
  const H = alturaBanco * 0.3048; // Pies to metros (Altura de Banco)
  const diametroTaladro_m = diametroTaladro * 0.0254; // Pulgadas a metros
  const radio_m = diametroTaladro_m / 2;

  // Burden = B (a calcular)
  // Sub Drilling = 0.3 B
  // Espaciamiento = 1.25 B

  // PASO 1: Cálculos iniciales en términos de B²
  const Volumen = H * 1.25; // Volumen = H × B × E = H × B × 1.25B = H × 1.25 × B² (m³)

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
  const c = -H;              // Término independiente (negativo porque es -H)

  // Fórmula cuadrática: B = (-b ± √(b² - 4ac)) / (2a)
  const discriminante = Math.sqrt(b * b - 4 * a * c);
  const B_positivo = (-b + discriminante) / (2 * a); // Solución positiva
  //const B_negativo = (-b - discriminante) / (2 * a); // Solución negativa (descartada)

  // PASO 4: Usar el Burden calculado para obtener valores finales
  const burdenFinal = B_positivo; // Este es el B que buscamos (m)
  const subDrillingFinal = 0.3 * burdenFinal; // 0.3 × B (m)
  const espaciamientoFinal = 1.25 * burdenFinal; // 1.25 × B (m)

  // PASO 5: Recalcular todos los valores con el Burden final
  const volumenRotaTaladro = H * burdenFinal * espaciamientoFinal; // H × B × E (m³)
  const tonelajeFinal = volumenRotaTaladro * densidadMaterial; // Tonelaje por taladro (Ton/Tal)
  const librasAnfoFinal = tonelajeFinal * factorPotencia; // Libras ANFO por taladro (lib/Tal)
  const alturaCargaFinal = librasAnfoFinal / CapacidadAnfoPorMetro; // Altura de carga final (m)
  const alturaCollarFinal = H + subDrillingFinal - alturaCargaFinal; // Altura de collar (≈ 0 m)

  return {
    // CALCULO
    burden: burdenFinal,
    subDrilling: subDrillingFinal,
    espaciamiento: espaciamientoFinal,
    
    // VOLUMEN (en términos de B²)
    volumenB2: Volumen,
    
    // TONELAJE (en términos de B²)
    tonelaje: Tonelaje,
    
    // LIBRAS DE ANFO (en términos de B²)
    librasAnfo: LibrasAnfo,
    
    // VOL. ANFO EN 1 mt DE TALADRO
    volumenAnfoPorMetro: VolumenAnfoPorMetro,
    
    // CAP. DE ANFO EN 1 m TALADRO
    capacidadAnfoPorMetro: CapacidadAnfoPorMetro,
    
    // ALTURA DE CARGA DE ANFO (en términos de B²)
    alturaCargaAnfo: AlturaCargaAnfo,
    
    // ALTURA DE COLLAR
    alturaCollar: alturaCollarFinal,
    burdenCalculado: burdenFinal,
    
    // REEMPLAZANDO (valores finales)
    burdenFinal: burdenFinal,
    espaciamientoFinal: espaciamientoFinal,
    volumenRotaTaladro: volumenRotaTaladro,
    tonelajeFinal: tonelajeFinal,
    librasAnfoFinal: librasAnfoFinal,
    alturaCargaFinal: alturaCargaFinal
  };
}
