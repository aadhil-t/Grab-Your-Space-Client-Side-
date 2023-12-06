import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
import { useFormik } from "formik";
import { HubAdminSignupSchema } from "../../../Yup/Validations";
import { HubAdminSignup } from "../../../Api/HubAdminApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
  export default function HubAdminSignupForm() {

    const navigate = useNavigate();

    const initialValues = {
        name:"",
        email:"",
        mobile:"",
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
        validationSchema: HubAdminSignupSchema,
        onSubmit : async (values)=>{
            const response = await HubAdminSignup(values);
            console.log(response,"response reach"); 
            if(response.status == 200){
                setTimeout(() => {
                    toast.success(response.data.message)
                }, 500);
            }
            navigate('/hub/emailverify')
        }
    })
    return (
        <div className="grid grid-cols-2 bg-blue-gray-300 h-[50rem] w-[70rem] mt-20 ml-96">
            <div className="signinimg col-span-1 h-[50rem] w-[35rem] "></div>

            <div className="col-span-1 bg-brown-50 h-[50rem] w-[38rem] flex justify-center items-center"> 
       <Card color="transparent" shadow={false}>
        <Typography variant="h4" color="blue-gray">
        Hub Admin Signup
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form   
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onClick={handleSubmit} >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              name="name"
              size="lg"
              placeholder="name@mail.com"
              onChange={handleChange}
              value={values.name}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {touched.name && errors.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
            )}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              name="email"
              size="lg"
              placeholder="name@mail.com"
              onChange={handleChange}
              value={values.email}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {touched.email && errors.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
            )}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Contact
            </Typography>
            <Input
              name="mobile"
              size="lg"
              placeholder="0123"
              onChange={handleChange}
              value={values.mobile}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
             {touched.mobile && errors.mobile && (
                <div className="text-red-500 text-sm">{errors.mobile}</div>
            )}

            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Password
            </Typography>
            <Input
              name="password"
              type="password"
              size="lg"
              placeholder="********"
              onChange={handleChange}
              value={values.password}
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            {touched.password && errors.password && (
                <div className="text-red-500 text-sm">{errors.password}</div>
            )}
          </div>
         
          <Button className="mt-6" type="submit" fullWidth >
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{" "}
            {/* <a href="/login" className="font-medium text-gray-900">
              Sign In
            </a> */}
            <Link to="/hub/login" className="font-medium text-gray-900">
             Log In
            </Link>
          </Typography>
        </form>
      </Card>
       <ToastContainer/>
      </div>
      </div>
    );
  }