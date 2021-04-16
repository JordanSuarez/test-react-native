// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { LoginParamList } from "../../../types";
import LoginScreen from "../Login";

const LoginStack = createStackNavigator<LoginParamList>();

export function LoginNavigator() {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerTitle: "Login" }}
      />
    </LoginStack.Navigator>
  );
}
