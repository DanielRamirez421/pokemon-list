import { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

export const SearchBar = () => {

  const [inputState, setInputState] = useState("");

  return (
    <SafeAreaView style={searchBarStyle.areaView}>
        <TextInput
          style={searchBarStyle.input}
          value={inputState}
          onChangeText={setInputState}
          placeholder="Search..."
          autoCorrect={false}
        />
    </SafeAreaView>
  );
};

const searchBarStyle = StyleSheet.create({
  areaView: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
  },
  input: {
    backgroundColor: '#fff',
    borderColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    flex: 1,
    fontSize: 20,
    height: 40,
    marginHorizontal: 7,
    marginVertical: 10,
    paddingHorizontal: 10,
  }
});
