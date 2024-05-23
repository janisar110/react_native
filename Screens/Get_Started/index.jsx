import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import iconLogo from "../../assests/Images/iconLogo.png"
import FontAwesomes5 from "react-native-vector-icons/FontAwesome6"
import { useNavigation } from '@react-navigation/native'

const Get_Started = () => {
  const navigation = useNavigation();


  const handleNavigate = () => {
    navigation.navigate('Bottom_Navigation')
  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.ImageContainer}> 
      <Image
        style={styles.logo}
        source={iconLogo}
      />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.headingText}>Get Started</Text>
      <Text style={styles.text}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repellat eius consectetur nobis adipisci, libero ullam quibusdam distinctio suscipit numquam modi reiciendis sunt voluptate minus? Nesciunt dicta deserunt vitae expedita!</Text>
    </View>
    <View style={styles.getStartedBtnContainer}> 
      <TouchableOpacity onPress={handleNavigate}>
        <FontAwesomes5  name="arrow-right" size={40} />
      </TouchableOpacity>
    </View>
    </View>
    </>
  )
}

export default Get_Started

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
  },
  ImageContainer:{
    paddingVertical:20,
    marginVertical:20
  },
  logo:{
    width:300,
    height:300,
    resizeMode:'contain',
    borderRadius:200
    
  },
  getStartedBtnContainer:{
    backgroundColor:'#FCC34A',
    paddingHorizontal:27,
    paddingVertical:25,
    borderRadius:300
  },
  textContainer:{
    paddingBottom:50,
    paddingTop:10,
    alignItems:'center',
    width:350
  },
  headingText:{
    paddingVertical:20,
    fontSize:30,
    fontWeight:'bold',
    color:"#FCC34A"
  },
  text:{
    fontSize:15,
  },
  })