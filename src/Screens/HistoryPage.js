import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopBar from '../Component/TopBar/TopBar'

const HistoryPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Bar}>
        <TopBar Title={'History'} background={'#27E20C'} TitleColor={'white'}  />
      </View>
      <View style={styles.History}>
        <Text>No Record Found</Text>
      </View>
    </View>
  )
}

export default HistoryPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e8ee'
  },
  Bar: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  History: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
})