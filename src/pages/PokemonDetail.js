import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { capitalize } from "../utils/utils";

export const PokemonDetail = ({selectedPokemon, setModalVisible}) => {
  return (
    <View>
      <Image style={pokemonDetailStyles.image} source={{uri: selectedPokemon.img}}/>
      <Text  style={pokemonDetailStyles.textId}>{'#' + selectedPokemon.id}</Text>
      <Text  style={pokemonDetailStyles.textTitle}>{capitalize(selectedPokemon.name)}</Text>
      <Text style={pokemonDetailStyles.textSubtitle}>Types</Text>
        <View style={pokemonDetailStyles.types}>
          { selectedPokemon.type.map((type) => <Text key={type} style={{marginRight: 10}}>{type}</Text>) }
        </View>
      <Text style={pokemonDetailStyles.textSubtitle}>Weight</Text>
      <Text style={{marginLeft: 5}}>{ `${selectedPokemon.weight}Lbs` }</Text>
      <Text style={pokemonDetailStyles.textSubtitle}>Sprites</Text>
      <View style={pokemonDetailStyles.sprites}>
        <Image style={pokemonDetailStyles.imageSprite} source={{uri: selectedPokemon.sprites.back_default}}/>
        <Image style={pokemonDetailStyles.imageSprite} source={{uri: selectedPokemon.sprites.back_shiny}}/>
        <Image style={pokemonDetailStyles.imageSprite} source={{uri: selectedPokemon.sprites.front_default}}/>
        <Image style={pokemonDetailStyles.imageSprite} source={{uri: selectedPokemon.sprites.front_shiny}}/>
      </View>
      <Text style={pokemonDetailStyles.textSubtitle}>Movements</Text>
      <View style={pokemonDetailStyles.types}>
        { selectedPokemon.movements.map((movement) => <Text key={movement} style={{marginRight: 7}}>{movement}</Text>) }
      </View>
      
      <Pressable
        style={[pokemonDetailStyles.button]}
        onPress={() => setModalVisible(false)}
      >
        <Text style={pokemonDetailStyles.textStyle}>Close</Text>
      </Pressable>
    </View>
  );
};

const pokemonDetailStyles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#3986CE",
    marginTop: 15,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  image: {
    height: 130,
    width: 130,
    alignSelf: "center",
  },
  textId: {
    fontSize: 20,
    textAlign: "center",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 25,
    textAlign: "center",
  },
  textSubtitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  sprites: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  types: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: 5,
  },
  imageSprite: {
    height: 65,
    width: 60,
  },
});