import { Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../Screens/Welcome"
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import Tabs from "../Screens/Tabs";

const Stack = createStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
