import { StyleSheet, View, Text, Image, Pressable } from "react-native"

export const TitleApp = ({setSearchParam}) => {
  return (
    <Pressable onPress={() => setSearchParam({ name: '', page: 1 })}>
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/404px-International_Pok%C3%A9mon_logo.svg.png'}} 
        style={titleAppStyles.image}
      />
      <View style={titleAppStyles.textSubtitle}>
        <Text style={titleAppStyles.textTitle}>Pokedex</Text>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/1026px-Pok%C3%A9_Ball_icon.svg.png' }}  
          style={titleAppStyles.imageSubtitle}
        />
      </View>
    </Pressable>
  )
}

const titleAppStyles = StyleSheet.create({
  image: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
    marginTop: 20,
  },
  textTitle: {
    fontSize: 25,
    textAlign: 'center'
  },
  textSubtitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageSubtitle: {
    width: 25,
    height: 25,
    marginLeft: 5,
  }
});