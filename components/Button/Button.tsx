import React from "react";
import { TouchableOpacity, Text, TextInputProps } from "react-native";

interface Props extends TextInputProps {
  label?: string;
  onPress: () => void;
  disabled: boolean;
}
// TODO export style
export default function Button({
  label,
  onPress,
  disabled = false,
}: Props): JSX.Element {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        height: 50,
        width: 245,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e94832",
      }}
      activeOpacity={0.7}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={{ fontSize: 18, color: "white", textTransform: "uppercase" }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
