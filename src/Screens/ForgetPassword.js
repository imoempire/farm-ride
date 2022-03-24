import React from "react";
import { View, StyleSheet, Text } from "react-native";
import AppInput from "../Component/Form/AppInput";
import Customformik from "../Component/Form/CustomFormik";
import FormContainer from "../Component/Form/FormContainer";
import SubmitButton from "../Component/Form/SubmitButton";
import * as yup from "yup";

const initialValues = {
  email: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email is Missing"),
});

const Forgetpassword = ({ navigation }) => {
  const handleForget = (values, formikActions) => {
    console.log(values, formikActions);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: "red" }}></View>
      <View style={{ flex: 1 }}>
        <FormContainer>
          <Customformik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleForget}
          >
            <AppInput name="email" placeholder="example@gmail.com" />
            <SubmitButton title="Sign Up" />
          </Customformik>
        </FormContainer>
      </View>
      <View style={{ flex: 1, backgroundColor: "red" }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Forgetpassword;
