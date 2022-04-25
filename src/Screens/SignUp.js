import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Buttons from "../Component/Button/Buttons";
import { appColor, parameters } from "../Data/styles";

// Forms
import { isValidEmail, isValidObjField, updateError } from "../utils/methods";
import FormContainer from "../Component/Form/FormContainer";
import AppInput from "../Component/Form/AppInput";
import SubmitButton from "../Component/Form/SubmitButton";
import Customformik from "../Component/Form/CustomFormik";
import { StackActions } from "@react-navigation/native";
import * as Yup from "yup";
import client from "../Component/api/client";
import { Formik } from "formik";
import { useLogin } from "../contexts/LoginProvider";

const validationSchema = Yup.object({
  fullname: Yup.string()
    .trim()
    .min(3, "Invalid name!")
    .required("Name is required!"),
  email: Yup.string().email("Invalid email!").required("Email is required!"),
  password: Yup.string()
    .trim()
    .min(8, "Password is too short!")
    .required("Password is required!"),
  confirmPassword: Yup.string().equals(
    [Yup.ref("password"), null],
    "Password does not match!"
  ),
});

const SignUp = ({ navigation }) => {
  const userInfo = {
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [error, setError] = useState("");
  const { fullname, email, password, confirmPassword } = userInfo;
  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
  const {setIsLoggedIn} = useLogin()

  const isValidForm = () => {
    // we will accept only if all of the fields have value
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);
    // if valid name with 3 or more characters
    if (!fullname.trim() || fullname.length < 3)
      return updateError("Invalid name!", setError);
    // only valid email id is allowed
    if (!isValidEmail(email)) return updateError("Invalid email!", setError);
    // password must have 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError("Password is less then 8 characters!", setError);
    // password and confirm password must be the same
    if (password !== confirmPassword)
      return updateError("Password does not match!", setError);

    return true;
  };

  const signUp = async (values, formikActions) => {
   try {
    const res = await client.post("/create-user", { ...values });
   
    if (res.data.success) {
      const signInRes = await client.post('/sign-in', {
        email: values.email,
        password: values.password,
      });
      if (signInRes.data.success) {
        navigation.dispatch(
          StackActions.replace('', {
            token: signInRes.data.token,
          })
        );
        setIsLoggedIn(true)
      }
    }

    formikActions.resetForm();
    formikActions.setSubmitting(false);
   } catch (error) {
      console.log(error);
   }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <Image source={require("../../assets/Logo1.png")} />
      </View>
      <View style={styles.Form}>
        <View style={styles.forms}>
          <View style={styles.Title}>
            <Text>Sign-Up Form</Text>
          </View>
          <FormContainer>
            <Formik
              initialValues={userInfo}
              validationSchema={validationSchema}
              onSubmit={signUp}
            >
              {({
                values,
                handleChange,
                errors,
                touched,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => {
                const { fullname, email, password, confirmPassword } = values;
                return (
                  <>
                    <AppInput
                      value={fullname}
                      error={touched.fullname && errors.fullname}
                      onChangeText={handleChange("fullname")}
                      onBlur={handleBlur("fullname")}
                      label="Full Name"
                      placeholder="John Smith"
                    />
                    <AppInput
                      value={email}
                      error={touched.email && errors.email}
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      autoCapitalize="none"
                      label="Email"
                      placeholder="example@email.com"
                    />
                    <AppInput
                      value={password}
                      error={touched.password && errors.password}
                      onChangeText={handleChange("password")}
                      onBlur={handleBlur("password")}
                      autoCapitalize="none"
                      secureTextEntry
                      label="Password"
                      placeholder="********"
                    />
                    <AppInput
                      error={touched.confirmPassword && errors.confirmPassword}
                      onChangeText={handleChange("confirmPassword")}
                      onBlur={handleBlur("confirmPassword")}
                      autoCapitalize="none"
                      secureTextEntry
                      label="Confirm Password"
                      placeholder="********"
                    />
                    <SubmitButton
                      submitting={isSubmitting}
                      onPress={handleSubmit}
                      title="Sign up"
                    />
                  </>
                );
              }}
            </Formik>
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
    backgroundColor: appColor,
    paddingTop: parameters.statusBarHeight,
  },
  Image: {
    flex: 0.2,
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
