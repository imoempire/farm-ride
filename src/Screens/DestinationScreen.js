import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import { parameters } from "../Data/styles";
import { OriginContext, DestinationContext } from "../contexts/contexts";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Buttons from "../Component/Button/Buttons";
import { Picker } from "../Component/Picker";

// const GOOGLE_MAPS_APIKEY = "AIzaSyBBKtnI-GKkr1fAp9nmrhcenty_wkG1deE";

// navigator.geolocation = require('@react-native-community/geolocation');

const DestinationScreen = ({ navigation }) => {

  const { dispatchOrigin } = useContext(OriginContext);
  const { destination, setDestination } = useContext(DestinationContext);

  const [chooseData, setChooseData] = useState();
  const [location, setLocation] = useState({});
  const [show, setShow] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const changeModalState = (bool) => {
    setIsModalVisible(bool);
  };
  const getDestination = (option) => {
    setChooseData(option.name);
    setLocation(option);
    setDestination(location);
  };
  
  const onPress = () => {
    setDestination({
      latitude: location.latitude,
      longitude: location.longitude,
      name: location.name,
    });
    navigation.navigate("Request", { state: 1, });
  };
//  console.log(location, 'jii');

  return (
    <View style={styles.container}>
      <View style={styles.view2}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.view1}
        >
          <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Picker Here */}
      <SafeAreaView style={styles.box}>
        <TouchableOpacity
          onPress={() => changeModalState(true)}
          style={styles.opacity}
        >
          <Text style={styles.texts}>
            {/* Selete from the avaiable Destination... */}
            {show === 0
              ? "Selete from the avaiable Destination..."
              : chooseData}
          </Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          animationType="fade"
          visible={isModalVisible}
          nRequestClose={() => changeModalState(false)}
        >
          <Picker
            setShow={setShow}
            changeModalState={changeModalState}
            setData={getDestination}
          />
        </Modal>
      </SafeAreaView>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginVertical: 20,
        }}
      >
        <Buttons
          press={() => onPress()}
          textColor={"white"}
          background={"#27E20C"}
          content={"DONE"}
          border={0}
          borderColor={"red"}
          pd={10}
          size={20}
          mH={20}
          br={10}
        />
      </View>

      {/* Random */}
    </View>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: parameters.statusBarHeight,
  },

  view1: {
    top: 25,
    left: 12,
    backgroundColor: "#27E20C",
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    zIndex: 10,
  },
  view2: {
    flex: 0.1,
    paddingBottom: 10,
  },

  //  Picker
  box: {
    flex: 1,
    marginVertical: 30,
  },
  texts: {
    marginVertical: 20,
    fontSize: 20,
    color: "white",
  },
  opacity: {
    backgroundColor: "#27E20C",
    paddingHorizontal: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});
