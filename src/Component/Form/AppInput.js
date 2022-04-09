import { useFormikContext } from "formik";
import React from "react";
import { View, Text, TextInput, Dimensions, StyleSheet } from "react-native";

const AppInput = (props) => {
  const { placeholder, label, error } = props;

  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 1,
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>{label}</Text>
        {error ? (
          <Text style={{ color: "red", fontSize: 11 }}>{error}</Text>
        ) : null}
      </View>
      <TextInput placeholder={placeholder} style={styles.Input} {...props} />
    </>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  Input: {
    marginHorizontal: 20,
    marginVertical: 5,
    borderWidth: 2,
    height: 50,
    borderRadius: 20,
    paddingLeft: 10,
    borderColor: "#27E20C",
  },
});

export default AppInput;
