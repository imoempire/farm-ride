import { View, Text, Dimensions, Touchable, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'

const locations = ['Accra', 'Kumasi', 'Takoradi', "Kasoa", 'Madina', 'Danfa']
const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get(window).width
const Picker =(props)=>{

  const itemPress = (option)=>{
     props.changeModalState(false);
     props.setData(option)
  }
  const destinations = locations.map((item, index)=>{
    return ( 
      <TouchableOpacity 
      onPress={()=>itemPress(item)}
      style={styles.option} key={index}>
        <Text style={styles.texts}>
          {item}
        </Text>
      </TouchableOpacity>
    )
  })
  return (
    <TouchableOpacity style={styles.container} onPress={()=> props.changeModalState(false)}>
      <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT/2}]}>
        <ScrollView>
          {destinations}
        </ScrollView>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: 'white',
    borderRadius: 10
  },
  option: {
    alignItems: 'flex-start',
    
  },
  text: {
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export {Picker}