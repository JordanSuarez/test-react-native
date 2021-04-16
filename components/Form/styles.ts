import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#181e34",
  },
  formContainer: {
    padding: 8,
    flex: 1,
  },
  button: {
    backgroundColor: "red",
  },
});
