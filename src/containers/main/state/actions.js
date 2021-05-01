import {
  ADD_NEW_FAN_SAGA,
  SET_NEW_FAN_ADD_SUCCESS,
  SET_NEW_FAN_TALLENT_SAGA
} from "./types.js";

//ADD NEW REWORD RULE
export const addSagaFanSignup = (payload) => ({
  type: ADD_NEW_FAN_SAGA,
  payload,
});
//GET SUCCESS MESSAGE
export const getSuccessMessageForFan = (payload) => (
  {
  type: SET_NEW_FAN_ADD_SUCCESS,
  payload,
});
//ADD NEW TALLENT SIGNUP 
export const addSagaTalentSignup = (payload) =>(
  {
    type: SET_NEW_FAN_TALLENT_SAGA,
    payload,
  }
)