import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const SubmitButton = ({ title, submitting, onPress }) => {
  const backgroundColor = submitting ? "green" : "#27E20C";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}
    >
      <Text style={styles.btn}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  btn: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default SubmitButton;
