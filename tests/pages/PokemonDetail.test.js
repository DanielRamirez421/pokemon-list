import { render, screen, fireEvent } from "@testing-library/react-native";
import { fetchPokemon } from "../../src/helpers/fetchPokemon";
import { PokemonDetail } from "../../src/pages/PokemonDetail";
import { capitalize } from "../../src/utils/utils";

describe("PokemonDetail tests", () => {
  const name = "bulbasaur";
  const url = "https://pokeapi.co/api/v2/pokemon/1/";

  test("should show PokemonDetail component", async () => {
    const selectedPokemon = await fetchPokemon(url, name);
    const setModalVisible = jest.fn();

    render(
      <PokemonDetail
        selectedPokemon={selectedPokemon}
        setModalVisible={setModalVisible}
      />
    );
    expect(screen.getByText(capitalize(name))).toBeTruthy();
  });

  test("should hide modal", async () => {
    const selectedPokemon = await fetchPokemon(url, name);
    const setModalVisible = jest.fn();

    render(
      <PokemonDetail
        selectedPokemon={selectedPokemon}
        setModalVisible={setModalVisible}
      />
    );

    fireEvent.press(screen.getByText("Close"));
    expect(setModalVisible).toHaveBeenCalledWith(false);
  });
});
