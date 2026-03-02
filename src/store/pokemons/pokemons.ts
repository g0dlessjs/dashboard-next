import { SimplePokemon } from "@/pokemons";
import { createSlice } from "@reduxjs/toolkit";

interface PokemonsState {
  [key: string]: SimplePokemon;
}

const initialState: PokemonsState = {
  "1": { id: 1, name: "bulbasaur" },
  "2": { id: 2, name: "ivysaur" },
  "3": { id: 3, name: "venusaur" },
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {},
});

export const {} = pokemonSlice.actions;

export default pokemonSlice.reducer;
