import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  FlatList,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import TopBar from "../Component/TopBar/TopBar";
import { card, network } from "../Data/Card";
import { Dropdown } from "react-native-element-dropdown";
import { AntDesign, Entypo } from "@expo/vector-icons";
import Buttons from "../Component/Button/Buttons";
import { appColor } from "../Data/styles";

const Wallet = ({navigation}) => {
  const [net, setNet] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.Bar}>
        <TopBar Title={"Wallet"} background={"white"} TitleColor={appColor} />
      </View>
      <View style={styles.Form}>
        <View style={styles.form}>
          <View style={styles.Card}>
            <Text
              style={{
                marginHorizontal: 10,
                bottom: -10,
                color: "black",
                fontSize: 20,
              }}
            >
              Card
            </Text>
            <FlatList
              horizontal={true}
              data={card}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.card}>
                  <ImageBackground
                    source={item.image}
                    style={{
                      flex: 1,
                      borderRadius: 20,
                      justifyContent: "center",
                      resizeMode: "cover",
                    }}
                  >
                    <View style={{flexDirection: 'row'}}>
                    <View>
                      <Text
                        style={{
                          marginHorizontal: 20,
                          bottom: -10,
                          color: "white",
                          fontSize: 20,
                        }}
                      >
                        {item.type}
                      </Text>
                      <Text
                        style={{
                          marginHorizontal: 20,
                          bottom: -10,
                          color: "white",
                          fontSize: 20,
                        }}
                      >
                        {item.cardNumber}
                      </Text>
                      <Text
                        style={{
                          marginHorizontal: 20,
                          bottom: -10,
                          color: "white",
                          fontSize: 20,
                        }}
                      >
                        ${item.balance}
                      </Text>
                    </View>
                    <Buttons
                      press={() => navigation.navigate("Home")}
                      textColor={"white"}
                      background={appColor}
                      content={`Pay ${"$20"}`}
                      border={0}
                      borderColor={"red"}
                      pd={10}
                      size={10}
                      mH={10}
                      br={10}
                    />
                    </View>
                  </ImageBackground>
                </View>
              )}
            />
          </View>
          <ScrollView style={styles.Momo}>
            <View style={styles.form}>
              <Text
                style={{
                  bottom: -10,
                  color: "black",
                  fontSize: 20,
                }}
              >
                Momo
              </Text>
              <View style={styles.Line1}>
                <Dropdown
                  style={[
                    styles.dropdown,
                    isFocus && { borderColor: "blue" },
                    { width: "40%" },
                  ]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={network}
                  search
                  maxHeight={300}
                  labelField="value"
                  valueField="value"
                  placeholder={!isFocus ? "network" : "..."}
                  searchPlaceholder="Search..."
                  value={net}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item) => {
                    setNet(item.value);
                    setIsFocus(false);
                  }}
                  renderLeftIcon={() => (
                    <Entypo
                      style={styles.icon}
                      color={isFocus ? "blue" : "black"}
                      name="network"
                      size={20}
                    />
                  )}
                />
                <TextInput
                  keyboardType="number-pad"
                  style={[styles.dropdown, { width: "55%" }]}
                  placeholder="Phone"
                />
              </View>
              <View style={styles.Line2}>
                <Buttons
                  press={() => navigation.navigate("Home")}
                  textColor={"white"}
                  background={appColor}
                  content={`Pay ${"$20"}`}
                  border={0}
                  borderColor={"red"}
                  pd={10}
                  size={20}
                  mH={20}
                  br={10}
                />
              </View>
              <View style={styles.Line3}>
              <Buttons
                  press={() => navigation.navigate("Home")}
                  textColor={appColor}
                  background={"white"}
                  content={`Pay Cash ${"$20"}`}
                  border={2}
                  borderColor={appColor}
                  pd={10}
                  size={20}
                  mH={20}
                  br={10}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor,
  },
  Bar: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  Form: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  form: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  Card: {
    flex: 0.6,
    width: "100%",
  },
  card: {
    backgroundColor: "pink",
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    width: 300,
    borderRadius: 20,
  },
  Momo: {
    flex: 1,
    paddingBottom: 40
  },
  Line1: {
    flexDirection: "row",
  },
  Line2: {
    flexDirection: "row",
  },
  Line3: {
    marginVertical: 20,
  },
  dropdown: {
    height: 50,
    borderColor: appColor,
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 15,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});
