import { useFormikContext } from "formik";
import React from "react";
import { Text, TextInput, Dimensions, StyleSheet } from "react-native";

const AppInput = ({ name,  placeholder, ...rest }) => {
  
  const { errors, values, touched, handleBlur, handleChange }=useFormikContext()

  const value = values[name]
  const error = errors[name]

  const isInputTouched = touched[name]

   return (
    <>
    {error && isInputTouched ? <Text style={styles.Errors}>{error}</Text>: null}
    <TextInput
      value={value}
      placeholder={placeholder}
      onChangeText={handleChange(name)}
      onBlur={handleBlur(name)}
      style={styles.Input}
      {...rest}
    /> 
    </>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  Input: {
    width: width - 40,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 2,
    height: 50,
    borderRadius: 20,
    paddingLeft: 20,
    borderColor: "#27E20C",
  },
  Errors: {
   color: "red",
   marginHorizontal: 25
 }
});

export default AppInput;
