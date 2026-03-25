import axios from "axios";

export const request = (url, method, data, contentType) => {
  const headers = {
    // contentType should be 'application/json' or 'multipart/form-data' based on the request
    "Content-Type": contentType,
    Accept: "application/json",
  };
  return axios({
    // https://deploy-backend-production-f9c1.up.railway.app/api/v1
    url: "https://deploy-backend-production-f9c1.up.railway.app/api/v1" + url,
    method: method,
    data: data,
    headers: headers,
  })
    .then((response) => {
      // Check if the response status is 200 OK

      return response.data;
    })
    .catch((error) => {
      // Handle errors appropriately
      console.error("API request failed:", error);
    });
};
