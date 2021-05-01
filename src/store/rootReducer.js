import { combineReducers } from "redux";
import { signupDataReducer } from "../containers/main/state/reducers";
export const rootReducer = combineReducers({
  auth: signupDataReducer,
});
