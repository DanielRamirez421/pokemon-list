import { renderHook, waitFor } from "@testing-library/react-native";
import { useFetchPokemon } from "../../src/hooks/useFetchPokemon";

describe("useFetchPokemon tests", () => {
  
  const { name, url } = {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
  };

  test("should return a state with a pokemon", async () => {
    const { result } = renderHook(() => useFetchPokemon(name, url));
    await waitFor(() => {
      return expect(result.current.pokemon.type.length).toBeGreaterThan(0);
    });
  });
});
