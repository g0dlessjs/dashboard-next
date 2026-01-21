import { PokemonsResponse, SimplePokemon, PokemonCard } from "@/app/pokemons";



const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
    const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    const data: PokemonsResponse = await res.json();

    const pokemons = data.results.map((pokemon) => ({
        id: Number(pokemon.url.split('/').at(-2)!),
        name: pokemon.name,
    }))

    return pokemons;
};

export default async function PokemonPage() {

    const pokemons = await getPokemons(151);

    return (
        <div className="flex flex-col">
            <div className="flex flex-wrap gap-10 items-center justify-center">
                {
                    pokemons.map((pokemon) => (
                        <PokemonCard key={pokemon.id} pokemon={pokemon} />
                    ))
                }
            </div>
        </div>
    )
}
