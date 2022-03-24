import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Buttons from '../Component/Button/Buttons';


const Welcome = ({navigation}) => {
   const dimensions = Dimensions.get('window');
   const imageHeight = Math.round(dimensions.width * 5 / 6);
   const imageWidth = dimensions.width;
  return (
    <View style={styles.container}>
       <View style={styles.Image}>
       <Image style={{height: '100%', width: imageWidth}} source={require('../../assets/logoImage.png')} />
       </View>
       <View style={styles.bar}>
          <Image style={{width: '100%', height: "100%"}} source={require('../../assets/bar.png')} />
       </View>
       <View style={styles.button}>
          <Buttons press={()=>navigation.navigate('SignIn')} textColor={"#27E20C"} background={"white"} content={"Get Started"} border={0} borderColor={"red"} pd={10} size={20} mH={20} br={10} />
       </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
   container: {
      flex: 1,
      // backgroundColor: '#27E20C'
   },
   Image: {
      flex: 1,
   },
   bar: {
      flex: .1,
      marginTop: -30
   },
   button: {
      flex: 1,
      backgroundColor: '#27E20C',
      alignItems: 'center',
      justifyContent: 'center',
   }
})