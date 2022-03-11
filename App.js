import { StyleSheet, Text, View } from "react-native";
import { DestinationContextProvider, OriginContextProvider } from "./src/contexts/contexts";
import Navigate from "./src/Navigation/Navigate";

export default function App() {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <Navigate />
      </OriginContextProvider>
    </DestinationContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
