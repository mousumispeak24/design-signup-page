import axios from "axios";
import {processError } from "../../../utils/common";
import { API_BASE_URL } from "../../../utils/config";

//ADD NEW FAN SIGNUP 
export const addNewFanSignup = async (data) => {
  try {
    console.log("data...........",data);
    const response = await axios.post(
      `${API_BASE_URL}/v3/sign-up/fan`,data 
    );
    console.log("RESPONSE IS.............FAN....",response.data);
    return response.data;

  } catch (error) {
    return processError(error);
  }
};

//ADD NEW TALLENT SIGNUP 
export const addNewTallentSignup = async (data) => {
  try {
    console.log("data...........",data);
    const response = await axios.post(
      `${API_BASE_URL}/v3/sign-up/fan`,data 
    );
    console.log("RESPONSE IS...............TALLENT..",response.data);
    return response.data;

  } catch (error) {
    return processError(error);
  }
};