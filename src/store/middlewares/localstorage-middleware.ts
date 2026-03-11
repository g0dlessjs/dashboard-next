import { Middleware } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware: Middleware = (state) => (next) => (action: any) => {
  const result = next(action);

  if (action.type === "pokemons/toggleFavorite") {
    const { pokemons } = state.getState() as RootState;
    localStorage.setItem("favorites-pokemons", JSON.stringify(pokemons));
  }

  return result;
};


