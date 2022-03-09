import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Buttons = ({press,background, border, borderColor, content, pd, textColor, size, mH, br})=>{
  return (
    <View>
      <TouchableOpacity onPress={press} style={{backgroundColor: background, borderWidth: border, borderColor: borderColor, padding: pd, borderRadius: br}}>
         <Text style={{color:textColor, fontWeight: 'bold', fontSize: size, marginHorizontal: mH}}>{content}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({})

export default Buttons;