import axios from "axios";

const userRequest = axios.create({
  baseURL: import.meta.env.VITE_UserBaseUrl,
});

userRequest.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = "Bearer " + localStorage.getItem("token");
  }
  return req; 
});

export default userRequest;
