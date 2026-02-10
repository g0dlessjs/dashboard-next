import { PokemonCard } from "./PokemonCard"
import { SimplePokemon } from "@/pokemons"

interface Props {
  pokemons: SimplePokemon[]
}

const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">
      {
        pokemons.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      }
    </div>
  )
}

export default PokemonGrid