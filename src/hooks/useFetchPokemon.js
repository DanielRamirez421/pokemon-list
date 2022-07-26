import { useEffect, useState } from "react";
import { fetchPokemon } from "../helpers/fetchPokemon";


export const useFetchPokemon = ( name, url ) => {
  
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "https://www.kananss.com/wp-content/uploads/2021/06/51-519068_loader-loading-progress-wait-icon-loading-icon-png-2.png",
    id: "",
    type: [],
    weight: "",
    sprites: {},
    movements: [],
  });

  useEffect(() => {
    if (name && url) {
      fetchPokemon(url, name).then((data) => setPokemon(data));
    }
  }, [name, url]);

  return {
    pokemon
  };
}
