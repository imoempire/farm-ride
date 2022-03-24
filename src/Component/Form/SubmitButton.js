import { useFormikContext } from "formik";
import React from "react";
import { View, Text, StyleSheet, Pressable, Dimensions } from "react-native";

const SubmitButton = ({ title }) => {
  const { handleSubmit, isSubmitting } = useFormikContext();
  return (
    <Pressable
      onPress={isSubmitting ? null : handleSubmit}
      style={[
        styles.submit,
        { backgroundColor: isSubmitting ? "red" : "#27E20C" },
      ]}
    >
      <Text style={styles.btn}>{title}</Text>
    </Pressable>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  submit: {
    height: 50,
    width: width - 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  btn: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default SubmitButton;
