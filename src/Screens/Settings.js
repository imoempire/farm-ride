import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { parameters } from "../Data/styles";

// icons
import { FontAwesome5, Ionicons, Entypo, AntDesign } from "@expo/vector-icons";
import client from "../Component/api/client";
import * as ImagePicker from "expo-image-picker";
import { useLogin } from "../contexts/LoginProvider";

const Settings = props => {
  const [profileImage, setProfileImage] = useState("");
  const [progress, setProgress] = useState(0);
  // const { token } = props.route.params;
  const {profile, setIsLoggedIn} = useLogin()

  const openImageLibrary = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need camera roll permissions to make this work!");
    }

    if (status === "granted") {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
      });

      if (!response.cancelled) {
        setProfileImage(response.uri);
      }
    }
  };

  const uploadProfileImage = async () => {
    const formData = new FormData();
    formData.append("profile", {
      name: new Date() + "_profile",
      uri: profileImage,
      type: "image/jpg",
    });

    try {
      const res = await client.post("/upload-profile", formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "multipart/form-data",
          authorization: `JWT ${profile.token}`,
        },
      });
    
      // if (res.data.success) {
      //   props.navigation.dispatch(StackActions.replace('UserProfile'));
      // }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.Image}>
        <View style={styles.picker}>
          <TouchableOpacity
            onPress={openImageLibrary}
            style={styles.uploadBtnContainer}
          >
            {profileImage ? (
              <Image
                source={{ uri: profileImage }}
                style={{ width: "100%", height: "100%" }}
              />
            ) : (
              <Text style={styles.uploadBtn}>Upload Profile Image</Text>
            )}
          </TouchableOpacity>
          {/* {progress? <Text style={styles.skip}>{progress}</Text>: null} */}
          {profileImage ? (
            <Text
              onPress={uploadProfileImage}
              style={[
                styles.skip,
                { backgroundColor: "green", color: "white", borderRadius: 8 },
              ]}
            >
              Upload
            </Text>
          ) : null}
        </View>
        <View style={styles.Info}>
          <View >
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            {profile.fullname}
          </Text>
          </View>
        </View>
      </View>
      <View style={styles.SettingBox}>
        <ScrollView
          style={{ marginTop: 10, marginBottom: 10, marginHorizontal: 20 }}
        >
          <View style={styles.Box}>
            <Text style={{ fontSize: 20 }}>Account Detials</Text>

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
                <TouchableOpacity onPress={() => setIsLoggedIn(false)}>
                  <Text style={{ fontSize: 20, marginHorizontal: 20 }}>LogOut</Text>
                </TouchableOpacity>
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
    paddingTop: parameters.statusBarHeight,
  },
  Image: {
    flex: 0.3,
    alignContent: 'center',
    justifyContent: 'center',
  },
  SettingBox: {
    flex: 1,
    backgroundColor: "#e1e8ee",
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
  settingBox: {
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
  settingBoxItem: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 10,
  },
  uploadBtnContainer: {
    height: 100,
    width: 100,
    borderRadius: 125 / 2,
    borderWidth: 1,
    overflow: "hidden",
    alignContent: "center",
    justifyContent: "center",    
  },
  picker: {
    flex: .6, 
    alignItems: 'center',
  },
  ininfo:{
    marginVertical: 30,
    marginHorizontal: 30
  },
  Info: {
    flex: .2, 
    alignItems: 'center',
  },
  uploadBtn: {
    textAlign: "center",
    fontSize: 16,
    opacity: 0.3,
    fontWeight: "bold",
   
  },
  skip: {
    textAlign: "center",
    padding: 10,
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 2,
    opacity: 0.5,
    marginHorizontal: 20,
    marginVertical: 10,
  },
});
