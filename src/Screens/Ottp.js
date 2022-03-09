import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Buttons from "../Component/Button/Buttons";

const Ottp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <Image source={require("../../assets/Logo1.png")} />
      </View>
      <View style={styles.Form}>
      <View style={styles.form}>
        <View style={styles.form}>
            <View style={{alignItems: 'center', marginVertical: 10}}>
               <Text style={styles.Text}>OTTP CODE</Text>
            </View>
          <View style={styles.Label}>
            <TextInput style={styles.Input} placeholder="Email" />
          </View>
          <View style={{ alignItems: "center", marginVertical: 10 }}>
            <Buttons
              textColor={"white"}
              background={"#27E20C"}
              content={"SUBMIT"}
              border={0}
              borderColor={"red"}
              pd={10}
              size={20}
              mH={20}
              br={10}
              />
          </View>
        </View>
      </View>
   </View>
    </View>
  )
}

export default Ottp

const styles = StyleSheet.create({
   container: {
      flex: 1,
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
     form: {
     marginHorizontal: 20,
     justifyContent: "center",
    },
    Text: {
       fontWeight: "bold",
       fontSize: 20,
       alignItems: "center"
      },
      Label: {
         marginVertical: 20,
    },
    Input: {
      borderWidth: 2,
      height: 50,
      borderRadius: 20,
      paddingLeft: 20,
      borderColor: "#27E20C",
    },
})