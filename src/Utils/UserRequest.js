import axios from "axios";
import { GenerateError } from "../Toast/toast";

const userRequest = axios.create({
  baseURL: import.meta.env.VITE_UserBaseUrl,
});

userRequest.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("token");
  }
  return req;
});

userRequest.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 400) {
      GenerateError(error.response.data.message);
    } else if (error.response && error.response.status === 403) {
      localStorage.removeItem("token");
      setTimeout(() => {
        GenerateError(error.response.data.message);
      }, 200);
      window.location = "/";
    }
     else if (error.response && error.response.status === 404) {
      window.location = "/error";
    } 
    else if (error.response && error.response.status === 401) {
      localStorage.removeItem("token");
      setTimeout(() => {
        GenerateError(error.response.data.message);
      }, 200);
      window.location = "/login";
    }
    return Promise.reject(error);
  }
);
export default userRequest;
