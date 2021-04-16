import { connect } from "react-redux";
import { AnyAction, bindActionCreators, Dispatch } from "redux";

import { userRegister } from "../../redux/actions/user/userActions";

import Register from "./Register";

const mapDispatchProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators({ userRegister }, dispatch);

export default connect(null, mapDispatchProps)(Register);
