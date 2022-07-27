import { render, screen } from "@testing-library/react-native";

import { useFetchPokemon } from "../../src/hooks/useFetchPokemon";
import { Grid } from "../../src/components/Grid";

jest.mock("../../src/hooks/useFetchPokemon");

describe("GridComponent test", () => {

  const { name, url, id, img } = {
    id: 3,
    name: "venusaur",
    img: "http://pokemon3.png",
    url: "https://pokeapi.co/api/v2/pokemon/3/",
  };

  test("should render without results", () => {
    const pokemons = [];
    render(<Grid pokemons={pokemons} />);
    const noResults = screen.getByText("Sin Resultados");
    expect(noResults).toBeTruthy();
  });

  test("should render with results", () => {
    useFetchPokemon.mockReturnValue({ pokemon: { name, url, id, img } });
    const pokemons = [
      { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/", },
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/", },
      { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/", },
    ];
    const { container } = render(<Grid pokemons={pokemons} />);
    const gridItemsNumber = screen.getAllByText("#3");
    expect(gridItemsNumber.length).toBe(pokemons.length);
  });
});
