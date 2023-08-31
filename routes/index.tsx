import { Handlers, PageProps } from "$fresh/server.ts";

interface CharacterOrigin {
  name: string;
  url: string;
}

interface CharacterLocation {
  name: string;
  url: string;
}

interface ApiInfoResponse {
  count: number;
  pages: number;
  next: string;
  prev?: string;
}

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface RickAndMortyResponse {
  info: ApiInfoResponse;
  results: Character[];
}

export const handler: Handlers<RickAndMortyResponse | null> = {
  async GET(_, ctx) {
    const res = await fetch("https://rickandmortyapi.com/api/character");

    if (res.status === 404) {
      return ctx.render(null);
    }

    const characters = await res.json();

    return ctx.render(characters);
  },
};

export default function Home({ data }: PageProps<RickAndMortyResponse | null>) {
  const characterList = data?.results.map((character, index) => {
    return (
      <li class="flex justify-between gap-x-6 py-5">
        <div class="flex min-w-0 gap-x-4">
          <img
            class="h-12 w-12 flex-none rounded-full bg-gray-50"
            src={character.image}
            alt=""
          />
          <div class="min-w-0 flex-auto">
            <p class="text-sm font-semibold leading-6 text-gray-900">
              {character.name}
            </p>
            <p class="mt-1 truncate text-xs leading-5 text-gray-500">
              {character.species}
            </p>
          </div>
        </div>
        <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
          <p class="text-sm leading-6 text-gray-900">
            {character.location.name}
          </p>
          <p class="mt-1 text-xs leading-5 text-gray-500">
            {character.origin.name}
          </p>
        </div>
      </li>
    );
  });
  return (
    <div class="flex items-center justify-center w-full h-full">
      <ul role="list" class="divide-y divide-gray-100">
        {characterList}
      </ul>
    </div>
  );
}
