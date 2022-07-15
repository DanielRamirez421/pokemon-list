import { useState } from "react";
import { StyleSheet, View, Text, Image, Modal, ScrollView } from "react-native"
import { PokemonDetail } from "../pages/PokemonDetail";
import { GridItem } from "./GridItem";

export const Grid = ({ pokemons }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState({
    name: "",
    img: "https://www.kananss.com/wp-content/uploads/2021/06/51-519068_loader-loading-progress-wait-icon-loading-icon-png-2.png",
    id: "",
    type: [],
    weight: "",
    sprites: {},
    movements: [],
  });

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    paddingVertical: 20,
    paddingHorizontal: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
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