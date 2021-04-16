// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { RegisterParamList } from "../../../types";
import RegisterScreen from "../Register";

const RegisterStack = createStackNavigator<RegisterParamList>();

export function RegisterNavigator() {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerTitle: "Register" }}
      />
    </RegisterStack.Navigator>
  );
}
