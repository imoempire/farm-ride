import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
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
import { appColor, parameters } from "../Data/styles";
import { StackActions } from "@react-navigation/native";
import { useLogin } from "../contexts/LoginProvider";
import { Formik } from "formik";
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";
import client from "../Component/api/client";


const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email is Missing"),
  password: yup
    .string()
    .trim()
    .min(8, "Password is too short")
    .required("Password is Required"),
});

const SignIn = ({ navigation }) => {
  const { setIsLoggedIn, setProfile } = useLogin();
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const { email, password } = userInfo;
  
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);

    if (!isValidEmail(email)) return updateError("Invalid email!", setError);

    if (!password.trim() || password.length < 8)
      return updateError("Password is too short!", setError);

    return true;
  };

  const submitForm = async () => {
    console.log(userInfo);
    if (isValidForm()) {
      try {
        const res = await client.post("/sign-in", { ...userInfo });
        if (res.data.success) {
          setUserInfo({ email: "", password: "" });
          setProfile(res.data.user);
          setIsLoggedIn(true);
        }

        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={{ backgroundColor: 'red', color: "white", fontSize: 18, textAlign: "center" }}>
          {error}
        </Text>
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
            <AppInput
              value={email}
              onChangeText={(value) => handleOnChangeText(value, "email")}
              label="Email"
              placeholder="example@email.com"
              autoCapitalize="none"
              />
            <AppInput
              value={password}
              onChangeText={(value) => handleOnChangeText(value, "password")}
              label="Password"
              placeholder="********"
              autoCapitalize="none"
              secureTextEntry
            />
            <SubmitButton onPress={submitForm} title="Login" />
            <TouchableOpacity onPress={() => navigation.navigate("Forget")}>
              <Text style={styles.Forget}>Forget Password ?</Text>
            </TouchableOpacity>
          </FormContainer>
        </View>
        <View style={styles.options}>
          <Buttons
            press={() => navigation.navigate("Tabs")}
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
    backgroundColor: appColor,
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
