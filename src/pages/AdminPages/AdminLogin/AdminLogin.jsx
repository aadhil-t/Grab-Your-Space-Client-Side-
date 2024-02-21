import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useState } from "react";
import { Adminlogin } from "../../../Api/AdminApi";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {ToastContainer,toast} from 'react-toastify'
import { setUserDetails } from "../../../Redux/UserSlice/UsserSlice";
import 'react-toastify/dist/ReactToastify.css'

  export default function AdminLogin() {
    const [value,setValue] = useState({
        email:'',password:'',
       })
    const navigate= useNavigate()
    const dispatch= useDispatch()
    
    const handleAdminLogin = async(e)=>{
      e.preventDefault();
      try {
        const {email,password} = value
         console.log(value,"eeee")
        if(email.trim() === ''){
          toast('please enter your email')
        }else if(password.trim() === ''){
          toast('please enter your password')
        }
        else{
          const response = await Adminlogin(value);
          console.log(response,"Admin token")
          if(response.data.status){
            localStorage.setItem('admintoken',response.data.adminToken);
            dispatch(setUserDetails({
              id:response.data.adminData._id,
              name:response.data.adminData.name,
              mobile:response.data.adminData.mobile,
              email:response.data.adminData.email,
              is_admin:response.data.adminData.is_admin,
            }))
            navigate('/admin')
          }else{
            toast("email does not exist ")
            }
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    return (

        <div className=" grid grid-cols-2 bg-blue-500 h-[50rem] w-[70rem] mt-20 ml-96">
          <div className="Adminloginimg col-span-1 h-[50rem] w-[35rem]  ">
        
        </div>
        <div className="col-span-1 bg-opacity-100  bg-brown-50 h-[50rem] flex justify-center items-center">
      <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
         Admin Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to Login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleAdminLogin}>
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" name="email" label="Email" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} />
            <Input type="password" size="lg" name="password" label="Password" onChange={(e)=>setValue({...value,[e.target.name]:e.target.value})} />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6" fullWidth>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900">
              Sign In
            </a>
          </Typography>
        </form>
      <ToastContainer/>
      </Card>
      </div>
        </div>
    );
  }