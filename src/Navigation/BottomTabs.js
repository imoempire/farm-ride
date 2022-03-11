import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Extra from "../Screens/Extra";
import Wallet from "../Screens/Wallet";
import Home from "../Screens/Home";
import Settings from "../Screens/Settings";
// Icons
import { Feather, FontAwesome, Entypo,AntDesign } from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  const TabBarCustomButton = ({ accessibilityLabel, accessibilityState, children, onPress }) => {

    var isSelected = accessibilityState.selected

    if (isSelected) {
        return (
            <View style={{ flex: 1, alignItems: 'center' }}>
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        top: 0
                    }}
                >
                    <View style={{ flex: 1, backgroundColor: '#27E20C' }}></View>
                    <Svg
                        width={75}
                        height={60}
                        viewBox="0 0 75 60"
                    >
                        <Path
                            d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                            fill={'#27E20C'}
                        />
                    </Svg>
                    <View style={{ flex: 1, backgroundColor: '#27E20C' }}></View>
                </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: '#27E20C',
                        ...styles.shadow,
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
        )
    } else {
        return (
            <TouchableOpacity
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 50,
                    height: 50,
                    backgroundColor: '#27E20C'
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
        )
    }
}

  return (
    <Tab.Navigator  screenOptions={{ 
      tabBarStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "transparent",
        elevation: 0,
      }, 
      tabBarShowLabel: true,
      headerShown: false, 
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            (color = "white"),
            (size = 13),
            (
              <Text style={{ color: focused ? color : "black", fontSize: size, top: focused ? 20 : 0 }}>
                Home
              </Text>
            )
          ),
          tabBarIcon: ({ color, focused, tintColor }) => (
           (color = 'white'),
           ( <View>
              <View>
                <Feather style={{top: focused ? 10 : 0 }} name="home" size={24} color={focused ? color : 'black'} />
              </View>
            </View>)
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
            />
        )
        }}
      />
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{ 
          tabBarLabel: ({ focused, color, size }) => (
          (color = "white"),
          (size = 13),
          (
            <Text style={{ color: focused ? color : "black", fontSize: size, top: focused ? 20 : 0 }}>
              Wallet
            </Text>
          )
        ),
          tabBarIcon: ({ color, focused, tintColor }) => (
            (color="white"),
            <View>
              <View>
                <Entypo style={{top: focused ? 10 : 0 }} name="wallet" size={24} color={focused ? color : 'black'} />
              </View>
            </View>
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
            />
        )
        }}
      />
      <Tab.Screen
        name="Extra"
        component={Extra}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            (color = "white"),
            (size = 13),
            (
              <Text style={{ color: focused ? color : "black", fontSize: size, top: focused ? 20 : 0 }}>
                Extra
              </Text>
            )
          ),
          tabBarIcon: ({ color, focused, tintColor }) => (
            (color="white"),
            <View>
              <View>
              <AntDesign style={{top: focused ? 10 : 0 }} color={focused ? color : 'black'} name="appstore1" size={24} />              
              </View>
            </View>
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
            />
        )
        }}
      />

      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: ({ focused, color, size }) => (
            (color = "white"),
            (size = 13),
            (
              <Text style={{ color: focused ? color : "black", fontSize: size, top: focused ? 20 : 0 }}>
                Settings
              </Text>
            )
          ),
          tabBarIcon: ({ color, focused, tintColor }) => (
            (color="white"),
            <View>
              <View>
                <FontAwesome style={{top: focused ? 10 : 0 }} name="history" size={24} color={focused ? color : 'black'} />
              </View>
            </View>
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
            />
        )
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "black",
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,
    elevation: 10,
  },
});

export default BottomTabs;
