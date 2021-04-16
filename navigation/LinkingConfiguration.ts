import * as Linking from "expo-linking";

import { HOME, LOGIN, REGISTER } from "./constant";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          Register: {
            screens: {
              RegisterScreen: REGISTER,
            },
          },
          Login: {
            screens: {
              LoginScreen: LOGIN,
            },
          },
          Home: {
            screens: {
              HomeScreen: HOME,
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
