
export const getDefaultHeaders = () => {
  const headers = {};

  headers["Content-Type"] = "application/json";

  return headers;
};
export const processError = (error) => {
  if (error.response && error.response.data) {
   

    return error.response.data;
  }

  return error;
};
