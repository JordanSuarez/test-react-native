import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";

import { TabOneParamList } from "../../../types";
import TabOneScreen from "../TabOneScreen";

const TabOneStack = createStackNavigator<TabOneParamList>();

export function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}
