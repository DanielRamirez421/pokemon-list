import { StyleSheet, Button, Text, View } from "react-native";

export const Paginator = ({ setSearchParam, page, name, pokemons }) => {

  const handlerPreviuous = () => {
    setSearchParam(({ page }) => ({ name: '', page: page - 1 }));
  };

  const handlerNext = () => {
    setSearchParam(({ page }) => ({ name: '', page: page + 1 }));
  }

  return (

    name ? 
    null :
    <View style={paginatorStyles.container}>
      <Button 
        title="◀ Previous" 
        onPress={handlerPreviuous}
        disabled={page === 1}
        color="#3986CE"
      />
      <Text style={paginatorStyles.text}>{ page }</Text>
      <Button 
        title="    Next ▶     "
        onPress={handlerNext}
        color="#3986CE"
        disabled={pokemons.length < 20}
      />
    </View>
  )
}

const paginatorStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
  text: {
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 17,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    textAlignVertical: 'center',
  }
});