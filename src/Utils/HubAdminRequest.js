import axios from "axios";
import { GenerateError } from "../Toast/toast";

const HubAdminRequest = axios.create({
    baseURL: import.meta.env.VITE_HubAdminBaseUrl
});

HubAdminRequest.interceptors.request.use((req)=>{
    if(localStorage.getItem("hubtoken")){
        req.headers.Authorization = "Bearer " + localStorage.getItem("hubtoken")
    }
    return req;
})

HubAdminRequest.interceptors.response.use(
    (response) => response,
    (error) => {
        if(error.response && error.response.status === 400){
            GenerateError(error.response.data.message);
        }else if (error.response && error.response.status === 403){
            localStorage.removeItem("hubtoken")
            setTimeout(() => {
               GenerateError(error.response.data.message); 
            }, 200);
            window.location = '/hub'
        }
        else if (error.response && error.response.status === 404) {
            // window.location = "/error";
          } 
          else if (error.response && error.response.status === 401) {
            localStorage.removeItem("hubtoken");
            setTimeout(() => {
              GenerateError(error.response.data.message);
            }, 200);
            window.location = "/hub/login";
          }
          return Promise.reject(error);
    }
)
export default HubAdminRequest