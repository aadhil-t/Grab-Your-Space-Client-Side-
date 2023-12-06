import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useFormik } from "formik";
import { HubAdminLoginSchema } from "../../../Yup/Validations";
import { HubAdminLogin } from "../../../Api/HubAdminApi";
import dispatch from "dispatch";
import { setUserDetails } from "../../../Redux/UserSlice/UsserSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
   
  export default function HubAdminLoginForm() {

    const navigate = useNavigate()

    const initialValues={
        email:"",
        password:"",
    };

    const {
        touched,
        errors,
        values,
        handleSubmit,
        handleChange,

    } = useFormik({
        initialValues : initialValues,
        validationSchema : HubAdminLoginSchema,
        onSubmit: async(values)=>{
            const response = await HubAdminLogin(values);
            if(response.status == 200){
                localStorage.setItem("hubtoken",response.data.hubadmintoken);
                console.log(response.data.message,'is working 200')
               navigate('/hub/dashboard')
             
              
               
            }
        }
    })
    return (
        <div className="grid grid-cols-2 bg-blue-gray-300 h-[50rem] w-[70rem] mt-20 ml-96">
            <div className="signinimg col-span-1 h-[50rem] w-[35rem] "></div>

            <div className="col-span-1 bg-brown-50 h-[50rem] w-[38rem] flex justify-center items-center"> 

       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
        Hub Admin Login
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>

        <form
         className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onClick={handleSubmit}>

          <div className="mb-1 flex flex-col gap-6">
        
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
            name="email"
              size="lg"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={values.email}
              onChange={handleChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {touched.email && errors.email &&(
                <div className=" text-red-500 text-sm">{errors.email}</div>
            )}
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
            name="password"
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              value={values.password}
              onChange={handleChange}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            { touched.password && errors.password &&(
                <div className="text-red-500 text-sm">{errors.password}</div>
            )}
          </div>
         
          <Button className="mt-6"  type="submit" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            if you don't have an account?{" "}
            {/* <a href="/signup" className="font-medium text-gray-900">
              Sign In
            </a> */}
            <Link to="/hub/signup" className="font-medium text-gray-900">
                Sign up
            </Link>
          </Typography>
        </form>
      </Card>
      </div>
      <ToastContainer/>
      </div>
    );
  }