import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TopBar = ({Title, background, TitleColor, mH }) => {
  return (
    <View style={{width: '90%', marginHorizontal: mH, borderRadius: 10}}>
      <View style={[styles.bar, {backgroundColor: background,}]}>
         <Text style={{color: TitleColor, fontWeight: 'bold', fontSize: 20}}>{Title}</Text>
      </View>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
   bar: {
      alignItems: "center",
      padding: 10,
      borderRadius: 10
   }
})