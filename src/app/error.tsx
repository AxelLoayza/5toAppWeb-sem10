'use client' // Error boundaries must be Client Components

import Link from 'next/link'
import Image from 'next/image'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    // global-error must include html and body tags
    <html>
      <body className="min-h-screen bg-white flex items-center justify-center px-4">
        <main className="max-w-xl text-center">
          <div className="mb-6">
            <Image
              src="/pokemon.gif"
              alt="Pokémon"
              width={120}
              height={120}
              className="mx-auto"
            />
          </div>

          <h1 className="text-3xl font-bold mb-2">¡Algo salió mal!</h1>
          <p className="text-gray-600 mb-4">Ha ocurrido un error inesperado.</p>

          {/* Show a short error message for debugging (safe to show in dev) */}
          {error?.message ? (
            <pre className="bg-gray-100 p-3 rounded mb-4 text-sm text-red-600 overflow-auto">{error.message}</pre>
          ) : null}

          <div className="flex gap-3 justify-center flex-wrap">
            <button
              className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              onClick={() => reset()}
            >
              Reintentar
            </button>

            <Link
              href="/"
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
            >
              Volver al inicio
            </Link>
          </div>
        </main>
      </body>
    </html>
  )
}
