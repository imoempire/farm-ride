import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomTabs from '../Navigation/BottomTabs'

const Tabs = () => {
  return (
    <View style={styles.container}> 
      <BottomTabs/>
    </View>
  )
}

export default Tabs

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
})