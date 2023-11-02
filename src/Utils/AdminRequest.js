import axios from "axios";
const baseURL = import.meta.env.VITE_AdminBaseUrl 
const adminRequest = axios.create({
    baseUrl:baseURL
})

adminRequest.interceptors.request.use((req)=>{
    if(localStorage.getItem("currentAdmin")){
        req.headers.Authorization = "Bearer" + localStorage.getItem("currentAdmin")
    }
     return req
})

export default adminRequest