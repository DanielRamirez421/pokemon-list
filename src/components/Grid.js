import { useState } from "react";
import { StyleSheet, View, Text, Image, Modal, ScrollView } from "react-native"
import { PokemonDetail } from "../pages/PokemonDetail";
import { initialPokemonState } from "../utils/utils";
import { GridItem } from "./GridItem";

export const Grid = ({ pokemons }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState(initialPokemonState);

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
          setSelectedPokemon={ setSelectedPokemon }
          setModalVisible={ setModalVisible }
        />)

      }


      <Modal 
        animationType="fade"
        transparent={true}
        visible={modalVisible}
      >
        <View style={modalStyles.centeredView}>
        <ScrollView>
          <View style={modalStyles.modalView}>
            <PokemonDetail 
              selectedPokemon={selectedPokemon}
              setModalVisible={setModalVisible}
            />
          </View>
        </ScrollView>
        </View>
      </Modal>



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


const modalStyles = StyleSheet.create({
  centeredView: {
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 5,
    elevation: 5,
    margin: 20,
    paddingHorizontal: 40,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    elevation: 2,
    padding: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});