import { combineReducers } from "redux";

// import { toast as toastReducer } from "../../components/Toast";

import { user as userReducer } from "./user/userReducer";

export default combineReducers({
  entities: combineReducers({
    user: userReducer,
    // toast: toastReducer,
  }),
});
