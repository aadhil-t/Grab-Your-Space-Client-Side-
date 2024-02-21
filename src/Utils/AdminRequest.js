import axios from "axios";

const adminRequest = axios.create({
  baseURL: import.meta.env.VITE_ADMIN_URL,
});

adminRequest.interceptors.request.use((req) => {
  if (localStorage.getItem("admintoken")) {
    req.headers.Authorization =
      "Bearer " + localStorage.getItem("admintoken");
  }
  return req;
});

export default adminRequest