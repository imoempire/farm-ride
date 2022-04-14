import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Touchable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";


const locations = ["Accra", "Kumasi", "Takoradi", "Kasoa", "Madina", "Danfa"];
const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;
const  Picker = (props) => {
  const newLoc = [
    { name: "Accra", latitude: 5.637037, longitude: -0.156298 },
    { name: "Kumasi", latitude: 5.640883, longitude: -0.156598 },
    { name: "Takoradi", latitude: 5.642571, longitude: -0.155665 },
    { name: "Kasoa", latitude: 5.640883, longitude: -0.156598 },
    { name: "Danfa", latitude: 5.640883, longitude: -0.156598 },
  ];

  const itemPress = (option) => {
    props.changeModalState(false);
    props.setData(option);
    props.setShow(1)
  };

  const locs = newLoc.map((item, index) => {
    return (
      <TouchableOpacity
        onPress={() => itemPress(item)}
        style={styles.option}
        key={index}
      >
        <Text style={styles.texts}>{item.name}</Text>
      </TouchableOpacity>
    );
  });

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.changeModalState(false)}
    >
      <View style={[styles.modal, { width: WIDTH - 20, height: HEIGHT / 2 }]}>
        <ScrollView>{locs}</ScrollView>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    backgroundColor: "#27E20C",
    borderRadius: 10,
  },
  option: {
    alignItems: "flex-start",
  },
  texts: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export { Picker };
