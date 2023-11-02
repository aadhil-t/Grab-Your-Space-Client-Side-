import { data } from "autoprefixer";
import axios from "axios";
import { toast } from "react-toastify";

export const userApi = axios.create({
  baseURL: import.meta.env.VITE_UserBaseUrl   
});


export  const userSignup = async (data) => {
  try {
    console.log(data);
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
    console.log(loginData)
    const data = await userApi.post('/login',loginData,{

    })
    return data
  } catch (error) {
    console.log(error,"mmmm")
    console.log(error.response.data,"")
    toast(error.response.data.message)
  }
}

export const Profileview = (id)=>{
  try {
     const Prodata = userApi.get(`/profile/${id}`,{
      withCredentials:true
     });
     return Prodata
  } catch (error) {
    console.log(error)
  }
}

export const UserProfileEditing =(data)=>{
  try {
    console.log("/editProfile",data)
    const Editdata = userApi.put(`/editProfile`,data,{
      withCredentials:true,
    })
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