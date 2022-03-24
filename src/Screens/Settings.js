import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
} from "react-native";
import React from "react";
// icons
import { FontAwesome5, Ionicons, Entypo, AntDesign } from "@expo/vector-icons";

const Settings = ({route}) => {
  const {users} = route.params
  console.log(users);
  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <Image
          style={{ width: 100, height: 100, borderRadius: 100 }}
          source={require("../../assets/pro.png")}
        />
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
          User's Name: {users}
        </Text>
      </View>
      <View style={styles.SettingBox}>
        <ScrollView
          style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20 }}
        >
          <View style={styles.Box}>
            <Text style={{ fontSize: 20 }}>Account</Text>

            <View style={styles.accountBox}>
            <View style={styles.BoxItem}>
              <FontAwesome5 name="user-edit" size={24} color="black" />
              <Text style={{ fontSize: 20, marginHorizontal: 20 }}>Edit</Text>
            </View>
            </View>

          </View>

          <View style={styles.Box}>
            <Text style={{ fontSize: 20 }}>Settings</Text>

            <View style={styles.settingBox}>
            <View style={styles.settingBoxItem}>
              <Ionicons name="notifications" size={24} color="black" />
              <Text style={{ fontSize: 20, marginHorizontal: 20 }}>
                Notifications
              </Text>
            </View>
            <View style={styles.settingBoxItem}>
              <Entypo name="help-with-circle" size={24} color="black" />
              <Text style={{ fontSize: 20, marginHorizontal: 20 }}>Help</Text>
            </View>
            <View style={styles.settingBoxItem}>
              <AntDesign name="logout" size={24} color="black" />
              <Text style={{ fontSize: 20, marginHorizontal: 20 }}>LogOut</Text>
            </View>
            </View>

          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27E20C",
  },
  Image: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  SettingBox: {
    flex: 1,
    backgroundColor: '#e1e8ee',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  Box: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  accountBox: {
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#27E20C",
    borderRadius: 10,
  },
  settingBox:{
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "#27E20C",
    borderRadius: 10,
  },
  BoxItem: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  settingBoxItem:{
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  }
});
