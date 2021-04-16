import React from "react";
import {
  Text,
  View,
  KeyboardTypeOptions,
  ReturnKeyTypeOptions,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Input from "../Input/Input";
import Button from "../Button/Button";

import styles from "./styles";

type Props = {
  title: string;
  buttonLabel: string;
  inputs: InputProps[];
  onPress: () => void;
  isSubmitting: boolean;
};

interface InputProps {
  icon: string;
  placeholder: string;
  secureTextEntry: boolean;
  keyboardType: KeyboardTypeOptions;
  keyboardAppearance: "default" | "light" | "dark";
  returnKeyType: ReturnKeyTypeOptions;
  returnKeyLabel: string;
  onChangeText: (value: string) => string;
  onBlur: () => void;
  error: string;
  touched: boolean;
}

export default function Form({
  title,
  buttonLabel,
  inputs,
  onPress,
  isSubmitting,
}: Props): JSX.Element {
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      style={{ backgroundColor: "#181e34" }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#223e4b", fontSize: 20, marginBottom: 16 }}>
          {title}
        </Text>
        {inputs.map(
          (
            {
              icon,
              placeholder,
              secureTextEntry,
              keyboardType,
              keyboardAppearance,
              returnKeyType,
              returnKeyLabel,
              onChangeText,
              onBlur,
              error,
              touched,
            }: InputProps,
            index
          ) => (
            <View
              key={index}
              style={{
                paddingHorizontal: 32,
                marginBottom: 16,
                width: "100%",
              }}
            >
              <Input
                icon={icon}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
                keyboardType={keyboardType}
                keyboardAppearance={keyboardAppearance}
                returnKeyType={returnKeyType}
                returnKeyLabel={returnKeyLabel}
                onChangeText={onChangeText}
                onBlur={onBlur}
                error={error}
                touched={touched}
              />
              {error && touched && (
                <Text style={{ fontSize: 10, color: "red" }}>{error}</Text>
              )}
            </View>
          )
        )}
        <Button label={buttonLabel} onPress={onPress} disabled={isSubmitting} />
      </View>
    </KeyboardAwareScrollView>
  );
}
