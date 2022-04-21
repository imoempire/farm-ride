import {
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Buttons from "../Component/Button/Buttons";
import TopBar from "../Component/TopBar/TopBar";
import { Ionicons } from "@expo/vector-icons";
import { appColor, parameters } from "../Data/styles";

const BookNow = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tabs")}
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            height: 40,
            width: 40,
            justifyContent: "center",
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Ionicons name="arrow-back" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <TopBar
          Title={"BOOK NOW"}
          background={"white"}
          TitleColor={appColor}
          mH={10}
        />
      </View>
      <View style={styles.Form}>
        <View style={styles.form}>
          <View style={styles.form}>
            <View style={styles.Label}>
              <Text>Phone</Text>
              <View>
              <TextInput style={styles.Input} placeholder="Phone" />
              </View>
            </View>
            <View style={{ alignItems: "center", marginVertical: 20 }}>
              <Buttons
                press={() => {
                  navigation.navigate("Request", { state: 0 });
                }}
                textColor={"white"}
                background={appColor}
                content={"Next"}
                border={0}
                borderColor={"red"}
                pd={10}
                size={20}
                mH={20}
                br={10}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default BookNow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor,
    paddingTop: parameters.statusBarHeight,
  },
  Image: {
    flex: 0.3,
    flexDirection: "row",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  Form: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  form: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  Label: {
    marginVertical: 10,
  },
  Input: {
    borderWidth: 2,
    height: 45,
    borderRadius: 20,
    paddingLeft: 20,
    borderColor: appColor,
  },
  destinations: {
    justifyContent: "center",
    borderWidth: 2,
    height: 45,
    borderRadius: 20,
    paddingLeft: 20,
    borderColor: appColor,
  },
});
