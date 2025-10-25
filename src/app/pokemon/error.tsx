'use client'

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-black bg-opacity-30 px-4">
      
      <Image
        src="/pokemon.gif"
        alt="Pokémon Error"
        width={250}
        height={250}
        className="mb-4"
        priority
      />

      <h1 className="text-3xl font-bold text-white mb-2">
        ¡Algo salió mal!
      </h1>

      <p className="text-purple-300 mb-4 text-center max-w-sm">
        Ha ocurrido un error inesperado en la Pokédex.
      </p>

      <div className="flex gap-3">
        <button
          className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          onClick={() => reset()}
        >
          Reintentar
        </button>

        <Link
          href="/pokemon"
          className="px-4 py-2 bg-purple-700 text-white rounded-md hover:bg-purple-800 transition"
        >
          Volver a la Pokédex
        </Link>
      </div>

    </div>
  )
}
