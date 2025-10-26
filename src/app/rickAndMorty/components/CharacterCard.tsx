"use client"

import Image from "next/image"
import Link from "next/link"

interface Character {
  id: number
  name: string
  status: string
  species: string
  image: string
}

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <Link href={`/rickAndMorty/${character.id}`}>
      <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 cursor-pointer">
        
        {/* Imagen con Lazy Loading */}
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <Image
            src={character.image}
            alt={character.name}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>

        <h2 className="text-lg font-bold mt-3 text-green-400">
          {character.name}
        </h2>

        <p className="text-sm text-gray-300">
          {character.species} | {character.status}
        </p>
      </div>
    </Link>
  )
}
