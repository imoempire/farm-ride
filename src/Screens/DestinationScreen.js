import React, { useRef, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { parameters } from "../Data/styles";
import { OriginContext, DestinationContext } from "../contexts/contexts";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GOOGLE_MAPS_APIKEY = "AIzaSyBBKtnI-GKkr1fAp9nmrhcenty_wkG1deE";
const SCREEN_HEIGHT = Dimensions.get("window").height;
const SCREEN_WIDTH = Dimensions.get("window").width;

// navigator.geolocation = require('@react-native-community/geolocation');

const DestinationScreen = ({ navigation }) => {
  const { dispatchOrigin } = useContext(OriginContext);
  const { dispatchDestination } = useContext(DestinationContext);

  const textInput1 = useRef(4);
  const textInput2 = useRef(5);

  const [destination, setDestination] = useState(false);

  return (
    <>
      <View style={styles.view2}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.view1}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <GooglePlacesAutocomplete
        placeholder="Search"
        styles={autoComplete}
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: "en",
        }}
      />

      {/* {destination === false && (
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="From..."
          listViewDisplayed="auto"
          debounce={400}
          // currentLocation ={true}
          ref={textInput1}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
          
          renderDescription={(row) => row.description} // custom description render
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}

          onPress= {(data,details = null)=>{
              dispatchOrigin({type:"ADD_ORIGIN",payload:{
                  latitude:details.geometry.location.lat,
                  longitude:details.geometry.location.lng,
                  address:details.formatted_address,
                  name:details.name
              }})

              setDestination(true)
          }}
        />
      )} */}

      {/* {destination === true && (
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          placeholder="Going to..."
          listViewDisplayed="auto"
          debounce={400}
          currentLocation ={true}
          ref={textInput2}
          minLength={2}
          enablePoweredByContainer={false}
          fetchDetails={true}
          autoFocus={true}
          styles={autoComplete}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          onPress={(data, details = null) => {
            dispatchDestination({
              type: "ADD_DESTINATION",
              payload: {
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                address: details.formatted_address,
                name: details.name,
              },
            });

            navigation.navigate("Request", { state: 0 });
          }}
        />
      )} */}
    </>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: parameters.statusBarHeight,
  },

  view1: {
    top: 25,
    left: 12,
    backgroundColor: "#27E20C",
    height: 40,
    width: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    zIndex: 10,
    marginVertical: 10,
  },

  view3: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: "white",
    height: 30,
    zIndex: 10,
  },

  view2: { backgroundColor: "white", zIndex: 4, paddingBottom: 10 },

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
    zIndex: 17,
    elevation: 8,
  },
});

const autoComplete = {
  textInput: {
    backgroundColor: "#eeeeee",
    height: 50,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 15,
    flex: 1,
    borderWidth: 1,
    marginHorizontal: 15,
  },
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor: "white",
    marginVertical: 20,
  },

  textInputContainer: {
    flexDirection: "row",
  },
};
