import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Services = () => {
  return (
    <>
    <View style={styles.container}>
    <Text style={styles.text}>Services</Text>
      </View>
  </>
  )
}

export default Services


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