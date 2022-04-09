import React, { useRef, useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Modal,
} from "react-native";
import { parameters } from "../Data/styles";
import { OriginContext, DestinationContext } from "../contexts/contexts";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Buttons from "../Component/Button/Buttons";
import { Picker } from "../Component/Picker";


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

  const [chooseData, setChooseData] = useState('Selete from the avaiable Destination...');
  const [isModalVisible, setIsModalVisible] = useState(false);
  
  const changeModalState =(bool)=>{
        setIsModalVisible(bool)
  }
  const setData = (option)=>{
    setChooseData(option)
  }
  
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
   
   
    {/* Picker Here */}
    <SafeAreaView>
      <TouchableOpacity 
      onPress={()=>changeModalState(true)}
       style={styles.opacity}>
          <Text style={styles.texts} >{chooseData}</Text>
      </TouchableOpacity>
      <Modal
        transparent={true}
        animationType='fade'
        visible= {isModalVisible}
        nRequestClose={()=>changeModalState(false)}
      >
        <Picker changeModalState={changeModalState} setData={setData} />
      </Modal>
    </SafeAreaView>


      <View style={{justifyContent: 'center', alignItems: "center", marginVertical: 20}}>
        <Buttons
          press={() => navigation.navigate("Request",{ state: 1 })}
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
   view2: { backgroundColor: "white", zIndex: 4, paddingBottom: 10 },

  //  Picker
    texts: {
       marginVertical: 20,
       fontSize: 25,
    },
    opacity: {
      backgroundColor: 'orange',
      alignSelf: 'stretch',
      paddingHorizontal: 20,
      marginHorizontal: 20
    }

  });


