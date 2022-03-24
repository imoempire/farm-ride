import React from 'react';
import {StyleSheet, KeyboardAvoidingView, ScrollView, Dimensions } from 'react-native';

const FormContainer = ({children}) => {
   return (
      <KeyboardAvoidingView style={styles.container}>
         <ScrollView showsVerticalScrollIndicator={false}>
            {children}
         </ScrollView>
      </KeyboardAvoidingView>
   );
};
const {height} = Dimensions.get('window')

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }
})

export default FormContainer;
