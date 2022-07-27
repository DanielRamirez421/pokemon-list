import { renderHook, waitFor } from "@testing-library/react-native";
import { useFetchPokemons } from "../../src/hooks/useFetchPokemons";

describe("useFetchPokemons tests", () => {

  test("should return initial state", async () => {
    const name = "";
    const page = 1;
    const setIsLoading = jest.fn();
    const { result } = renderHook(() => useFetchPokemons(name, page, setIsLoading));

    await waitFor(() => {
      return expect(result.current.pokemons.length).toEqual(20);
    });
  });

});
