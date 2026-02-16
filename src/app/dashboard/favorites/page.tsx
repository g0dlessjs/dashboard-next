import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

// const getPokemons = async (
//   limit = 20,
//   offset = 0,
// ): Promise<SimplePokemon[]> => {
//   const res = await fetch(
//     `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`,
//   );

//   const data: PokemonsResponse = await res.json();

//   const pokemons = data.results.map((pokemon) => ({
//     id: Number(pokemon.url.split("/").at(-2)!),
//     name: pokemon.name,
//   }));

//   return pokemons;
// };

export function generateMetadata() {
  return {
    title: `Listado de Pokémon Favoritos`,
    description: `Listado de Pokémon`,
  };
}

export default async function PokemonPage() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
        <h2 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
          Pokémon Favoritos
        </h2>

        <span className="mt-3 text-lg sm:text-xl font-medium text-gray-500">
          Global State
        </span>
      </div>

      <PokemonGrid pokemons={[]} />
    </div>
  );
}
