

const getPokemons = async (limit = 20, offset = 0) => {
    const resp = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
    );

    if (!resp.ok) {
        throw new Error("Error al obtener los pokémon");
    }

    const data = await resp.json();
    return data;
};

export default async function PokemonPage() {

    const pokemons = await getPokemons();

    return (
        <div>
            <h1>{JSON.stringify(pokemons)}</h1>
        </div>
    )
}
