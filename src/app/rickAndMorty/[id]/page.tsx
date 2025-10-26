import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface CharacterParams {
  id: string;
}

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

interface CharacterResponse {
  results: Character[];
}

export const revalidate = 864000; // 10 días

export async function generateStaticParams(): Promise<CharacterParams[]> {
  const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
  const data: CharacterResponse = await res.json();
  return data.results.map((c: Character) => ({
    id: c.id.toString(),
  }));
}

async function getCharacter(id: string): Promise<Character | null> {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`,
    { next: { revalidate: 864000 } }
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<CharacterParams>;
}) {
  const { id } = await params; // ✅ evitar error del Promise
  const character = await getCharacter(id);
  if (!character) return notFound();

  return (
    <main className="min-h-screen p-6 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900 text-white flex justify-center items-center">
      <div className="bg-gray-800 max-w-lg w-full rounded-2xl shadow-xl p-6 text-center border border-gray-700">

        <Image
          src={character.image}
          width={300}
          height={300}
          alt={character.name}
          className="rounded-lg shadow-md mx-auto"
          loading="lazy"
        />

        <h2 className="text-3xl font-bold mt-4 mb-2 text-green-400">{character.name}</h2>

        <ul className="text-gray-300 text-lg space-y-1">
          <li><strong className="text-green-400">Status:</strong> {character.status}</li>
          <li><strong className="text-green-400">Species:</strong> {character.species}</li>
          <li><strong className="text-green-400">Type:</strong> {character.type || "N/A"}</li>
          <li><strong className="text-green-400">Gender:</strong> {character.gender}</li>
          <li><strong className="text-green-400">Origin:</strong> {character.origin.name}</li>
          <li><strong className="text-green-400">Location:</strong> {character.location.name}</li>
        </ul>

        {/* ✅ Botón regresar al listado principal */}
        <Link
          href="/rickAndMorty"
          className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          ← Regresar al listado
        </Link>
      </div>
    </main>
  );
}
