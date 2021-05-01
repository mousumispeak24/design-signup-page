import {
  SET_NEW_FAN_ADD_SUCCESS
} from "./types.js";

const initialState = {
  successMessage:"",
  successMessageToShow:""
  
};

export const signupDataReducer = (state = initialState, action) => {
  switch (action.type) {
      case   SET_NEW_FAN_ADD_SUCCESS:
      return { ...state, ...action.payload  };
    default:
      return { ...state };
  }
};
