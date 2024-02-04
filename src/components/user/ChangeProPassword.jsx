import React from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ChangeProPassword } from "../../Api/UserApi";
import { ChangeProPassSchema } from "../../Yup/Validations";

export default function ProfileChangePassword() {
  const navigate = useNavigate();
  const initialValues ={
    changepassword:""
  };

  const {
    values,touched,errors,handleChange,handleSubmit
  } = useFormik({
    initialValues : initialValues,
    validationSchema : ChangeProPassSchema,
    onSubmit: async(values)=>{
      console.log("ChangeProPassword")
      const response = await ChangeProPassword(values);
      if(response){
        toast.success("Password changed successfully");
        navigate("/setnewpass")
      }else{
        toast.error(response.data.alert);
      }
    }
  })

  return (
    
    <div className="grid grid-cols-2 bg-blue-500 h-[50rem] w-[70rem] mt-20 ml-96">
      <div className="Changeproimg col-span-1 h-[50rem] w-[35rem]"></div>

      <div className="col-span-1 bg-opacity-100 bg-white h-[50rem] flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Change Password
          </Typography>

          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Enter Your Existing Password
              </Typography>
              <Input
                name="changepassword"
                size="lg"
                placeholder="***********"
                onChange={handleChange}
                value={values.changepassword}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {touched.changepassword && errors.changepassword && (
                <div className="text-red-500 text-sm ">{errors.changepassword}</div>
              )}
            </div>

            <Button className="mt-6" fullWidth type="submit">
              Submit
            </Button>

            <Typography color="gray" className="mt-4 text-center font-normal">
              <a href="/profile" className="font-medium text-gray-900">
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
