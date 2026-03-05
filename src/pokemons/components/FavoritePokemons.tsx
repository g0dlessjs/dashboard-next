"use client";

import { useAppSelector } from "@/store";
import PokemonGrid from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";

const FavoritePokemons = () => {
  const favoritePokemonsMap = useAppSelector((state) => state.pokemons);
  const favoritePokemons = Object.values(favoritePokemonsMap);

  return (
    <>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <PokemonGrid pokemons={favoritePokemons} />
      )}
    </>
  );
};

const NoFavorites = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] w-full">
      <IoHeartOutline size={100} className="text-red-500" />
      <h1 className="text-2xl font-bold">No hay pokémons favoritos</h1>
      <h3 className="text-lg font-semibold">Agrega pokémons favoritos</h3>
    </div>
  );
};

export default FavoritePokemons;
