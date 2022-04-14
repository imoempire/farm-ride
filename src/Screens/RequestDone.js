import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, {
  useState,
  useContext,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { DestinationContext, HistoryContext, OriginContext } from "../contexts/contexts";
import MapComponent from "../Component/MapComponent";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { parameters } from "../Data/styles";
import { rideData } from "../Data/data";
import Buttons from "../Component/Button/Buttons";
import getDirections from "react-native-google-maps-directions";

const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function RequestDone({ navigation, route }) {
  const stateofIndex = route.params.state;
  const data = route.params.location;
  const { origin, setOrigin } = useContext(OriginContext);
  const { destination, setDestination } = useContext(DestinationContext);
  const {from, drop} = useContext(HistoryContext)
  const [userOrigin, setUserOrigin] = useState({
    latitude: origin.latitude,
    longitude: origin.longitude,
  });

  const [userDestination, setUserDestination] = useState({
    latitude: destination.latitude,
    longitude: destination.longitude,
  });

  const bottomsheet1 = useRef(1);
  const snapPoints1 = useMemo(() => ["20%", "50%"], []);
  const handleSheetChange1 = useCallback((index) => {}, []);

  useEffect(() => {
    setUserOrigin({
      latitude: origin.latitude,
      longitude: origin.longitude,
      name: origin.name,
    });
    setUserDestination({
      latitude: destination.latitude,
      longitude: destination.longitude,
      name: destination.name,
    });
  }, [origin, destination]);

  console.log(userDestination);

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
  const handleGetDirections = () => {
    const data = {
      source: {
        latitude: userOrigin.latitude,
        longitude: userOrigin.longitude,
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
      waypoints: [
        {
          latitude: 5.637037,
          longitude: -0.156298,
        },
        {
          latitude: 5.640883,
          longitude: -0.156598,
        },
        {
          latitude: 5.642571,
          longitude: -0.155665,
        },
      ],
    };

    getDirections(data);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.view1}
      >
        <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.view2}>
        <View style={styles.view4}>
          <View>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Destination", {
                  setData: setUserDestination,
                })
              }
            >
              <View style={styles.view6}>
                <Text style={styles.text1}>From where</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
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
                      <Text style={styles.text9}>Enter destination later</Text>
                    </View>
                  </View>
                </View>
              }
            />
          </BottomSheet>
        </>
      ) : (
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 0.1,
              justifyContent: "center",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <Buttons
              press={() => handleGetDirections()}
              textColor={"white"}
              background={"#27E20C"}
              content={"START"}
              border={0}
              borderColor={"red"}
              pd={10}
              size={20}
              mH={20}
              br={10}
            />
          </View>
          <View style={{ flex: 1 }}>
            <MapComponent
              userOrigin={userOrigin}
              userDestination={userDestination}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container1: { flex: 1, paddingTop: parameters.statusBarHeight },

  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
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

  view2: {
    height: SCREEN_HEIGHT * 0.091,
    alignItems: "center",
    zIndex: 5,
    backgroundColor: "white",
  },

  view3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: "white",
    //height:30,
    zIndex: 10,
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
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

  view17: {},

  view18: {},

  view19: { flex: 1.7, alignItems: "flex-end" },

  icon: { paddingBottom: 2 },

  view20: { marginRight: 10 },

  text6: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold",
  },

  view21: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
    marginTop: 15,
  },

  view22: {
    alignItems: "center",
    marginBottom: -20,
  },

  sectionHeaderContainer: {
    backgroundColor: "white",
    marginTop: 30,
    paddingLeft: 15,
  },

  text7: {
    fontSize: 28,
    color: "black",
    marginRight: 5,
  },

  text8: {
    fontSize: 15,
    color: "#5e6977",
    textDecorationLine: "line-through",
  },

  button3: {
    height: 60,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH - 110,
    marginBottom: 10,
  },

  view23: {
    flexDirection: "row",
    backgroundColor: "white",
    // elevation:10,
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    height: 80,
  },

  button2Image: {
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#eeeeee",
    marginBottom: 10,
  },
  text9: { fontSize: 15, color: "#43484d" },

  map: {
    marginVertical: 0,
    width: SCREEN_WIDTH,
    zIndex: -1,
  },

  centeredView: {
    zIndex: 14,
  },
  modalView: {
    marginHorizontal: 20,
    marginVertical: 60,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 16,
  },

  view24: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    paddingHorizontal: 20,
  },

  view25: {
    flexDirection: "row",
    alignItems: "baseline",
  },

  flatlist: {
    marginTop: 20,
  },

  text10: { color: "#5e6977", paddingLeft: 10 },
});
