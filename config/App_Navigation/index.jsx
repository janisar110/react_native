import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from '../../Screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bottom_Navigation from './Bottom_Navigation';
import Get_Started from '../../Screens/Get_Started';
import Login from '../../Screens/Login';
import Signup from '../../Screens/Signup';



const Stack = createNativeStackNavigator();

const App_Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
      }}>
        <Stack.Screen  name="Get_Started" component={Get_Started} />
        <Stack.Screen  name="Login" component={Login} />
        <Stack.Screen  name="Signup" component={Signup} />
        <Stack.Screen  name="Bottom_Navigation" component={Bottom_Navigation} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App_Navigation

const styles = StyleSheet.create({})