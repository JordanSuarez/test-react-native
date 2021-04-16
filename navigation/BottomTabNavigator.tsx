import * as React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import { BottomTabParamList } from "../types";
import { RegisterNavigator } from "../screens/Register/config/RegisterNavigator";
import { LoginNavigator } from "../screens/Login/config/LoginNavigator";
import { TabOneNavigator } from "../screens/TabOne/config/TabOneNavigator";

import { REGISTER, HOME, LOGIN } from "./constant";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator({ isLogged = false }) {
  const colorScheme = useColorScheme();
  const initialRoute = isLogged ? HOME : REGISTER;

  return (
    <BottomTab.Navigator
      initialRouteName={initialRoute}
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      {isLogged ? (
        <BottomTab.Screen
          name={HOME}
          component={TabOneNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <TabBarIcon name="ios-code" color={color} />
            ),
          }}
        />
      ) : (
        <>
          <BottomTab.Screen
            name={REGISTER}
            component={RegisterNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <TabBarIcon name="ios-code" color={color} />
              ),
            }}
          />
          <BottomTab.Screen
            name={LOGIN}
            component={LoginNavigator}
            options={{
              tabBarIcon: ({ color }) => (
                <TabBarIcon name="ios-code" color={color} />
              ),
            }}
          />
        </>
      )}
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof Ionicons>["name"];
  color: string;
}) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
