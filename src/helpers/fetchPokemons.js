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

    if (!name) {
      return response.data.results;
    }

    return [{
      name: name,
      url: `${baseURL}/${name.trim().toLocaleLowerCase()}`,
    }]

    // return !name ? response.data.results : response.data ;

  } catch (error) {

    if (error?.response?.status === 404) {
      return [];
    }

    // console.error(error);
    alert(error);

  }
};
