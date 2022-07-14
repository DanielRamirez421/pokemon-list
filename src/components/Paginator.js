import { StyleSheet, Button, Text, View } from "react-native";

export const Paginator = ({ setSearchParam, page }) => {

  const handlerPreviuous = () => {
    setSearchParam(({ page }) => ({ name: '', page: page - 1 }));
  };

  const handlerNext = () => {
    setSearchParam(({ page }) => ({ name: '', page: page + 1 }));
  }

  return (
    <View style={paginatorStyles.container}>
      <Button 
        title="◀ Previous" 
        onPress={handlerPreviuous}
        disabled={page === 1}
        color="#ff1c1c"
      />
      <Text style={paginatorStyles.text}>{ page }</Text>
      <Button 
        title="    Next ▶     "
        onPress={handlerNext}
        color="#ff1c1c"
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
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    fontSize: 17,
  }
});