import * as React from "react";

import EditScreenInfo from "../../components/examples/EditScreenInfo";
import { Text, View } from "../../themes/Themed";

import { styles } from "./styles";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}
