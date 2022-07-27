import { render, screen, fireEvent } from "@testing-library/react-native";
import { GridItem } from "../../src/components/GridItem";
import { useFetchPokemon } from "../../src/hooks/useFetchPokemon";

jest.mock("../../src/hooks/useFetchPokemon");

describe("GridItem component tests", () => {

  const { name, url, setSelectedPokemon, setModalVisible, id, img } = {
    name: "bulbasaur",
    url: "https://pokeapi.co/api/v2/pokemon/1/",
    setSelectedPokemon: jest.fn(),
    setModalVisible: jest.fn(),
    id: 1,
    img: "http://pokemon1.png",
  };

  test("renders with props", () => {
    useFetchPokemon.mockReturnValue({ pokemon: { name, url, id, img } });
    render(
      <GridItem
        name={name}
        url={url}
        setSelectedPokemon={setSelectedPokemon}
        setModalVisible={setModalVisible}
      />
    );
    expect(screen.getByText("#1")).toBeTruthy();
  });

  test('should set selected pokemon by user', () => {
    render(
      <GridItem
        name={name}
        url={url}
        setSelectedPokemon={setSelectedPokemon}
        setModalVisible={setModalVisible}
      />
    );
    fireEvent.press(screen.getByText('#1'));
    expect(setModalVisible).toHaveBeenCalledWith(true);

  });
});
