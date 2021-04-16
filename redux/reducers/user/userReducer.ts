import {
  USER_STATE_CHANGE,
  USER_CLEAR_DATA,
  USER_REGISTERED,
} from "../../constants/user";

import { UserAction, UserState } from "./userReducerTypes";

const initialState = {
  user: {
    name: "",
    email: "",
    token: "",
    isLogged: false,
  } as UserState,
};

export const user = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        ...state,
        user: action.user,
      };
    case USER_REGISTERED:
      return {
        ...state,
        user: action.user,
      };
    case USER_CLEAR_DATA:
      return initialState;
    default:
      return state;
  }
};
