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
    { name: "East Legon", latitude: 5.634150, longitude: -0.171150 },
    { name: "Parsnip", latitude: 5.643775, longitude: -0.154485 },
    { name: "Takoradi", latitude: 4.904203, longitude: -1.759872 },
    { name: "Kumasi", latitude: 6.700071, longitude:  -1.630783 },
    { name: "ADC", latitude: 	5.565042, longitude: -0.22233836 },
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
    backgroundColor: "transparent",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#27E20C",
  },
  option: {
    alignItems: "flex-start",
  },
  texts: {
    margin: 20,
    fontSize: 20,
    fontWeight: "bold",
    color: "#27E20C",
  },
});

export { Picker };
