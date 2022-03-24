import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppInput from "../Component/Form/AppInput";
import Customformik from "../Component/Form/CustomFormik";
import FormContainer from "../Component/Form/FormContainer";
import SubmitButton from "../Component/Form/SubmitButton";
import * as yup from "yup";
import { forgetPassword } from "../Component/api/auth";
import { updateNotifications } from "../Component/Helper";
import { parameters } from "../Data/styles";
import Appnotification from "../Component/AppNotification";

const initialValues = {
  email: "",
};

const validationSchema = yup.object().shape({
  email: yup.string().email().required("Email is Missing"),
});

const Forgetpassword = ({ navigation }) => {
  const [message, setMessage] = useState({
    text: "",
    type: "",
  }); 

  const handleForget = async (values, formikActions) => {
    const res = await forgetPassword(values.email);
    formikActions.setSubmitting(false);

    if (!res.success) return updateNotifications(setMessage, res.error);
    formikActions.resetForm(true);
    updateNotifications(setMessage, res.message, 'success');
  };

  return (
    <View style={styles.container}>
      {message.text ? (
        <Appnotification type={message.type} text={message.text} />
      ) : null}

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
    paddingTop: parameters.statusBarHeight,
  },
});

export default Forgetpassword;
