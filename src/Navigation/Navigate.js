import { Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../Screens/Welcome";
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import Tabs from "../Screens/Tabs";
import BookNow from "../Screens/BookNow";
import BookLate from "../Screens/BookLate";
import RequestDone from "../Screens/RequestDone";
import DestinationScreen from "../Screens/DestinationScreen";
import Forgetpassword from "../Screens/ForgetPassword";
import Verification from "../Screens/Verification";
import { useLogin } from "../contexts/LoginProvider";
// import ImageUpload from "../Screens/ImageUpload";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Verify" component={Verification} />
      {/* <Stack.Screen name="Profile" component={ImageUpload} /> */}
      <Stack.Screen name="Forget" component={Forgetpassword} />
    </Stack.Navigator>
  );
};

const NewStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="BookNow" component={BookNow} />
      <Stack.Screen name="Request" component={RequestDone} />
      <Stack.Screen name="Destination" component={DestinationScreen} />
    </Stack.Navigator>
  );
};


const Navigate = () => {
  const { isLoggedIn } = useLogin();
  return isLoggedIn ? <NewStack /> : <StackNavigator />;
};

export default Navigate;
