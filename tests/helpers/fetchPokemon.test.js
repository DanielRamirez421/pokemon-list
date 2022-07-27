import { fetchPokemon } from "../../src/helpers/fetchPokemon";
import { initialPokemonState } from "../../src/utils/utils";

describe("fetchPokemon tests", () => {

  test("should bring a pokemon", async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/3/";
    const name = "venusaur";

    const venusaur = await fetchPokemon(url, name);
    expect(venusaur.name).toBe(name);
  });

  test("should show alert", async () => {
    const url = "http://non-existent-url";
    const name = "venusaur";

    const venusaur = await fetchPokemon(url, name);
    expect(venusaur).toBe(initialPokemonState)
  });
});
