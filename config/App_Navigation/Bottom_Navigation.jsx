import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../Screens/Home';
import About from '../../Screens/About';
import Profile from '../../Screens/Profile';
import Services from '../../Screens/Services';
import FontAwesomes5 from "react-native-vector-icons/FontAwesome5"
import FontAwesomes6 from "react-native-vector-icons/FontAwesome6"



const Tab = createBottomTabNavigator();

const Bottom_Navigation = () => {
  return (
    <Tab.Navigator screenOptions={{ 
      tabBarActiveTintColor: '#FCC34A',

      
     }}>
      <Tab.Screen options={{ tabBarIcon: ({ color, size }) => (
            <FontAwesomes5 name="home" color={color} size={size} />
          ), headerStyle:{backgroundColor:'#FCC34A'}}} name="Home" component={Home} />
      <Tab.Screen options={{ tabBarIcon: ({ color, size }) => (
            <FontAwesomes5 name="info-circle" color={color} size={size} />
          ),headerStyle:{backgroundColor:'#FCC34A'}}}  name="About" component={About} />
      <Tab.Screen options={{ tabBarIcon: ({ color, size }) => (
            <FontAwesomes5 name="user-circle" color={color} size={size} />
          ),headerStyle:{backgroundColor:'#FCC34A'}}} name="Profile" component={Profile} />
          <Tab.Screen options={{ tabBarIcon: ({ color, size }) => (
            <FontAwesomes6 name="users-gear" color={color} size={size} />
          ),headerStyle:{backgroundColor:'#FCC34A'}}} name="Services" component={Services} />
  
    </Tab.Navigator>
  )
}

export default Bottom_Navigation

const styles = StyleSheet.create({})