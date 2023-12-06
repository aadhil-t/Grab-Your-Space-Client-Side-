import axios from "axios";

const HubAdminRequest = axios.create({
    baseURL: import.meta.env.VITE_HubAdminBaseUrl
});

HubAdminRequest.interceptors.request.use((req)=>{
    if(localStorage.getItem("hubtoken")){
        req.headers.Authorization = "Bearer " + localStorage.getItem("hubtoken")
    }
    return req;
})

export default HubAdminRequest