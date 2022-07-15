import { useEffect, useState } from "react"

import { fetchPokemons } from "../helpers/fetchPokemons";

export const useFetchPokemons = ( name, page = 1, setIsLoading ) => {
  const [ pokemons, setPokemons ] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetchPokemons(name, page).then(data => {
      setPokemons(data);
      setIsLoading(false);
      })
    
  }, [ name, page ]);

  return { pokemons };
}
