// src/app/rickAndMorty/search/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    if (query.length < 2) return;

    const fetchData = async () => {
      const res = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${query}`
      );
      const data = await res.json();
      setCharacters(data.results || []);
    };

    fetchData();
  }, [query]);

  return (
    <div className="px-6 pt-6">
      <input
        type="text"
        placeholder="Buscar personajes..."
        className="w-full p-3 border rounded-lg mb-6"
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map((c: any) => (
          <a key={c.id} href={`/rickAndMorty/${c.id}`}>
            <Image
              src={c.image}
              alt={c.name}
              width={250}
              height={250}
              loading="lazy"
              className="rounded-lg shadow"
            />
            <p className="text-center mt-1">{c.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
