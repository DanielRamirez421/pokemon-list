import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Grid } from "../components/Grid";
import { Paginator } from "../components/Paginator";
import { SearchBar } from "../components/SearchBar";
import { TitleApp } from "../components/TitleApp";
import { useFetchPokemons } from "../hooks/useFetchPokemons";

export const Home = () => {

  const [ { name, page }, setSearchParam ] = useState({ name: '', page: 1 });

  const { pokemons } = useFetchPokemons(name, page);

  return (
    <View style={homeStyles.container}>
      
      <TitleApp />

      <SearchBar/>


      <Grid pokemons={pokemons}/>


      <Paginator setSearchParam={setSearchParam} page={page}/>
    </View>
  )
}

const homeStyles = StyleSheet.create({ 
  container: {
    paddingHorizontal: 20,
    paddingVertical: 40,
    backgroundColor: '#e6e6e6',
  }
});