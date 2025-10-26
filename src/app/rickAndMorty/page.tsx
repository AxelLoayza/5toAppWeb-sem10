'use client'

import { useState, useEffect } from "react"
import CharacterCard from "./components/CharacterCard"

interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
}

export default function RickAndMortyPage() {
  const [characters, setCharacters] = useState<Character[]>([])
  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([])
  const [search, setSearch] = useState("")
  const [status, setStatus] = useState("")
  const [gender, setGender] = useState("")

  useEffect(() => {
    async function fetchCharacters() {
      const res = await fetch("https://rickandmortyapi.com/api/character")
      const data = await res.json()
      setCharacters(data.results)
      setFilteredCharacters(data.results)
    }
    fetchCharacters()
  }, [])

  useEffect(() => {
    const filtered = characters.filter((c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) &&
      c.status.toLowerCase().includes(status.toLowerCase()) &&
      c.gender.toLowerCase().includes(gender.toLowerCase())
    )
    setFilteredCharacters(filtered)
  }, [search, status, gender, characters])

return (
  <main className="min-h-screen p-6 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
    <div className="max-w-7xl mx-auto">

      {/* Título */}
      <h1 className="text-4xl font-bold text-center mb-8 text-green-400 tracking-widest drop-shadow-lg">
        Rick & Morty API
      </h1>

      {/* Search & Filters */}
      <div className="bg-gray-800 p-5 rounded-xl shadow-lg mb-6 flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Buscar por nombre..."
          className="flex-1 border border-gray-600 bg-gray-900 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-green-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border border-gray-600 bg-gray-900 rounded-lg px-4 py-2"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <select
          className="border border-gray-600 bg-gray-900 rounded-lg px-4 py-2"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>

      {/* Character Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

    </div>
  </main>
)

}
