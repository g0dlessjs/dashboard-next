"use client";

import { Provider } from "react-redux";
import { store } from "./index";
import { useEffect } from "react";
import { setFavoritePokemons } from "./pokemons/pokemons";

interface Props {
  children: React.ReactNode;
}

export default function Providers({ children }: Props) {
  useEffect(() => {
    const favorites = localStorage.getItem("favorites-pokemons") ?? "{}";
    store.dispatch(setFavoritePokemons(JSON.parse(favorites)));
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
