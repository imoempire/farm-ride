import { TouchableOpacity, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import Buttons from "../Component/Button/Buttons";
import TopBar from "../Component/TopBar/TopBar";
import DatePicker from 'react-native-datepicker'
import { Ionicons } from '@expo/vector-icons';
import { appColor } from "../Data/styles";

const BookLate = ({navigation}) => {
   const [date, setDate] = useState()
  return (
    <View style={styles.container}>
     <View style={styles.Image}>
        <TouchableOpacity onPress={()=>navigation.navigate('Tabs')} style={{backgroundColor: 'white', borderRadius: 20, height: 40, width: 40,justifyContent:'center'}}>
          <View style={{ alignItems: "center", }}>
          <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TopBar Title={"BOOK NOW"} background={"white"} TitleColor={appColor} mH={10} />
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
            <View style={styles.phoneDate}>
              <View style={[styles.Label, { width: "50%" }]}>
                <Text>Phone</Text>
                <TextInput
                  keyboardType="number-pad"
                  style={styles.Input}
                  placeholder="Phone"
                />
              </View>
              <View
                style={[styles.Label, { width: "40%", marginHorizontal: 10 }]}
              >
                <Text>Date</Text>
                <DatePicker
                  style={{ width: 150}}
                  date={date}
                  mode="date"
                  placeholder="select date"
                  format="YYYY-MM-DD"
                  confirmBtnText="Confirm"
                  cancelBtnText="Cancel"
                  customStyles={{
                    dateIcon: {
                      position: "absolute",
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 30,
                    },
                  }}
                />
              </View>
            </View>
            <View style={{ alignItems: "center", marginVertical: 20 }}>
              <Buttons
                textColor={"white"}
                background={appColor}
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

export default BookLate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor,
  },
  Image: {
    flex: 0.3,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: 'space-between',
    marginHorizontal: 20,
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
  phoneDate: {
    flexDirection: "row",
  },
  Input: {
    borderWidth: 2,
    height: 45,
    borderRadius: 20,
    paddingLeft: 20,
    borderColor: appColor,
  },
});
