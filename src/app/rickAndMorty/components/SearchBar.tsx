"use client";

import { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: {
    name: string;
  };
  location: {
    name: string;
  };
}

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Character[]>([]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const fetchFiltered = async () => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${query}`
        );
        if (!res.ok) {
          setResults([]);
          return;
        }
        const data = await res.json();
        setResults(data.results || []);
      } catch (error) {
        console.error("Error fetching characters:", error);
        setResults([]);
      }
    };

    const delay = setTimeout(fetchFiltered, 500);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="w-full text-center">
      <input
        type="text"
        className="border px-4 py-2 rounded-lg w-full max-w-lg"
        placeholder="Buscar por nombre..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {results.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {results.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </div>
  );
}
