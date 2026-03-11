"use client";
import Link from "next/link";
import Image from "next/image";
import { SimplePokemon } from "../interfaces/simple-pookemon";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/store";
import { toggleFavorite } from "@/store/pokemons/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon;
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id]);
  const dispatch = useAppDispatch();

  const onToggleFavorite = () => {
    dispatch(toggleFavorite(pokemon));
  };

  return (
    <div className="mx-auto w-64 relative group">
      {/* Card Container with subtle black border */}
      <div className="flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg border border-black/10 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
        {/* Top Section - Image Area (Neutral Dark Background) */}
        <div className="h-64 bg-zinc-700 relative flex items-center justify-center p-4">
          {/* Removed Red Gradient for better contrast */}
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/20"></div>

          {/* Large Image */}
          <div className="relative z-10 w-48 h-48 transition-transform duration-300 group-hover:scale-110">
            <Image
              key={pokemon.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`}
              width={200}
              height={200}
              alt={pokemon.name}
              priority={false}
              className="absolute w-full h-full object-contain"
            />
            <Image
              key={`${pokemon.id}-shiny`}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/shiny/${pokemon.id}.png`}
              width={200}
              height={200}
              alt={pokemon.name}
              priority={false}
              className="absolute w-full h-full object-contain transition-opacity duration-500 opacity-0 group-hover:opacity-100"
            />
          </div>
        </div>

        {/* Bottom Section - Name & Heart */}
        <div className="bg-white p-4 flex items-center justify-between border-t border-gray-100">
          <div className="flex flex-col">
            <p className="text-lg font-bold text-gray-800 capitalize leading-tight">
              {name}
            </p>
            <span className="text-xs text-gray-400 font-mono">
              #{id.toString().padStart(3, "0")}
            </span>
          </div>

          <div
            onClick={onToggleFavorite}
            className="text-gray-400 transition-colors cursor-pointer"
          >
            {isFavorite ? (
              <IoHeart className="w-6 h-6 text-red-500" />
            ) : (
              <IoHeartOutline className="w-6 h-6" />
            )}
          </div>
        </div>

        {/* Action Section */}
        <div className=" border-t border-gray-100 p-4 bg-gray-50/50">
          <p>
            {isFavorite ? (
              <span className=" flex items-end mb-2  justify-center text-red-500 text-xs  font-mono">
                Es favorito
              </span>
            ) : (
              <span className=" flex items-end mb-2  justify-center text-gray-400 text-xs  font-mono">
                No es favorito
              </span>
            )}
          </p>
          <Link
            href={`/dashboard/pokemon/${name}`}
            className="block w-full py-2.5 px-4 rounded-xl bg-zinc-800 text-white text-center text-sm font-semibold hover:bg-zinc-700 transition-colors duration-200 shadow-sm"
          >
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};
