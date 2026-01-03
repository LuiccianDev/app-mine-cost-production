import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-5rem)] w-full">
      <div className="container mx-auto flex h-full flex-col justify-between px-8 pt-10 pb-20">
        {/* Parte superior - Título y foto */}
        <div className="flex items-start justify-between">
          {/* Título izquierda arriba */}
          <div className="font-title text-[12rem] leading-none">
            <h1 className="text-slate-900">LUICCIAN</h1>
            <h1 className="-mt-10 text-slate-900">MINE</h1>
          </div>

          {/* Imagen circular derecha arriba */}
          <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-xl md:h-48 md:w-48">
            <Image
              src="/img/logo.webp"
              alt="Luiccian Mine"
              fill
              className="object-cover"
              quality={75}
            />
          </div>
        </div>

        {/* Parte inferior - Email y descripción */}
        <div className="flex items-end justify-between">
          {/* Email izquierda abajo */}
          <div className="flex items-center gap-2 text-slate-700">
            <span className="text-base">contacto@luiccianmine.com</span>
            <button className="rounded p-1 transition-colors hover:bg-slate-200">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </button>
          </div>

          {/* Descripción derecha abajo */}
          <div className="max-w-xl space-y-4 text-right">
            <p className="text-3xl text-slate-900">
              Hello, I&apos;m a specialist in mining cost and production calculation with detailed
              analysis — based in operations optimization, working remote. Let&apos;s create!
            </p>

            <a
              href="/calculadora"
              className="inline-flex items-center gap-2 rounded bg-slate-900 px-8 py-3 text-sm font-medium text-white shadow-lg transition-colors hover:bg-slate-800"
            >
              Start Calculation
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
