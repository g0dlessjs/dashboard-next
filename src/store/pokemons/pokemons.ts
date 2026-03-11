import { SimplePokemon } from "@/pokemons";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsState => {
//   // if (typeof localStorage === "undefined") return {}; Ejemplo para error

//   const favorite = JSON.parse(
//     localStorage.getItem("favorites-pokemons") || "{}",
//   );
//   return favorite;
// };

const initialState: PokemonsState = {
  favorites: {},
  // ...getInitialState(),
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>,
    ) {
      state.favorites = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      const { id } = pokemon;
      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      // TODO: No se debe hacer en redux, solo es un ejemplo
      localStorage.setItem(
        "favorites-pokemons",
        JSON.stringify(state.favorites),
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
