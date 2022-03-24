import { Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../Screens/Welcome"
import { NavigationContainer } from "@react-navigation/native";
import SignIn from "../Screens/SignIn";
import SignUp from "../Screens/SignUp";
import Tabs from "../Screens/Tabs";
import BookNow from "../Screens/BookNow";
import BookLate from "../Screens/BookLate";
import RequestDone from "../Screens/RequestDone";
import DestinationScreen from "../Screens/DestinationScreen";
import Forgetpassword from "../Screens/ForgetPassword";

const Stack = createStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="BookNow" component={BookNow} />
        <Stack.Screen name="BookLate" component={BookLate} />
        <Stack.Screen name="Request" component={RequestDone}/>
        <Stack.Screen name="Destination" component={DestinationScreen}/>
        <Stack.Screen name="Forget" component={Forgetpassword}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
