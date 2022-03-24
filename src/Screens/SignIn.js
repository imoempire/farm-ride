import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Buttons from '../Component/Button/Buttons'
import FormContainer from '../Component/Form/FormContainer'
import Customformik from '../Component/Form/CustomFormik'
import * as yup from 'yup'
import AppInput from '../Component/Form/AppInput'
import SubmitButton from '../Component/Form/SubmitButton'
import { signIn } from '../Component/api/auth'
import client from '../Component/api/client'


const initialValues = {
   email: "",
   password: "",
 };
 
 const validationSchema = yup.object().shape({
   email: yup.string().email().required("Email is Missing"),
   password: yup.string().trim().min(8, "Password is too short").required('Password is Required'),
 });

const SignIn = ({navigation}) => {
   const handleLogin = async (values, formikActions) => {
      const result = await signIn(values)
      formikActions.setSubmitting(false);
       
      if(!result.success) 
      return console.log(result.error);
      formikActions.resetForm(true)
      console.log(result);
    };
  return (
    <View style={styles.container}>
      {/* Image */}
      <View style={styles.Image}>
      <Image source={require('../../assets/Logo1.png')} />
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
            onSubmit={handleLogin}>
            <AppInput name="email" placeholder="example@gmail.com" />
            <AppInput secureTextEntry={true} name="password" placeholder="*******" />
            <SubmitButton title="Login" />
          </Customformik>
          <TouchableOpacity onPress={()=>navigation.navigate('Forget')}>
          <Text style={styles.Forget}>Forget Password ?</Text>
          </TouchableOpacity>
        </FormContainer>
         </View>
      <View style={styles.options}>
      <Buttons press={()=>navigation.navigate('SignUp')} textColor={"white"} background={"orange"} content={"Login With Google"} border={0} borderColor={"red"} pd={4} size={20} mH={25} br={5}/>
         <View style={styles.optionsQuestion}>
            <Text style={{marginHorizontal: 10}}>No Account Yet ?</Text>
            <Buttons press={()=>navigation.navigate('SignUp')} textColor={"white"} background={"blue"} content={"Create"} border={0} borderColor={"red"} pd={4} size={20} mH={30} br={5}/>
         </View>
      </View>
      </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#27E20C',
   },
   Image: {
      flex: .5,
      alignItems: 'center',
      justifyContent: 'center',
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
    Forget:{
       marginHorizontal: 20,
       marginVertical: 20,

    },
   options: {
      flex: .35,
      marginHorizontal: 50,
      alignItems: 'center',
   },
   optionsQuestion: {
      // flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
   }
})