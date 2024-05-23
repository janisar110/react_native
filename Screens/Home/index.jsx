import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesomes5 from "react-native-vector-icons/FontAwesome5"
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = () => {
  return (
    <>
      <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
        </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:30,
    fontWeight:'bold'
  }
})