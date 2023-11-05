import axios from "axios"
const baseURL = import.meta.env.VITE_UserBaseUrl 
console.log(baseURL,"base");
const userRequest = axios.create({
    baseURL:baseURL
})

userRequest.interceptors.request.use((req)=>{
    console.log("req in");
    if(localStorage.getItem("currentUser")){
        req.headers.authorization = "Bearer " + localStorage.getItem("currentUser")
        console.log(req);
    }
      return req
})

export default userRequest
