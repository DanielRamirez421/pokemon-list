export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const initialPokemonState = {
  name: "",
  img: "https://www.kananss.com/wp-content/uploads/2021/06/51-519068_loader-loading-progress-wait-icon-loading-icon-png-2.png",
  id: "",
  type: [],
  weight: "",
  sprites: {},
  movements: [],
};