import * as Linking from "expo-linking";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Register: {
            screens: {
              RegisterScreen: "register",
            },
          },
          Login: {
            screens: {
              LoginScreen: "login",
            },
          },
          TabOne: {
            screens: {
              TabOneScreen: "one",
            },
          },
          TabTwo: {
            screens: {
              TabTwoScreen: "two",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
