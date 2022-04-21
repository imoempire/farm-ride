import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import Buttons from "../Component/Button/Buttons";
import { MaterialIcons } from "@expo/vector-icons";
import { verify } from "../Component/api/auth";
import { StackActions, useNavigation } from "@react-navigation/native";
import Appnotification from "../Component/AppNotification";
import { updateNotifications } from "../Component/Helper";
import { appColor } from "../Data/styles";

const inputs = Array(4).fill("");
let newInputIndex = 0;
const isobjectValid = (obj) => {
 return Object.values(obj).every((val) => val.trim());
};
const Verification = ({route, navigation}) => {
  const {profile} = route.params
  const inp = useRef();
  const [otp, setOtp] = useState({ 0: "", 1: "", 2: "", 3: "" });
  const [nextInputs, setNextInputs] = useState(0);
  const [message, setMessage] = useState({
    text: '',
    type: ''
  });

  const handleChangeText = (text, index) => {
    const newOtp = { ...otp };
    newOtp[index] = text;
    setOtp(newOtp);

    const lastInputIndex = inputs.length - 1;
    if (!text) newInputIndex = index === 0 ? 0 : index - 1;
    else newInputIndex = index === lastInputIndex ? lastInputIndex : index + 1;

    setNextInputs(newInputIndex);
  };

  useEffect(() => {
    inp.current.focus();
  }, [nextInputs]);

  const submitOtp = async () => {
    Keyboard.dismiss();
    if (isobjectValid(otp)) {
      let OTP = "";
      Object.values(otp).forEach((v) => {
        OTP += v;
      });
      const userId = profile.id
      const res = await verify(OTP, userId);

      // if(!res.success) 
      // return updateNotifications(setMessage, res.error)

      navigation.navigate('Tabs', profile) 
    }
  };

  return (
    <View style={styles.container}>
      { message.text ? 
      <Appnotification type={message.type} text={message.text}/> : null}

      <View style={styles.Image}>
        <Image source={require("../../assets/Logo1.png")} />
      </View>
      <View style={styles.Form}>
        <Text style={styles.Text}>
          Please Verify Your Email, PIN has been sent to your email
        </Text>
        <View style={styles.box}>
          {inputs.map((input, index) => {
            return (
              <View key={index.toString()} style={styles.TextInput}>
                <TextInput
                  style={styles.inputs}
                  value={otp[index]}
                  onChangeText={(text) => handleChangeText(text, index)}
                  placeholder="0"
                  keyboardType="numeric"
                  maxLength={1}
                  ref={nextInputs === index ? inp : null}
                />
              </View>
            );
          })}
        </View>
        <TouchableOpacity onPress={submitOtp} style={styles.Done}>
          <MaterialIcons name="done" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verification;

const { width } = Dimensions.get("window");
const inputWidth = Math.round(width / 6);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Image: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  Form: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  box: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: inputWidth / 2,
  },
  Text: {
    color: appColor,
    textAlign: "center",
    marginBottom: 15,
  },
  TextInput: {
    width: inputWidth,
    height: inputWidth,
    borderWidth: 2,
    borderColor: appColor,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    fontSize: 25,
    padding: 18,
  },
  Done: {
    alignItems: "center",
    marginVertical: 100,
    backgroundColor: appColor,
    marginHorizontal: 100,
    padding: 10,
    borderRadius: 10,
  },
});
