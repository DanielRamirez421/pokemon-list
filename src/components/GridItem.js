import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useFetchPokemon } from "../hooks/useFetchPokemon";

import { capitalize } from "../utils/utils";

export const GridItem = ({ name, url, setSelectedPokemon, setModalVisible }) => {
  
  const { pokemon } = useFetchPokemon(name, url);

  const pokemonPressed = () => {
    setSelectedPokemon(pokemon);
    setModalVisible(true);
  }

  return (
    <Pressable onPress={pokemonPressed} style={gridItemStyles.card}>
      <View>
        <Image style={gridItemStyles.image} source={{uri: pokemon.img}}/>
        <Text  style={gridItemStyles.text}>{'#' + pokemon.id}</Text>
        <Text  style={gridItemStyles.textTitle}>{capitalize(pokemon.name)}</Text>
      </View>
    </Pressable>
  );
};

const gridItemStyles = StyleSheet.create({
  card: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    display: "flex",
    flexDirection: "column",
    margin: 7,
    paddingVertical: 15,
    minWidth: 144,
    flex: 1,
  },
  image: {
    height: 130,
    width: 130,
  },
  text: {
    fontSize: 20,
    alignSelf: "center"
  },
  textTitle: {
    fontWeight: "bold",
    fontStyle: 'italic',
    fontSize: 25,
    alignSelf: "center"
  }
});
