import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import Buttons from "../Component/Button/Buttons";
import { appColor } from "../Data/styles";

const Driver = () => {
   const star = 4
  const rate = []
  for (let i = 0; i < star; i++) {
     rate.push(
        <View key={i} style={{flexDirection: 'row',}}>
           <AntDesign  name="star" size={24} color="#FFCE31" />
        </View>
     )
}

  return (
    <View style={styles.container}>
      <View style={styles.Title}>
        <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
          Your Driver
        </Text>
      </View>
      <View style={styles.Form}>
        <View style={styles.Image}>
          <Image
            style={{ width: 120, height: 120, borderRadius: 100 }}
            source={require("../../assets/pro.png")}
          />
        </View>
        <View>
          <View style={styles.info}>
            <Text style={{ color: appColor, fontSize: 20 }}>
              {"Name".toUpperCase()}
            </Text>
            <Text style={{ color: appColor, fontSize: 20 }}>
              {"Driver OM".toUpperCase()}
            </Text>
          </View>
          <View style={styles.info}>
            <Text style={{ color: appColor, fontSize: 20 }}>
              {"Phone".toUpperCase()}
            </Text>
            <Text style={{ color: appColor, fontSize: 20 }}>057 801 6840</Text>
          </View>
          <View style={styles.info}>
            <Text style={{ color: appColor, fontSize: 20 }}>
              {"Car Registration".toUpperCase()}
            </Text>
            <Text style={{ color: appColor, fontSize: 20 }}>GB-389-20</Text>
          </View>
          <View style={styles.info}>
            <Text style={{ color: appColor, fontSize: 20 }}>Ratings</Text>
           <Text>{rate}</Text> 
          </View>
          <View style={styles.info}>
            <Text style={{ color: "black", fontSize: 20 }}>{star}/5</Text>
          </View>
        </View>
        <View style={{alignItems: "center"}}>
        <Buttons textColor={"white"}
              background={appColor}
              content={"confirm Pickup"}
              border={0}
              borderColor={"red"}
              pd={10}
              size={20}
              mH={20}
              br={10}/>
        </View>
      </View>
    </View>
  );
};

export default Driver;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor,
  },
  Title: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  Form: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
  },
  Image: {
    alignItems: "center",
    bottom: 50,
  },
  info: {
    alignItems: "center",
    marginVertical: 5,
  },
});
