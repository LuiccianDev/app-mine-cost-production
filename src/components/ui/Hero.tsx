import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100vh-5rem)]">
      <div className="container mx-auto px-8 h-full flex flex-col justify-between py-20">
        {/* Parte superior - Título y foto */}
        <div className="flex items-start justify-between ">
          {/* Título izquierda arriba */}
          <h1 className="text-8xl md:text-[12rem] font-bold text-slate-900 tracking-tight leading-none">
            LUICCIAN
            <br />
            MINE
          </h1>

          {/* Imagen circular derecha arriba */}
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <Image 
              src="/img/logo-mine.jpg" 
              alt="Luiccian Mine"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        </div>

        {/* Parte inferior - Email y descripción */}
        <div className="flex items-end justify-between">
          {/* Email izquierda abajo */}
          <div className="flex items-center gap-2 text-slate-700">
            <span className="text-base">contacto@luiccianmine.com</span>
            <button className="hover:bg-slate-200 p-1 rounded transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
          </div>

          {/* Descripción derecha abajo */}
          <div className="max-w-xl text-right space-y-4">
            <p className="text-xl md:text-2xl text-slate-900 leading-relaxed">
              Hello, I&apos;m a specialist in mining cost and production calculation with detailed analysis — based in operations optimization, working remote. Let&apos;s create!
            </p>
            
            <a 
              href="#calculadora"
              className="inline-flex items-center gap-2 px-8 py-3 bg-slate-900 text-white rounded text-sm font-medium hover:bg-slate-800 transition-colors shadow-lg"
            >
              Iniciar Cálculo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Marca de agua */}
      <div className="absolute bottom-6 right-8 text-xs text-slate-400">
        Made with precision
      </div>
    </section>
  );
}
