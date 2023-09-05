import { Handlers, PageProps } from "$fresh/server.ts";
import CharacterCard from "../components/CharacterCard.tsx";
import { Character, RickAndMortyResponse } from "../types/index.ts";

export const handler: Handlers<RickAndMortyResponse | null> = {
  async GET(_, ctx) {
    const res = await fetch(
      "https://rickandmortyapi.com/api/character",
    );

    if (res.status === 404) {
      return ctx.render(null);
    }

    const characters = await res.json();

    return ctx.render(characters);
  },
};

export default function Home({ data }: PageProps<RickAndMortyResponse | null>) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="text-1xl font-bold tracking-tight text-gray-900">
          Rick and Morty
        </h1>
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          List Character
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data?.results.map((character: Character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      </div>
    </div>
  );
}
