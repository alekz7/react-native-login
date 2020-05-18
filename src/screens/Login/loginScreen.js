import React from 'react'
import { StyleSheet, Text, View, SafeAreaView, TextInput, StatusBar, TouchableOpacity, Image, ToolbarAndroid } from 'react-native'
import Button from './Button';
const barStatusHeight = StatusBar.currentHeight;

// TODO ME QUEDE EN 40:05

const LoginScreen = () => {
  return (    
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>Sign In</Text>
        <View>
          <View>
            <Text style={styles.title}>Email</Text>
            <TextInput style={styles.input} value = '' onChangeText={console.log('TODOonChangeText')} placeholder='email'></TextInput>
          </View>
          <View>
            <Text style={styles.title}>Password</Text>
            <TextInput style={styles.input} value = '' onChangeText={console.log('TODOonChangeText')} placeholder='password' secureTextEntry></TextInput>
          </View>
        </View>      
        <View style={styles.forgotContainer}>
          <TouchableOpacity>
            <Text style={styles.btnTextForgot}>Olvidaste el password?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnLogin}>
            <Text style={[styles.btnTextForgot, {color: 'white'}]}>Sign In</Text>
        </TouchableOpacity>

        <Text style={{textAlign: 'center', padding:20}}>o'</Text>
        
        <View style={styles.ggBtn}>
          <Button styleTouchableOpacity={ {backgroundColor: 'white'} } styleText={ {color: 'black'} } texto='Google' textColor='white' imageSource={require('../../assets/googleIcon.png')}
            onPress={console.log('TODO login con google')}/>
          <Button styleTouchableOpacity={ {backgroundColor: '#4267b2'} } styleText={ {color: 'white'} } texto='Facebook' textColor='white' imageSource={require('../../assets/facebookIcon.png')}
            onPress={console.log('TODO login con facebook')}/>
        </View>
        <View style={{flexDirection:'row', padding:10, justifyContent:'center', alignItems:'center', marginTop: 20}}>
          <Text>Todavia no estas registrado?</Text>
          <TouchableOpacity>
            <Text style={[styles.btnTextForgot, {color:'red'}]}>Registrate</Text>
          </TouchableOpacity>
        </View>                                                      
      </View>
    </SafeAreaView>     
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    // debido a que SafeAreaView solo trabaja en ios para android hay que hacer el siguiente estilo
    paddingTop: Platform.OS === 'android' ? barStatusHeight : 0, // de acuerdo al dispositivo, para ios no es necesario el padding por que esta dentro un componante SafeAreaView de ios
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input:{
    padding:10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'gray'
  },
  title:{
    marginVertical: 10,    
  },
  wrapper:{
    padding: 14,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  btnTextForgot:{
    fontWeight: 'bold',
  },
  forgotContainer:{
    flexDirection:'row', 
    justifyContent:'flex-end', 
    paddingVertical:20
  },
  btnLogin:{
    backgroundColor: 'red',
    padding:10,
    borderRadius: 15,    
    justifyContent: 'center',
    alignItems: 'center',
  },
  ggBtn:{
    flexDirection: 'row',
  },
})

export default LoginScreen