import { useEffect, useState } from "react"

import { fetchPokemons } from "../helpers/fetchPokemons";

export const useFetchPokemons = ( name, page = 1 ) => {
  const [ pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    fetchPokemons(name, page).then(data => {
      setPokemons(data);
      })
    
  }, [ name, page ]);

  return { pokemons };
}
