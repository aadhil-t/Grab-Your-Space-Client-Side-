import axios from "axios";
import HubAdminRequest from "../Utils/HubAdminRequest"
const HubRequest = HubAdminRequest
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { config } from "dotenv";



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


export const HubCreate = async (values) => {
    try {
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            },
            withCredentials: true,
        };

        console.log(values, "entering HubCreate API");
        const response = await HubRequest.post('/createhub', values, config);
        
        // Check if the request was successful
        if (response.status === 200) {
            console.log("Hub created successfully:", response.data);
            return response.data; // Return the response data if needed
        } else {
            console.error("Hub creation failed with status:", response.status);
            throw new Error("Hub creation failed"); // Throw an error to be caught by the caller
        }
    } catch (error) {
        console.error("Error creating hub:", error);
        throw error; // Re-throw the error to be caught by the caller
    }
};


export const HubData = async()=>{
    try {
        console.log("enter to api hublist")
        const data = await HubRequest.get('/hubdata')
        console.log(data)
        return data
    } catch (error) {
     console.log(error)   
    }
}

export const BookedhistoryHubAdmin = async()=>{
    try {
        console.log("Entered at BookedhistoryHubAdmin Api")
        const data = await HubRequest.get('/bookedhistory')
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const AddOfferApi = async({values,hubId})=>{
    try {
        console.log(values,hubId,"Reached AddOfferApi")
        const data = await HubRequest.post('/addoffer', values, {
            params: {
                hubId: hubId
            }
        });
                console.log(data,"Data AddOfferApi")
        return data;
    } catch (error) {
        if (error.response && error.response.data && error.response.data.message) {
            toast.error(error.response.data.message);
        } else {
            toast.error("An error occurred while processing your request.");
        }
    }
}