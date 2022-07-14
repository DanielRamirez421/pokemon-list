import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import { fetchPokemon } from "../helpers/fetchPokemon";
import { capitalize } from "../utils/utils";

export const GridItem = ({ name, url }) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    img: "https://www.kananss.com/wp-content/uploads/2021/06/51-519068_loader-loading-progress-wait-icon-loading-icon-png-2.png",
    id: "",
    type: [],
    weight: "",
    sprites: {},
    movements: [],
  });

  useEffect(() => {
    if (name && url) {
      fetchPokemon(url, name).then((data) => setPokemon(data));
    }
  }, [name, url]);

  return (
    <View style={gridItemStyles.card}>
      <Image style={gridItemStyles.image} source={{uri: pokemon.img}}/>
      <Text  style={gridItemStyles.textTitle}>{capitalize(pokemon.name)}</Text>
      <Text  style={gridItemStyles.text}>{'#' + pokemon.id}</Text>
    </View>
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
  },
  textTitle: {
    fontWeight: "bold",
    fontStyle: 'italic',
    fontSize: 25,
  }
});