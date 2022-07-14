import { StyleSheet, View } from "react-native"
import { GridItem } from "./GridItem";

export const Grid = ({ pokemons }) => {
  return (
    <View style={gridStyles.container}>
      {
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
  }
});