import axios from "axios"
const baseURL = import.meta.env.VITE_UserBaseUrl   
const userRequest = axios.create({
    baseUrl:baseURL
})

userRequest.interceptors.request.use((req)=>{
    if(localStorage.getItem("currentUser")){
        req.headers.Authorization = "Bearer" + localStorage.getItem("currentUser")
    }
      return req
})

export default userRequest