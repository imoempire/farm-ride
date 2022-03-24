import React, { useRef, useEffect } from "react";
import { Text, StyleSheet, Animated } from "react-native";

const Appnotification = ({ type, text }) => {
  const height = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(height, {
      toValue: 40,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);
  const backgroundColor = type === "error" ? "red" : "green";
  return (
    <Animated.View style={[styles.container, { height, backgroundColor }]}>
      <Text style={{color: 'white', fontSize: 16 }}>{text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});

export default Appnotification;
