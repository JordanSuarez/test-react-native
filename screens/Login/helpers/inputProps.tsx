import { FormikErrors, FormikTouched } from "formik";

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  handleChange: (value: string) => void,
  handleBlur: (value: string) => void,
  errors: FormikErrors<{ email: string; name: string; password: string }>,
  touched: FormikTouched<{ email: string; password: string; name: string }>
) => [
  {
    icon: "mail",
    placeholder: "Enter your email",
    secureTextEntry: false,
    keyboardType: "email-address",
    keyboardAppearance: "dark",
    returnKeyType: "next",
    returnKeyLabel: "next",
    onChangeText: handleChange("email"),
    onBlur: handleBlur("email"),
    error: errors.email,
    touched: touched.email,
  },
  {
    icon: "key",
    placeholder: "Enter your password",
    secureTextEntry: true,
    autoCapitalize: "none",
    keyboardType: "default",
    keyboardAppearance: "dark",
    returnKeyType: "done",
    returnKeyLabel: "done",
    onChangeText: handleChange("password"),
    onBlur: handleBlur("password"),
    error: errors.password,
    touched: touched.password,
  },
];
