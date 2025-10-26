import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '404 - Página no encontrada',
  description: 'La página que buscas no existe.',
}

export default function GlobalNotFound() {
  return (
    <div className={`${inter.className} min-h-screen bg-white flex items-center justify-center px-4`}>
      <main className="max-w-xl text-center">
        <div className="mb-6">
          <Image
            src="/pokeball.png"
            alt="Pokébola"
            width={120}
            height={120}
            className="mx-auto"
          />
        </div>

        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-4">Página no encontrada</h2>
        <p className="text-gray-600 mb-6">
          Lo sentimos — la página que intentas ver no existe o pudo haber sido eliminada.
        </p>

        <div className="flex gap-3 justify-center flex-wrap">
          <Link
            href="/rickAndMorty"
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Rick & Morty
          </Link>

          <Link
            href="/pokemon"
            className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Pokédex
          </Link>

          <Link
            href="/"
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100 transition"
          >
            Ir al inicio
          </Link>
        </div>
      </main>
    </div>
  )
}
