"use client";

import { useAppSelector } from "@/store";
import PokemonGrid from "./PokemonGrid";
import { useState } from "react";

const FavoritePokemons = () => {
  const favoritePokemon = useAppSelector((state) =>
    Object.values(state.pokemons),
  );
  const [pokemons, setPokemons] = useState(favoritePokemon);

  return (
    <>
      <PokemonGrid pokemons={pokemons} />
    </>
  );
};

export default FavoritePokemons;
