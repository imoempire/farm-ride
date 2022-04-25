import {
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import TopBar from "../Component/TopBar/TopBar";
import { extra, historyList } from "../Data/data";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import {
  DestinationContext,
  HistoryContext,
  OriginContext,
} from "../contexts/contexts";
import { appColor } from "../Data/styles";

const WIDTH = Dimensions.get("window").width;

const Extra = () => {
  const { history, setHistory } = useContext(HistoryContext);

  // const [pickupHistory, setPickupHistory] = useState(historyList);

  const Delete = (itemId) => {
    setHistory(history.filter((item) => item.id !== itemId));
    alert("Deleted");
  };
  return (
    <View style={styles.container}>
      <View style={styles.Bar}>
        <TopBar Title={"Extra"} background={appColor} TitleColor={"white"} />
      </View>
      <View style={styles.Extra}>
        <View>
          <TouchableOpacity
            onPress={() => {
              alert(" Let help you sell your product");
            }}
            style={[styles.btn, styles.shadow]}
          >
            <FontAwesome5 name="comment-dollar" size={40} color={appColor} />
            <Text>MARKET</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.History}>
        <Text style={styles.Text}>Ride History</Text>
        <View style={styles.history}>
          {history.length === 0 ? (
            <Text>History Empty </Text>
          ) : (
            <FlatList
              data={history}
              keyExtractor={(item) => item.id}
              renderItem={({ item, index }) => (
                <View
                  style={[
                    index % 2 === 0 ? styles.hist : styles.Hist,
                    { flexDirection: "row", justifyContent: "space-between" },
                  ]}
                >
                  <View>
                    <Text
                      style={{
                        color: index % 2 === 0 ? "white" : "black",
                        fontSize: 17,
                      }}
                    >
                      {item.city} to {item.destination.name}
                    </Text>
                    <Text
                      style={{
                        color: index % 2 === 0 ? "white" : "black",
                        fontSize: 17,
                      }}
                    >
                      {item.date}
                    </Text>
                  </View>
                  <TouchableOpacity onPress={() => Delete(item.id)}>
                    <MaterialCommunityIcons
                      name="delete-circle"
                      size={35}
                      color={index % 2 === 0 ? "white" : appColor}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default Extra;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  Bar: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  Extra: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "90%",
    width: (WIDTH * 80) / 100,
    marginVertical: 0,
    justifyContent: "center",
    marginHorizontal: 10,
    alignItems: "center",
  },
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  Text: {
    backgroundColor: appColor,
    padding: 10,
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
  History: {
    flex: 1,
    paddingBottom: 40,
  },
  history: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 20,
  },
  hist: {
    backgroundColor: appColor,
    marginVertical: 6,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  Hist: {
    backgroundColor: "white",
    marginVertical: 6,
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: appColor,
  },
});
