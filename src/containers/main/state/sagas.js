import { put, takeEvery } from "redux-saga/effects";
import {ADD_NEW_FAN_SAGA, SET_NEW_FAN_TALLENT_SAGA} from "./types";
import {getSuccessMessageForFan} from "./actions.js";
import { addNewFanSignup,addNewTallentSignup} from "./api";

// ADD NEW FAN SIGNUP..............................
function* addNewFanSignupHandler(action) {
  try {
    const { payload } = action;
    //api
    const response = yield addNewFanSignup(payload);
    if (response) {
      console.log("IN SAGA...........",response.message);
      yield put(
        getSuccessMessageForFan({
          successMessage: response.message,
          successMessageToShow:response.message
        })
      );
    } 
  } catch (error) {
    throw error;
  }
}

// ADD NEW TALLENT SIGNUP..............................
function* addNewTallentSignupHandler(action) {
  try {
    const { payload } = action;
    //api
    const response = yield addNewTallentSignup(payload);
    if (response) {
      console.log("IN SAGA...........",response.message);
      yield put(
        getSuccessMessageForFan({
          successMessage: response.message,
          successMessageToShow:response.message
        })
      );
    } 
  } catch (error) {
    throw error;
  }
}

export default function* watchAuth() {
  yield takeEvery(ADD_NEW_FAN_SAGA,addNewFanSignupHandler);
  yield takeEvery(SET_NEW_FAN_TALLENT_SAGA,addNewTallentSignupHandler);

}
