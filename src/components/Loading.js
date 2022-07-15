import { StyleSheet, View, Text } from "react-native"

export const Loading = ({isLoading}) => {
  return (
    !isLoading ?
    null :
    <View style={loadingStyles.container}>
      <Text style={loadingStyles.text}>Loading ...</Text>
    </View>
  )
}

const loadingStyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  text: {
    color: 'grey',
  }
});