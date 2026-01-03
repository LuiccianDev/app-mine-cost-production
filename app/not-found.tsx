import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-start justify-between p-8 md:p-16">
      {/* Contenido principal */}
      <div className="flex-1 pt-16 md:pt-24">
        <h1 className="font-title text-9xl font-bold tracking-tight text-black">
          PAGE
          <br />
          NOT
          <br />
          FOUND
        </h1>

        {/* Botón Back Home */}
        <Link
          href="/"
          className="mt-12 inline-block rounded-sm bg-gray-100 px-6 py-3 text-sm font-normal text-black transition-colors hover:bg-gray-200"
        >
          Back Home
        </Link>
      </div>

      {/* 404 abajo derecha */}
      <div className="self-end text-right">
        <span className="text-2xl font-bold text-black md:text-3xl">404</span>
      </div>
    </div>
  )
}
