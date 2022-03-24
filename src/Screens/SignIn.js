import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState} from "react";
import Buttons from "../Component/Button/Buttons";
import FormContainer from "../Component/Form/FormContainer";
import Customformik from "../Component/Form/CustomFormik";
import * as yup from "yup";
import AppInput from "../Component/Form/AppInput";
import SubmitButton from "../Component/Form/SubmitButton";
import { signIn } from "../Component/api/auth";
import { updateNotifications } from "../Component/Helper";
import Appnotification from "../Component/AppNotification";
// import client from '../Component/api/client'
// import axios from 'axios'
import {parameters} from '../Data/styles'
import { StackActions } from "@react-navigation/native";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email is Missing"),
  password: yup
    .string()
    .trim()
    .min(8, "Password is too short")
    .required("Password is Required"),
});

const SignIn = ({ navigation }) => {
  const [message, setMessage] = useState({
    text: "",
    type: "",
  });

  const handleLogin = async (values, formikActions) => {
    const res = await signIn(values);
    formikActions.setSubmitting(false);

    if (!res.success) return updateNotifications(setMessage, res.error);
    formikActions.resetForm(true);
   //  navigation.dispatch(StackActions.replace('Tabs', 
   //  {profile: res.user}
   //  ))
   const user = res.user;
   navigation.navigate('Tabs', user)
  };
  return (
    <View style={styles.container}>
      {message.text ? (
        <Appnotification type={message.type} text={message.text} />
      ) : null}

      {/* Image */}
      <View style={styles.Image}>
        <Image source={require("../../assets/Logo1.png")} />
      </View>
      {/* Form */}
      <View style={styles.Form}>
        <View style={styles.forms}>
          <View style={styles.Title}>
            <Text>Login Form</Text>
          </View>
          <FormContainer>
            <Customformik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleLogin}
            >
              <AppInput name="email" placeholder="example@gmail.com" />
              <AppInput
                secureTextEntry={true}
                name="password"
                placeholder="*******"
              />
              <SubmitButton title="Login" />
            </Customformik>
            <TouchableOpacity onPress={() => navigation.navigate("Forget")}>
              <Text style={styles.Forget}>Forget Password ?</Text>
            </TouchableOpacity>
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
            <Text style={{ marginHorizontal: 10 }}>No Account Yet ?</Text>
            <Buttons
              press={() => navigation.navigate("SignUp")}
              textColor={"white"}
              background={"blue"}
              content={"Create"}
              border={0}
              borderColor={"red"}
              pd={4}
              size={20}
              mH={30}
              br={5}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27E20C",
    paddingTop: parameters.statusBarHeight,
  },
  Image: {
    flex: 0.5,
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
  Forget: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  options: {
    flex: 0.35,
    marginHorizontal: 50,
    alignItems: "center",
  },
  optionsQuestion: {
    // flexDirection: 'row',
    alignItems: "center",
    marginVertical: 10,
  },
});
