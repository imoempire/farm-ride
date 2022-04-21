import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import {
  DestinationContext,
  HistoryContext,
  OriginContext,
} from "../contexts/contexts";
import MapComponent from "../Component/MapComponent";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { appColor, parameters } from "../Data/styles";
import { rideData } from "../Data/data";
import Buttons from "../Component/Button/Buttons";
import getDirections from "react-native-google-maps-directions";
import * as Location from "expo-location";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function RequestDone({ navigation, route }) {
  const stateofIndex = route.params.state;
  // let stateofIndex = 0;
  // const data = route.params.location;
  const { origin, setOrigin } = useContext(OriginContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const { history, setHistory, city } = useContext(HistoryContext);
  console.log(city);
  const [userDestination, setUserDestination] = useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
  });

  const [locationName, setLocationName] = useState();

  const bottomsheet1 = useRef(1);
  const snapPoints1 = useMemo(() => ["15%", "60%"], []);
  const handleSheetChange1 = useCallback((index) => {}, []);

  const [latlng, setLatLng] = useState({});

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
        coords: { latitude, longitude, name },
      } = await Location.getCurrentPositionAsync();
      setLatLng({ latitude: latitude, longitude: longitude });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    checkPermission();
    getLocation();
  }, []);

  const [userOrigin, setUserOrigin] = useState({});

  useEffect(() => {
    setUserOrigin({
      latitude: latlng.latitude,
      longitude: latlng.longitude,
      name: origin.name,
    });
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude,
      name: destination.name,
    });
  }, [origin, destination]);

  const renderFlatListItems = useCallback(
    ({ item }) => (
      <View>
        <View style={styles.view10}>
          <View style={styles.view11}>
            <MaterialCommunityIcons
              name="clock-time-four"
              size={20}
              color="white"
            />
          </View>
          <View>
            <Text style={{ fontSize: 15, color: "grey" }}>{item.street}</Text>
            <Text style={{ color: "grey" }}>{item.contact}</Text>
          </View>
        </View>
      </View>
    ),
    []
  );

  const addHistory = () => {
    setHistory([...history, { city, destination }]);
  };

  const handleGetDirections = () => {
    const data = {
      source: {
        latitude: "",
        longitude: "",
      },
      destination: {
        latitude: userDestination.latitude,
        longitude: userDestination.longitude,
      },
      params: [
        {
          key: "travelmode",
          value: "driving", // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate", // this instantly initializes navigation using the given travel mode
        },
      ],
      // waypoints: [
      //   {
      //     latitude: 5.637037,
      //     longitude: -0.156298,
      //   },
      //   {
      //     latitude: 5.640883,
      //     longitude: -0.156598,
      //   },
      //   {
      //     latitude: 5.642571,
      //     longitude: -0.155665,
      //   },
      // ],
    };
    addHistory();
    getDirections(data);
  };

  return (
    <View style={styles.container}>
      {/* direction */}
      <View style={styles.direct}>
        <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.view1}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.directbtn}>
          <TouchableOpacity>
            <View style={styles.view6}>
              <Text style={styles.text1}>{city}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Destination", {
                setData: setUserDestination,
              })
            }
          >
            <View style={styles.view6}>
              <Text style={styles.text1}>To {destination.name} </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* Map */}
      <View style={styles.Map}>
        {stateofIndex === 0 ? (
          <>
            <MapComponent
              userOrigin={userOrigin}
              userDestination={userDestination}
            />
            <BottomSheet
              ref={bottomsheet1}
              index={stateofIndex}
              snapPoints={snapPoints1}
              onChange={handleSheetChange1}
            >
              <BottomSheetFlatList
                keyboardShouldPersistTaps="always"
                data={rideData}
                keyExtractor={(item) => item.id}
                renderItem={renderFlatListItems}
                contentContainerStyle={styles.contentContainer}
                ListHeaderComponent={
                  <View style={styles.view10}>
                    <View style={styles.view11}>
                      <MaterialIcons name="star-rate" size={24} color="black" />
                    </View>
                    <View>
                      <Text style={styles.text9}>Our Depot to Sell</Text>
                    </View>
                  </View>
                }
                ListFooterComponent={
                  <View>
                    <View style={styles.view10}>
                      <View style={styles.view11}>
                        <MaterialCommunityIcons
                          name="map-marker"
                          size={24}
                          color="black"
                        />
                      </View>
                      <View>
                        <Text style={styles.text9}>Set location on map</Text>
                      </View>
                    </View>
                    <View style={styles.view10}>
                      <View style={styles.view11}>
                        <MaterialCommunityIcons
                          name="skip-next"
                          size={24}
                          color="black"
                        />
                      </View>
                      <View>
                        <Text style={styles.text9}>
                          Enter destination later
                        </Text>
                      </View>
                    </View>
                  </View>
                }
              />
            </BottomSheet>
          </>
        ) : (
          <View style={{ flex: 1 }}>
            <View style={{ flex: 1, position: "relative" }}>
              <View>
                <MapComponent
                  userOrigin={userOrigin}
                  userDestination={userDestination}
                />
              </View>
              <View style={styles.buttons}>
                <View
                  style={[
                    { flexDirection: "row", marginHorizontal: 20 },
                    styles.shadow,
                  ]}
                >
                  <Image
                    style={{ borderRadius: 50, width: 60, height: 60 }}
                    source={require("../../assets/pro.png")}
                  />
                  <View style={{ marginHorizontal: 10 }}>
                    <Text style={{ fontWeight: "bold" }}>
                      Your Pick-Up Driver
                    </Text>
                    <Text>Name: James Bond</Text>
                    <Text>Car Number: GR 3451</Text>
                  </View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginVertical: 20,
                    }}
                  >
                    <Buttons
                      press={() => handleGetDirections()}
                      textColor={'white'}
                      background={appColor}
                      content={"START"}
                      border={2}
                      borderColor={appColor}
                      pd={5}
                      size={20}
                      mH={10}
                      br={10}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
  direct: {
    flex: 0.25,
    flexDirection: "row",
    backgroundColor: appColor,
    justifyContent: "center",
  },
  directbtn: {
    height: SCREEN_HEIGHT * 0.091,
    alignItems: "center",
    marginHorizontal: 10,
  },
  view1: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2,
  },
  Map: {
    flex: 1,
    zIndex: 1,
    elevation: 1,
  },
  buttons: {
    flex: 0.9,
    justifyContent: "center",
    // alignItems: "center",
    zIndex: 1, // works on ios
    elevation: 2, // works on android
    marginTop: -100,
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
  },
  view3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: "white",
    zIndex: 10,
  },
  view5: {
    backgroundColor: "#F2f9f9",
    width: SCREEN_WIDTH * 0.7,
    height: 40,
    justifyContent: "center",
    marginTop: 10,
  },
  view6: {
    backgroundColor: "#eeeeee",
    width: SCREEN_WIDTH * 0.7,
    height: 40,
    justifyContent: "center",
    marginTop: 10,
    paddingLeft: 0,
  },
  text1: {
    marginLeft: 10,
    fontSize: 16,
    color: "#43484d",
  },
  view8: {
    marginLeft: 10,
  },
  view10: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
    paddingVertical: 10,
    borderBottomColor: "#e1e8ee",
    borderBottomWidth: 1,
    paddingHorizontal: 15,
  },
  view11: {
    backgroundColor: "#bebebe",
    height: 30,
    width: 30,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
    marginTop: 15,
  },

  contentContainer: {
    backgroundColor: "white",
  },

  view12: {
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#bdc6cf",
  },

  text2: {
    fontSize: 18,
    color: "#43484d",
  },
  text3: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    marginRight: 5,
  },

  text4: { color: "#5e6977", marginTop: 4 },

  view13: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
  },

  button1: {
    height: 40,
    width: 100,
    backgroundColor: "#eeeeee",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },

  button2: {
    height: 50,
    backgroundColor: "#d6d6d6",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginHorizontal: 30,
  },

  button1Text: {
    fontSize: 17,
    marginTop: -2,
    color: "black",
  },

  button2Text: {
    color: "white",
    fontSize: 23,
    marginTop: -2,
  },

  view14: {
    alignItems: "center",
    flex: 5,
    flexDirection: "row",
  },
  view15: {
    backgroundColor: "#eeeeee",
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },

  view16: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  text5: {
    fontSize: 12,
    color: "black",
    marginLeft: 3,
    fontWeight: "bold",
    paddingBottom: 1,
  },

  text9: { fontSize: 15, color: "#43484d" },

  flatlist: {
    marginTop: 20,
  },

  text10: { color: "#5e6977", paddingLeft: 10 },
});
