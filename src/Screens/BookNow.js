import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React,{useState,useContext,useEffect,useRef,useMemo,useCallback} from 'react'
import Buttons from "../Component/Button/Buttons";
import TopBar from "../Component/TopBar/TopBar";
import { Ionicons } from "@expo/vector-icons";
import { parameters } from "../Data/styles";
import { DestinationContext, OriginContext } from "../contexts/contexts";
import MapComponent from "../Component/MapComponent";
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet'

const BookNow = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tabs")}
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            height: 40,
            width: 40,
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TopBar
          Title={"BOOK NOW"}
          background={"white"}
          TitleColor={"#27E20C"}
          mH={10}
        />
      </View>
      <View style={styles.Form}>
        <View style={styles.form}>
          <View style={styles.form}>
            <View style={styles.Label}>
              <Text>Recipient's Phone</Text>
              <TextInput style={styles.Input} placeholder="Phone" />
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate("Request")}
              style={styles.Label}
            >
              <Text>Pick-Up & Drop Off locations</Text>
              <View style={styles.destinations}>
              <Text style={{}}>Pick-Up location</Text>
              </View>
            </TouchableOpacity>
            <View style={{ alignItems: "center", marginVertical: 20 }}>
              <Buttons
                textColor={"white"}
                background={"#27E20C"}
                content={"Next"}
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

export default BookNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27E20C",
    paddingTop: parameters.statusBarHeight,
  },
  Image: {
    flex: 0.3,
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
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
  destinations: {
    justifyContent: "center",
    borderWidth: 2,
    height: 45,
    borderRadius: 20,
    paddingLeft: 20,
    borderColor: "#27E20C",
  },
});
