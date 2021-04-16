import React from "react";
import {
  TextInput as RNTextInput,
  View,
  StyleSheet,
  TextInputProps,
} from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";

interface Props extends TextInputProps {
  icon: string;
  error: string | undefined;
  touched: boolean | undefined;
}

// TODO export style
export default function Input({
  icon,
  error,
  touched,
  ...otherProps
}: Props): JSX.Element {
  // eslint-disable-next-line no-nested-ternary
  const validationColor = !touched ? "#223e4b" : error ? "#FF5A5F" : "#223e4b";

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 48,
        borderRadius: 8,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 8,
      }}
    >
      <View style={{ padding: 8 }}>
        {/* @ts-ignore*/}
        <Icon name={icon} color={validationColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          {...otherProps}
        />
      </View>
    </View>
  );
}
