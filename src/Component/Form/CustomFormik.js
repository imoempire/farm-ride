import { Formik } from "formik";
import React from "react";
import { View, StyleSheet } from "react-native";

const Customformik = ({ children, initialValues, validationSchema, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => {
        return children;
      }}
    </Formik>
  );
};

const styles = StyleSheet.create({});

export default Customformik;
