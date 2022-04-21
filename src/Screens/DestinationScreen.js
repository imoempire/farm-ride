import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import { appColor, parameters } from "../Data/styles";
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
    navigation.navigate("Request", { state: 1 });
  };

  return (
    <View style={styles.container}>
      <View style={styles.pick}>
        <View style={styles.backBtn}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.view1}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* Picker Here */}
        <View style={styles.destination}>
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
        </View>
      </View>

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
          background={appColor}
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
  pick: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 20,
  },
  view1: {
    backgroundColor: appColor,
    height: 50,
    width: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  backBtn: {
    alignItems: 'center',
  },

  //  Picker
  box: {
    // marginVertical: 30,
  },
  texts: {
    marginVertical: 10,
    fontSize: 20,
    color: appColor,
  },
  opacity: {
    backgroundColor: "transparent",
    paddingHorizontal: 30,
    marginHorizontal: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColor,
  },
});
