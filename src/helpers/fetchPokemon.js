import axios from "axios";

export const fetchPokemon = async (url, name) => {

  try {
    
    const response = await axios.get(url);
    const data = response.data;

    return {
      name: name,
      img: data.sprites.front_default,
      id: data.id,
      type: data.types.map(type => type.type.name),
      weight: data.weight,
      sprites: data.sprites,
      movements: data.moves.map(move => move.move.name),
    }

  } catch (error) {

    alert(error);
    
  }

};