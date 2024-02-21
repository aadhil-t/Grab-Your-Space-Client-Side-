import { data } from "autoprefixer";
import axios from "axios";
import { toast } from "react-toastify";

export const userApi = axios.create({
  baseURL: import.meta.env.VITE_UserBaseUrl   
});

import userRequest from "../Utils/UserRequest";
console.log(userRequest,"fffffffffffffffffffffffffff");

export  const userSignup = async (data) => {
  try {
    alert('hh')
    console.log('hi');
    console.log(data,"in api");
  const datas = await userApi.post("/signup", data, {
    withCredentials: true,
  });
  console.log(datas,'anas')
  return datas;
  } catch (error) {
    console.log(error.response.data)
    toast(error.response.data.message)
  }
  
};


export const userLogin = async (loginData) => {
  try {
    const data = await userRequest.post('/login',loginData,{
withCredentials:true
    }) 
    return data
  } catch (error) {
    console.log(error.response.data,"")
    toast(error.response.data.message)
  }
}

export const Profileview = async ()=>{
  try {
    console.log("id")
     const Prodata = await userRequest.get(`/profile`);
     console.log(Prodata);
     return Prodata
  } catch (error) {
    console.log(error)
  }
}

export const UserProfileEditing =(data)=>{
  try {
    console.log("/editProfile",data)
    const Editdata = userRequest.put(`/editProfile`,data)
    return Editdata
  } catch (error) {
    console.log(error)
  }
}


export const UpdatedEdit =(data)=>{
  try {
    console.log("/editupdate",data)
    const Editdata = userApi.put(`/editupdate`,data,{
      withCredentials:true,
    })
    return Editdata
  } catch (error) {
    console.log(error)
  }
}

export const UserSignupWithGoogle = async (data)=>{
  try {
    const datas = await userApi.post("/googleSignup",data,{
      withCredentials:true
    })
    return datas
  } catch (error) {
    console.log(error.response.data)
    toast(error.response.data.message)
  }
 
}

export const SignupOtpVerify = (value,id)=>{
  try {
    console.log(id)
    value.id =id
    const datas =  userApi.post("/otpverified",value)
    return datas
  } catch (error) {
    console.log(error)
  }
}


export const ForgotPassword = (value)=>{
  try {
    console.log("Mail api kerii")
    const data = userApi.post('/forgotmail',value);
    return data
  } catch (error) {
    console.log(error)
  }
}


export const PassOtpVerify = async(value,id)=>{
  try {
    value.id = id
    console.log(id)
    console.log('rjrjrj');
    const datas = userApi.post("/passotverify",value);
    console.log(datas,"haiaiaiaiaai ")
      return datas
  } catch (error) {
    console.log(error)
  }
}


export const ChangePassword = async(value,id)=>{
  try {
    value.id = id
    console.log(id,"poooooo")
    const datas = await userApi.post("/changepass",value);
    return datas
  } catch (error) {
    console.log(error)
  }
}


export const HubList = async()=>{
  try {
    const data = await userRequest.get("/hublisting")
    console.log(data,"reached back")
    return data
  } catch (error) {
    console.log(error);
  }
}


export const Singlehub = async(objId)=>{
  try {
    console.log(objId,"entered to api singlehub")
    const data = await userRequest.get(`/singlehub/${objId.objId}/${objId.selectedDate}`)
    console.log(data,"data reached")
    return data
  } catch (error) {
    console.log(error)
  }
}


export const BookingApi = async(data)=>{
  try {
    console.log("enter in backend booking")
    console.log(data,"reached booking apiiiiiiiiiiii")
    const Data = await userRequest.post('/booking',data)
    console.log(Data,"reached booking api")
    return Data;
  } catch (error) {
    console.log(error)
  }
}


export const bookedData = async(bookedId)=>{
  try {
    console.log(bookedId,"reached to api booked d")
  const data = await userRequest.get(`/bookeddetails/${bookedId}`);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
}


export const updateStatus = async(id)=>{
  try {
    console.log("apiiiiiiii")
    const data = await userRequest.put("/updatepaystatus",id);
    console.log(data,"statusssssss")
    return data;
  } catch (error) {
   console.log(error) 
  }
}


export const Bookedhistory = async()=>{
  try {
    console.log("zzzzzzzzzzzzzzzzzzz")
    const data = await userRequest.get("/bookedhistory");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
  }
}


export const ChangeProPassword = async(values)=>{
  try {
    console.log(values,"oooooooo")
    console.log("reached in ChangeProPassword")
    const data = await userRequest.post("/changepropass",values);
    console.log(data);
    return data;
  } catch (error) {
    console.log(error)
  }
}

export const SetNewPassword = async(values)=>{
  try {
    console.log("reached in SetNewPassword ")
    const data = await userRequest.post("/setnewpass",values)
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const ResendOtp = async(id)=>{
  try {
    console.log("reached")
    const data = await userRequest.post("/resendotp",id)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const DpApi = async(formdata)=>{
  try {
    console.log("reached in dp API")
    const data = await userRequest.post("/dpchange",formdata,{
      withCredentials : true,
      headers : {
        "Content-Type" : "multipart/form-data"
      }
    });
    console.log(data,"dp changed")
    return data
  } catch (error) {
    console.log(error) 
  }
}