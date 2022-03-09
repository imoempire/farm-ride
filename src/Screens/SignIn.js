import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Buttons from '../Component/Button/Buttons'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.Image}>
      <Image source={require('../../assets/Logo1.png')} />
      </View>
      {/* Form */}
      <View style={styles.form}>
         <View style={styles.Label}>
            <Text>Email</Text>
            <TextInput style={styles.Input} placeholder="Email"/>
         </View>
         <View style={styles.Label}>
            <Text>Password</Text>
            <TextInput style={styles.Input} placeholder="Password"/>
         </View>
         <View style={{alignItems: 'center', marginVertical: 20}}>
         <Buttons press={()=>navigation.navigate('Tabs')} textColor={"white"} background={"#27E20C"} content={"Login"} border={0} borderColor={"red"} pd={10} size={20} mH={20} br={10}/>
         </View>
      </View>
      <View style={styles.options}>
         <TouchableOpacity>
         <Image source={require('../../assets/google.png')}/>
         </TouchableOpacity>
         <View style={styles.optionsQuestion}>
            <Text style={{marginHorizontal: 10}}>No Account Yet ?</Text>
            <Buttons press={()=>navigation.navigate('SignUp')} textColor={"white"} background={"blue"} content={"Create"} border={0} borderColor={"red"} pd={3} size={20} mH={20} br={5}/>
         </View>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   Image: {
      flex: .5,
      alignItems: 'center',
      justifyContent: 'center',
   },
   form: {
      flex: 1,
      marginHorizontal: 20
   },
   Label: {
      marginVertical: 20
   },
   Input: {
      borderWidth: 2,
      height: 50,
      borderRadius: 20,
      paddingLeft: 20,
      borderColor: '#27E20C',
   },
   options: {
      flex: .5,
      marginHorizontal: 50,
      alignItems: 'center',
   },
   optionsQuestion: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 30,
   }
})