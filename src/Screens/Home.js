import {
  Dimensions,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { parameters } from "../Data/styles";
import Swiper from "react-native-swiper";
import TopBar from "../Component/TopBar/TopBar";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../Data/mapStyle";
import { carsAround } from '../Data/data'

// AIzaSyBBKtnI-GKkr1fAp9nmrhcenty_wkG1deE

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const data = [
  { name: "Now", id: "1" },
  { name: "Later", id: "2" },
];

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <TopBar Title={"Welcome"} background={"white"} TitleColor={"#27E20C"} />
      </View>
      <View style={styles.slide}>
        <Swiper autoplay={true}>
          <View style={styles.sider1}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/arrive.jpg")}
            />
          </View>
          <View style={styles.sider2}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/put.jpg")}
            />
          </View>
          <View style={styles.sider3}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/phone.png")}
            />
          </View>
          <View style={styles.sider4}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={require("../../assets/phone.png")}
            />
          </View>
        </Swiper>
      </View>
      <View style={styles.buttons}>
        <View style={[styles.btn, styles.shadow]}>
          <Text>Now</Text>
        </View>
        <View style={[styles.btn, styles.shadow]}>
          <Text>Later</Text>
        </View>
      </View>
      <View style={styles.mapView}>
        <Text style={styles.Text}>Around You</Text>
        <View style={styles.map}>
          <MapView
            style={styles.mapStyle}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
          ></MapView>
        </View>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
    backgroundColor: "#e1e8ee",
  },
  Image: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  slide: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  swip: {
    width: "100%",
  },
  sider1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  sider2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sider3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sider4: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flex: 0.4,
    justifyContent: "center",
    flexDirection: "row",
  },
  btn: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "70%",
    width: (WIDTH * 40) / 100,
    marginVertical: 20,
    justifyContent: "center",
    marginHorizontal: 10,
    alignItems: "center",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 10,
  },
  mapView: {
    flex: 1,
    marginHorizontal: 20,
  },
  Text: {
    backgroundColor: "#27E20C",
    padding: 5,
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    borderRadius: 5,
  },
  map: {
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    height: 150,
    marginVertical: 0,
    width: WIDTH * 0.92,
  },
});
