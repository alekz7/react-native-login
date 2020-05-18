import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet, StatusBar } from 'react-native'
const barStatusHeight = StatusBar.currentHeight;

const Button = ({styleTouchableOpacity, styleText, texto, textColor, imageSource, TOborderWidth, TOborderColor}) => {

  const combineStylesText = StyleSheet.flatten([styles.btnTextForgot, styleText, {marginLeft:10}]);
  const combineStylesTouchableOpacity = StyleSheet.flatten([styles.btnLogin, styleTouchableOpacity,{flex:1, flexDirection: 'row', marginLeft: 5}]);

  return (
    <TouchableOpacity style={ combineStylesTouchableOpacity}>
        <Image style={{width:20, height:20}} source={imageSource}/>        
        <Text style={ combineStylesText } >{texto}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  btnTextForgot:{
    fontWeight: 'bold',
  },  
  btnLogin:{    
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