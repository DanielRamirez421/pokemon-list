import { fetchPokemons } from "../../src/helpers/fetchPokemons";

describe("fetchPokemons tests", () => {
  test("should return 20 pokemons", async () => {
    const name = "";
    const page = 1;
    const pokemons = await fetchPokemons(name, page);
    expect(pokemons.length).toBe(20);
  });

  test("should return 1 pokemon", async () => {
    const name = "bulbasaur";
    const page = 1;
    const pokemons = await fetchPokemons(name, page);
    expect(pokemons.length).toBe(1);
  });

  test("should throw exeption", () => {
    const name = "bulbasaur";
    const page = 2;
    expect(fetchPokemons(name, page)).rejects.toThrow();
  });

  test("should return an empty array", async () => {
    const name = "nonExistingPokemon";
    const page = 1;
    const pokemons = await fetchPokemons(name, page);
    expect(pokemons.length).toBe(0);
  });
});
