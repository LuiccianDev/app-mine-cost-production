import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative min-h-screen bg-white flex items-start justify-between p-8 md:p-16">


      {/* Contenido principal */}
      <div className="flex-1 pt-16 md:pt-24">
        <h1 className="text-9xl  font-bold text-black tracking-tight ">
          PAGE
          <br />
          NOT
          <br />
          FOUND
        </h1>

        {/* Botón Back Home */}
        <Link
          href="/"
          className="inline-block mt-12 px-6 py-3 bg-gray-100 text-black text-sm font-normal hover:bg-gray-200 transition-colors rounded-sm"
        >
          Back Home
        </Link>
      </div>

      {/* 404 abajo derecha */}
      <div className="self-end text-right">
        <span className="text-2xl md:text-3xl font-bold text-black">404</span>
      </div>
    </div>
  );
}
