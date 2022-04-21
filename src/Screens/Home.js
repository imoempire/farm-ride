import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect, useRef, useContext } from "react";
import { parameters, appColor } from "../Data/styles";
import Swiper from "react-native-swiper";
import TopBar from "../Component/TopBar/TopBar";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { mapStyle } from "../Data/mapStyle";
import { carsAround } from "../Data/data";
import * as Location from "expo-location";
import { HistoryContext } from "../contexts/contexts";

// AIzaSyBBKtnI-GKkr1fAp9nmrhcenty_wkG1deE

const HEIGHT = Dimensions.get("window").height;
const WIDTH = Dimensions.get("window").width;

const data = [
  { name: "Now", id: "1" },
  { name: "Later", id: "2" },
];

const Home = ({ navigation }) => {
  const [latlng, setLatLng] = useState({});
  const { city, setCity } = useContext(HistoryContext);

  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === "granted") {
      const permission = await askPermission();
      return permission;
    }
    return true;
  };

  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync();
    return permission.status === "granted";
  };

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      setLatLng({ latitude: latitude, longitude: longitude });
    } catch (err) {
      console.log(err);
    }
  };

  const [locationName, setLocationName] = useState();

  const locName = async () => {
    const name = await Location.reverseGeocodeAsync({
      latitude: latlng.latitude,
      longitude: latlng.longitude,
    });

    let city;
    name.find((p) => {
      city = p.city;
      setCity(p.city);
    });
    console.log(city);
  };

  const _map = useRef(1);

  useEffect(() => {
    checkPermission();
    getLocation();
    
  }, []);

  useEffect(() => {
    locName();
  }, [latlng]);

  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <TopBar Title={"Welcome"} background={appColor} TitleColor={'white'} />
      </View>
      <View style={styles.slide}>
        <Swiper autoplay={true} autoplayTimeout={4}>
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
              source={require("../../assets/truck.jpg")}
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
        <TouchableOpacity
          onPress={() => navigation.navigate("BookNow")}
          style={[styles.btn, styles.shadow]}
        >
          <Text>Pick-Up</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("BookLate")}
          style={[styles.btn, styles.shadow]}
        >
          <Text>Pick-Up & Sell</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.mapView}>
        <Text style={styles.Text}>Around You</Text>
        <View style={styles.map}>
          <MapView
            ref={_map}
            style={styles.mapStyle}
            provider={PROVIDER_GOOGLE}
            customMapStyle={mapStyle}
            showsUserLocation={true}
            followsUserLocation={true}
            scrollEnabled={true}
            zoomControlEnabled={true}
            initialRegion={{
              ...carsAround[0],
              latitudeDelta: 0.008,
              longitudeDelta: 0.008,
            }}
          >
            {carsAround.map((item, index) => (
              <MapView.Marker coordinate={item} key={index.toString()}>
                <Image
                  source={require("../../assets/pick3D.png")}
                  style={styles.carsAround}
                  resizeMode="cover"
                />
              </MapView.Marker>
            ))}
          </MapView>
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
    backgroundColor: "white",
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
    borderWidth: 2,
    borderColor: appColor,
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 10,
  },
  mapView: {
    flex: 1,
    marginHorizontal: 20,
  },
  Text: {
    backgroundColor: appColor,
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
    height: 200,
    marginVertical: 0,
    width: WIDTH * 0.92,
  },
  carsAround: {
    width: 60,
    height: 50,
  },
});
