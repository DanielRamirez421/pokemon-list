import axios from "axios";

export const fetchPokemons = async (name, page) => {
  try {

    if (name !== '' && page > 1) {
      throw new Error("Search specific pokemon and pagination are not supported at the same time");
    }

    const limit = 20;
    const offset = (page - 1) * limit;  
    let baseURL = `https://pokeapi.co/api/v2/pokemon`;
    if (name) {
      baseURL += `/${name.trim().toLocaleLowerCase()}`;
    }
    baseURL = `${baseURL}?limit=${limit}&offset=${offset}`;

    const response = await axios.get(baseURL);
    return name ? response.data : response.data.results;

  } catch (error) {

    if (error?.response?.status === 404) {
      return [];
    }

    console.error(error);
    alert(error);

  }
};
