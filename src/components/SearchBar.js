import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Pressable, Image, View } from "react-native";

export const SearchBar = ({setSearchParam, name}) => {

  const [inputState, setInputState] = useState("");

  const onSubmit = () => {
    setSearchParam(() => ({name: inputState, page: 1}));
  }

  const clearInput = () => {
    setInputState("");
    setSearchParam(() => ({name: '', page: 1}));
  }

  return (
    <SafeAreaView>
      <View style={searchBarStyle.areaView}>
        <TextInput
          style={searchBarStyle.input}
          value={inputState}
          onChangeText={setInputState}
          placeholder="Search..."
          autoCorrect={false}
          onSubmitEditing={onSubmit}
        />
        {!name ? null : 
        <Pressable style={searchBarStyle.pressable} onPress={clearInput}>
          <Image 
            style={searchBarStyle.pressableImg}
            source={{uri: 'https://img.icons8.com/ios-filled/344/delete-sign--v1.png' }}
          />
        </Pressable>}
        <Pressable style={searchBarStyle.pressable} onPress={onSubmit}>
          <Image 
            style={searchBarStyle.pressableImg}
            source={{uri: 'https://img.icons8.com/ios-filled/344/search--v1.png' }}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const searchBarStyle = StyleSheet.create({
  areaView: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 7,
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    fontSize: 20,
    height: 40,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  pressable: {
    alignItems: "center",
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 40,
    justifyContent: "center",
    marginLeft: 5,
    width: 40,
  },
  pressableImg: {
    height: 24,
    width: 24,
  }
});
