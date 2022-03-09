import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Buttons from "../Component/Button/Buttons";
import TopBar from "../Component/TopBar/TopBar";

const BookNow = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <TopBar Title={"BOOK NOW"} background={"white"} TitleColor={"#27E20C"} />
      </View>
      <View style={styles.Form}>
      <View style={styles.form}>
        <View style={styles.form}>
          <View style={styles.Label}>
            <Text>Pick-Up location</Text>
            <TextInput style={styles.Input} placeholder="Pick-Up location" />
          </View>
          <View style={styles.Label}>
            <Text>Drop Off location</Text>
            <TextInput style={styles.Input} placeholder="Drop Off location" />
          </View>
          <View style={styles.Label}>
            <Text>Who to Receive</Text>
            <TextInput style={styles.Input} placeholder="Name" />
          </View>
          <View style={styles.Label}>
            <Text>Phone</Text>
            <TextInput style={styles.Input} placeholder="Phone" />
          </View>
          <View style={{ alignItems: "center", marginVertical: 20 }}>
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
      {/*  */}
    </View>
  );
};

export default BookNow;

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
   marginVertical: 10,
  },
  Label: {
    marginVertical: 10,
  },
  Input: {
    borderWidth: 2,
    height: 45,
    borderRadius: 20,
    paddingLeft: 20,
    borderColor: "#27E20C",
  },
});
