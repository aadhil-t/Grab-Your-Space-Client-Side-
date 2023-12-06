import axios from "axios";
import HubAdminRequest from "../Utils/HubAdminRequest"
const HubRequest = HubAdminRequest
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export const HubAdminSignup = async(data)=>{
    try {
        const datas = HubRequest.post('/signup',data);
        return datas
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

export const EmailVerify = async(id,token)=>{
    try {
        const data = await HubRequest.get(`verifyemail/${id}/${token}`);
            return data
    } catch (error) {
        toast.error(error.response.data.message)
    }
}

export const HubAdminLogin = async(values)=>{
    try {
        console.log("i reached in here admin api");
        const data = await HubRequest.post("/login",values)
        console.log(data,"hhhhhh");
        return data
    } catch (error) {
        console.log(error.response.data.message,"errorrorrorro");
        toast.error(error.response.data.message)
    }
}

export const HubProfile = async()=>{
    try {
        const data = await HubRequest.get("/profile")
        console.log("iam the data of the profile", data);
        return data
    } catch (error) {
        console.log(error,"errorrrrrrr");
    }
}

export const EditHubAdminPro = async(values)=>{
    try {
        console.log("enter in edit profile Api");       
        const data = await HubRequest.post("/editprofile",values);
        return data
    } catch (error) {
        console.log(error);
    }
}   
