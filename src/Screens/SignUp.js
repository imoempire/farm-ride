import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState} from "react";
import Buttons from "../Component/Button/Buttons";
// import { Formik } from "formik";
import * as yup from "yup";
import FormContainer from "../Component/Form/FormContainer";
import AppInput from "../Component/Form/AppInput";
import SubmitButton from "../Component/Form/SubmitButton";
import Customformik from "../Component/Form/CustomFormik";
import {signUp} from "../Component/api/auth";
import Appnotification from "../Component/AppNotification";
// import axios from 'axios'
import {parameters} from '../Data/styles'
import { updateNotifications } from "../Component/Helper";
import {StackActions} from '@react-navigation/native'

const initialValues = {
  name: "",
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().trim().required("Name is Missing"),
  email: yup.string().email().required("Email is Missing"),
  password: yup
    .string()
    .trim()
    .min(8, "Password is too short")
    .required("Password is Required"),
});

const SignUp = ({ navigation }) => {
  const [message, setMessage] = useState({
    text: '',
    type: ''
  });
  const handleSignUp = async (values, formikActions) => {
    const res = await signUp(values)
      formikActions.setSubmitting(false);
       
      if(!res.success) 
      return updateNotifications(setMessage, res.error); 
     
      formikActions.resetForm(true)
      
      navigation.dispatch(StackActions.replace('Verify', 
      {profile: res.user}
      ))
  };

  return (
    <View style={styles.container}>
{ message.text ? 
      <Appnotification type={message.type} text={message.text}/> : null}

      <View style={styles.Image}>
        <Image source={require("../../assets/Logo1.png")} />
      </View>
      <View style={styles.Form}>
        <View style={styles.forms}>
          <View style={styles.Title}>
            <Text>Sign-Up Form</Text>
          </View>
          <FormContainer>
            <Customformik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSignUp}
            >
              <AppInput name="name" placeholder="Isaac" />
              <AppInput name="email" placeholder="example@gmail.com" />
              <AppInput
                secureTextEntry={true}
                name="password"
                placeholder="*******"
              />
              <SubmitButton title="Sign Up" />
            </Customformik>
          </FormContainer>
        </View>
        <View style={styles.options}>
          <Buttons
            press={() => navigation.navigate("SignUp")}
            textColor={"white"}
            background={"orange"}
            content={"Login With Google"}
            border={0}
            borderColor={"red"}
            pd={4}
            size={20}
            mH={25}
            br={5}
          />
          <View style={styles.optionsQuestion}>
            <Text style={{ marginHorizontal: 10 }}>
              Already have an Account
            </Text>
            <Buttons
              press={() => navigation.navigate("SignIn")}
              textColor={"white"}
              background={"blue"}
              content={"Login"}
              border={0}
              borderColor={"red"}
              pd={3}
              size={20}
              mH={20}
              br={5}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27E20C",
    paddingTop: parameters.statusBarHeight,
  },
  Image: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  Form: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  forms: {
    flex: 1,
  },
  Title: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  options: {
    flex: 0.25,
    marginHorizontal: 50,
    alignItems: "center",
  },
  optionsQuestion: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
});
