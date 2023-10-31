import { data } from "autoprefixer";
import axios from "axios";
import { toast } from "react-toastify";

export const userApi = axios.create({
  baseURL: `http://localhost:4000`    
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


export const userLogin = (loginData) => {
  try {
    const data = userApi.post('/login',loginData)
    return data
  } catch (error) {
    console.log(error)
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

export const UserSignupWithGoogle = (data)=>{
  return userApi.post("/googleSignup",data,{
    withCredentials:true
  })
}

export const SignupOtpVerify = (value,id)=>{
  try {
    value.id =id
    const datas = userApi.post("/otpverified",value)
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