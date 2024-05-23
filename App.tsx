import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import App_Navigation from './config/App_Navigation'
import Splash_Screen from './Screens/Splash_Screen'
import Get_Started from './Screens/Get_Started'

const App = () => {
  const [show_Splash_Screen, setShow_Splash_Screen] = useState(false)

useEffect(() => {
  setTimeout(()=>{
    setShow_Splash_Screen(true)
  },2500)
}, [show_Splash_Screen])


  return show_Splash_Screen ? <App_Navigation/>  :   <Splash_Screen/>

}
export default App

