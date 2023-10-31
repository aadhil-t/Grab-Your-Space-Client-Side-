import {
    Card,
    Input,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import { useState } from "react";
  import { useFormik } from "formik";
  import { ChangepassSchema } from "../../../Yup/Validations";
  import { toast } from "react-toastify";
  import { useNavigate } from "react-router-dom";
//   import {changepass}

  export default function ChangePassword() {
  
    const [otpVisible, setOtpVisible] = useState(false); 
    const navigate = useNavigate();
  
    // const handleEmailSubmit = async () => {
    //   try {    
    //     ForgotPassword();
    //   } catch (error) {
    //     console.log(error)
    //   }
    // };
  
  
    
    const initialValues={
      password:"",
     
    }
    const {
      values,
      errors,
      touched,
      emailSent,
      handleSubmit,
      handleChange,
  
    } = useFormik({
      initialValues:initialValues,
      validationSchema:ChangepassSchema,
      onSubmit: async(values)=>{
        console.log("aaaaaaaaaaa")
        const response = await changepass(values); 
        console.log("koiiii")
        console.log(response.data,"otp ill keriii")
  
        if(response){
           localStorage.setItem("token", response.data.token);
            // navigate("/")
            setOtpVisible(true); 
          }
          else{
            toast(response.data.alert)
          }
      }
    })
      
  
    return (
      <div className="grid grid-cols-2 bg-blue-500 h-[50rem] w-[70rem] mt-20 ml-96">
        <div className="forgot col-span-1 h-[50rem] w-[35rem]"></div>
  
        <div className="col-span-1 bg-opacity-100 bg-white h-[50rem] flex justify-center items-center">
          <Card color="transparent" shadow={false}>
            <Typography variant="h4" color="blue-gray">
              Enter your New Password
            </Typography>
  
            <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
              <div className="mb-1 flex flex-col gap-6">
                <Typography variant="h6" color="blue-gray" className="-mb-3">
                  Your Password
                </Typography>
                <Input
                  name="password"
                  size="lg"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  value={values.password}
                  className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                 {touched.password && errors.password && (
                  <div className="text-red-500 text-sm ">{errors.password}</div>
                )}
              </div>
  
              <Button
                className="mt-2"
                fullWidth
                color="black"
                type="submit"
              >
                Submit
              </Button>
  
              <Typography color="gray" className="mt-4 text-center font-normal">
                <a href="/login" className="font-medium text-gray-900">
                  Back
                </a>
              </Typography>
            </form>
          </Card>
        </div>
      </div>
    );
  }
  