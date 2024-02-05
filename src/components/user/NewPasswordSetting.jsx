import React from "react";
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { SetNewPassword } from "../../Api/UserApi";
import { SettingNewPassSchema } from "../../Yup/Validations";

export default function SettingNewPassword() {
  const navigate = useNavigate();

  const initialValues = {
    Newpassword: "",
    ConfirmPassword: "",
  };

  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: SettingNewPassSchema,
    onSubmit: async (values) => {
      const response = await SetNewPassword(values);
      if (response) {
        navigate("/login");
      } else {
        toast(response.data.alert);
      }
    },
  });

  return (
    <div className="flex h-screen ">
    <div className="grid grid-cols-2 bg-blue-500 h-[50rem] w-[70rem] mt-28 ml-96">
      <div className="Changeproimg col-span-1 h-[50rem] w-[35rem]"></div>

      <div className="col-span-1 bg-opacity-100 bg-white h-[50rem] flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Create New Password
          </Typography>

          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Enter Your New Password
              </Typography>
              <Input
                name="Newpassword"
                size="lg"
                placeholder="***********"
                onChange={handleChange}
                value={values.Newpassword}
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {touched.Newpassword && errors.Newpassword && (
                <div className="text-red-500 text-sm">{errors.Newpassword}</div>
              )}
            </div>
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Confirm Your Password
              </Typography>
              <Input
                name="ConfirmPassword"
                size="lg"
                onChange={handleChange}
                value={values.ConfirmPassword}
                placeholder="***********"
                className="!border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              {touched.ConfirmPassword && errors.ConfirmPassword && (
                <div className="text-red-500 text-sm">
                  {errors.ConfirmPassword}
                </div>
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
      </div>
    </div>
    </div>
  );
}
