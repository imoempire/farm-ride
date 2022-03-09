import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Buttons from "../Component/Button/Buttons";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <Image source={require("../../assets/Logo1.png")} />
      </View>
      <View style={styles.Form}>
      <View style={styles.form}>
        <View style={styles.form}>
          <View style={styles.Label}>
            <Text>Email</Text>
            <TextInput style={styles.Input} placeholder="Email" />
          </View>
          <View style={styles.Label}>
            <Text>Phone</Text>
            <TextInput style={styles.Input} placeholder="+233" />
          </View>
          <View style={styles.Label}>
            <Text>Password</Text>
            <TextInput style={styles.Input} placeholder="Password" />
          </View>
          <View style={{ alignItems: "center", marginVertical: 20 }}>
            <Buttons
              press={()=>navigation.navigate('Home')}
              textColor={"white"}
              background={"#27E20C"}
              content={"Login"}
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
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27E20C",
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
   form: {
   marginHorizontal: 20,
   marginVertical: 10
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
});
