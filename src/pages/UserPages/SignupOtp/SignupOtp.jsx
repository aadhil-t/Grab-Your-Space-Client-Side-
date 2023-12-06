
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { useSelector } from "react-redux"
import { SignupOtpVerify } from "../../../Api/UserApi";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { SignupOtpSchema } from "../../../Yup/Validations";

export default function SignupOtp() {

  const navigate = useNavigate()


    const userData = useSelector((state)=>state.user);
    console.log(userData,"ttttt")

    const {id} = useParams();
 console.log(id)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
   
  //   console.log("Submitted OTP:", otp,userData.id);
  //   // Reset the OTP input field
  //   const userData = 
  //   setOtp("");
  // };
  

  const initialValues={
    otp:"",
    id:""
  }
  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,

  } = useFormik({
    initialValues:initialValues,
    validationSchema: SignupOtpSchema,
    onSubmit: async(values)=>{
      const response = await SignupOtpVerify(values,id); 
      console.log("koiiii in oyp")
      console.log(response.data,"urapalle")

      if(response){
         localStorage.setItem("token", response.data);
          navigate("/")
        }
        else{
          toast(response.data.alert)
        }
    }
  })
    

    return (
      <div className=" grid grid-cols-2 bg-blue-500 h-[50rem] w-[70rem] mt-20 ml-96">
            <div className="forgot col-span-1 h-[50rem] w-[35rem]  ">

            </div>

            <div className="col-span-1 bg-opacity-100  bg-white h-[50rem] flex justify-center items-center">
     <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Enter your OTP
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
      </Typography>

      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
  <div className="mb-1 flex flex-col gap-6">
    <Typography variant="h6" color="blue-gray" className="-mb-3">
      Your OTP
    </Typography>
    <Input
  name="otp"
  size="lg"
  placeholder="Enter OTP"
  className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
  onChange={handleChange}
  value={values.otp}
/>
   {touched.otp && errors.otp && (
                <div className="text-red-500 text-sm ">{errors.otp}</div>
              )}
  </div>

  <Button className="mt-6" fullWidth type="submit">
    Submit
  </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
                
          <a href="/login" className="font-medium text-gray-900">
            Back
          </a>
        </Typography>
      </form>
    </Card>
    <ToastContainer/>
    </div>
    </div>
  );
}