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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { DestinationContext, OriginContext } from "../contexts/contexts";

const WIDTH = Dimensions.get("window").width;

const Extra = () => {
  const { origin, setOrigin } = useContext(OriginContext);
  const { destination, setDestination } = useContext(DestinationContext);

  const [history, setHistory] = useState([{
    from: origin.name,
    drop: destination.name,
  }]);

  const [pickupHistory, setPickupHistory] = useState(historyList);

  console.log(pickupHistory);

  const Delete = (itemId) => {
    setPickupHistory(pickupHistory.filter((item) => item.id !== itemId));
    alert("Deleted");
  };
  return (
    <View style={styles.container}>
      <View style={styles.Bar}>
        <TopBar Title={"Extra"} background={"#27E20C"} TitleColor={"white"} />
      </View>
      <View style={styles.Extra}>
        <FlatList
          horizontal={true}
          data={extra}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <TouchableOpacity style={[styles.btn, styles.shadow]}>
                <item.icon name={item.name} size={24} color={item.color} />
                <Text>{item.title}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <View style={styles.History}>
        <Text style={styles.Text}>History</Text>
        <View style={styles.history}>
          {pickupHistory.length === 0 ? (
            <Text>History Empty </Text>
          ) : (
            <FlatList
              data={history}
              // keyExtractor={(item) => item.id}
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
                      {item.from} to {item.drop}
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
                  <TouchableOpacity
                  //  onPress={() => Delete(item.id)}
                   >
                    <MaterialCommunityIcons
                      name="delete-circle"
                      size={35}
                      color={index % 2 === 0 ? "white" : "#27E20C"}
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

// handleDelete = itemId => {
//   const items = this.state.items.filter(item => item.id !== itemId);
//   this.setState({ items: items });
// };

export default Extra;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e1e8ee",
  },
  Bar: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  Extra: {
    flex: 0.3,
    // backgroundColor: '#27E20C'
  },
  btn: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "60%",
    width: (WIDTH * 30) / 100,
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
    backgroundColor: "#27E20C",
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
    backgroundColor: "#27E20C",
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
    borderColor: "#27E20C",
  },
});
