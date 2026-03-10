export default function Sponsors() {
  // Datos de ejemplo para los patrocinadores
  const row1 = ['Luiccian', 'Vrazz', 'VerduraRica54']
  const row2 = ['luciocruzp', 'ThejefersonDR']

  return (
    <div className="w-full bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Título de la sección */}
        <div className="mb-16 text-center">
          <h2 className="text-xl tracking-[0.4em] text-slate-800 uppercase">Our Sponsors</h2>
        </div>

        {/* Grilla de Patrocinadores */}
        <div className="flex flex-col gap-12 md:gap-16">
          {/* Fila Superior: 3 Nombres */}
          <div className="flex flex-wrap items-center justify-center gap-24">
            {row1.map((name, index) => (
              <span key={index} className="cursor-default text-4xl tracking-tighter">
                {name}
              </span>
            ))}
          </div>

          {/* Fila Inferior: 2 Nombres */}
          <div className="flex flex-wrap items-center justify-center gap-24">
            {row2.map((name, index) => (
              <span key={index} className="cursor-default text-4xl tracking-tighter">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
