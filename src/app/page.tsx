import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-linear-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center px-4 py-8`}
    >
      <main className="max-w-5xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-4 bg-linear-to-r from-green-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            API Universe Explorer
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Sumergete en dos mundos extraordinarios
          </p>
          <div className="h-1 w-24 bg-linear-to-r from-green-400 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Opciones de navegación */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Card Rick and Morty */}
          <Link href="/rickAndMorty" className="group">
            <div className="relative h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-green-500/50 transition-all duration-500 border border-gray-700 hover:border-green-500/50 backdrop-blur-sm">
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-linear-to-br from-green-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content container */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* GIF Section */}
                <div className="mb-6 flex justify-center overflow-hidden rounded-xl">
                  <Image
                    src="/TheRick.gif"
                    alt="Rick and Morty"
                    width={280}
                    height={280}
                    unoptimized
                    className="object-cover rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Text Section */}
                <div className="text-center">
                  <h3 className="text-3xl font-black text-green-400 mb-3 group-hover:text-green-300 transition-colors">
                    Rick & Morty
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Explora personajes del multiverso más caótico y desquiciante. Dimensiones infinitas te esperan.
                  </p>
                  <button className="w-full bg-linear-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-lg font-bold hover:from-green-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50">
                    Explorar →
                  </button>
                </div>
              </div>
            </div>
          </Link>

          {/* Card Pokémon */}
          <Link href="/pokemon" className="group">
            <div className="relative h-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-500 border border-gray-700 hover:border-purple-500/50 backdrop-blur-sm">
              {/* Background blur effect */}
              <div className="absolute inset-0 bg-linear-to-br from-purple-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Content container */}
              <div className="relative p-8 h-full flex flex-col justify-between">
                {/* GIF Section */}
                <div className="mb-6 flex justify-center overflow-hidden rounded-xl">
                  <Image
                    src="/ThePokemon.gif"
                    alt="Pokémon"
                    width={280}
                    height={280}
                    unoptimized
                    className="object-cover rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Text Section */}
                <div className="text-center">
                  <h3 className="text-3xl font-black text-purple-400 mb-3 group-hover:text-purple-300 transition-colors">
                    Pokédex
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Atrapa y descubre todos los Pokémon. Completa tu colección en el mundo Pokémon.
                  </p>
                  <button className="w-full bg-linear-to-r from-purple-500 to-purple-600 text-white px-8 py-3 rounded-lg font-bold hover:from-purple-400 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/50">
                    Explorar →
                  </button>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-400 text-sm">
          <p>✨ Elige un universo para comenzar tu aventura épica ✨</p>
        </div>
      </main>
    </div>
  );
}
