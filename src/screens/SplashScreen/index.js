import React,{useEffect} from 'react'
import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import { images } from '../../global/imagenes';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  useEffect(()=>{
    setTimeout(()=>{
      goToLogin();
    },3000)
  }, [])

  const navigation = useNavigation();
  const goToLogin = ()=>{
    navigation.navigate("LoginScreen");
  }

  return (
    <ImageBackground style={styles.background}source={images.splashscreen}/>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  }
})


export default Splash
