import { useEffect, useState } from "react";
import { initialPokemonState } from "../utils/utils";
import { fetchPokemon } from "../helpers/fetchPokemon";

export const useFetchPokemon = (name, url) => {
  const [pokemon, setPokemon] = useState(initialPokemonState);
  useEffect(() => {
    const asyncFunction = async () => {
      if (name && url) {
        const pokemon = await fetchPokemon(url, name);
        setPokemon(pokemon);
      }
    }
    asyncFunction();
  }, [name, url]);

  return { pokemon };
};
