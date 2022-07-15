import { StyleSheet, View, Text, Image } from "react-native"
import { GridItem } from "./GridItem";

export const Grid = ({ pokemons }) => {
  return (
    <View style={gridStyles.container}>
      {

        pokemons?.length === 0 ? 

        <View style={gridStyles.notResults}>
          <Image 
            style={gridStyles.notResultsImage}
            source={{uri: 'https://pixelartmaker-data-78746291193.nyc3.digitaloceanspaces.com/image/d2a7197702273c9.png'}}
          />
          <Text style={gridStyles.notResultsText}>Sin Resultados</Text>
        </View> :

        pokemons.map(({ name, url }) => 
        <GridItem
          key={ name }
          name={ name }
          url={ url }
        />)

      }
    </View>
  )
}

const gridStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  notResults: {
    marginTop: 100,
  },
  notResultsText: {
    fontSize: 20,
  },
  notResultsImage: {
    width: 100,
    height: 100,
    marginBottom: 15,
  }
});