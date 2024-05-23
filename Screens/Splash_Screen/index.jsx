import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import logo from '../../assests/Images/Logo.png'
const Splash_Screen = () => {
  return (
    <>
    <View style={styles.container}>
      {/* <Text  style={styles.text}>Splash_Screen</Text> */}
    <View style={styles.ImageContainer}>
    <Image
        style={styles.logo}
        source={logo}
      />
    </View>
    </View>
    </>
  )
}

export default Splash_Screen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#A08F6C',
  },
  text:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  },
  ImageContainer:{
  },
  logo:{
    width:250,
    height:250,
    resizeMode:'contain'
    
  }
  })