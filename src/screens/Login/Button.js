import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native'
const barStatusHeight = StatusBar.currentHeight;

const Button = ({backgroundColor, texto, textColor, imageSource, TOborderWidth, TOborderColor}) => {
  return (
    <TouchableOpacity style={[styles.btnLogin,{flex:1, backgroundColor:{backgroundColor}, flexDirection: 'row', marginLeft: 5}]}>
        <Image style={{width:20, height:20}} source={imageSource}/>
        <Text style={[styles.btnTextForgot,{ color: {textColor}, marginLeft:10}]}>{texto}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnTextForgot:{
    fontWeight: 'bold',
  },  
  btnLogin:{
    backgroundColor: 'red',
    padding:10,
    borderRadius: 15,    
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray'
  },  
})

export default Button

// borderWidth: {TOborderWidth},
//       borderColor: {TOborderColor}, 