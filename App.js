import { StyleSheet, Text, View } from "react-native";
import {
  DestinationContextProvider,
  OriginContextProvider,
} from "./src/contexts/contexts";
import LoginProvider from "./src/contexts/LoginProvider";
import Navigate from "./src/Navigation/Navigate";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import axios from "axios";
import { NavigationContainer } from '@react-navigation/native';

// import { useEffect } from "react";
// import Verification from "./src/Screens/Verification";

export default function App() {
  const fetchApi = async () => {
    try {
      const res = await axios.get("http://192.168.8.108:9000/");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  // useEffect(() => {
  //   fetchApi()
  // }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LoginProvider>
        <DestinationContextProvider>
          <OriginContextProvider>
            <NavigationContainer>
              <Navigate />
            </NavigationContainer>
          </OriginContextProvider>
        </DestinationContextProvider>
      </LoginProvider>
    </GestureHandlerRootView>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
