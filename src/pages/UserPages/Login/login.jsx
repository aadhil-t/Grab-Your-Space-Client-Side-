import React, { useEffect, useState } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { userLogin } from "../../../Api/UserApi";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useGoogleLogin } from "@react-oauth/google";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import { setUserDetails } from "../../../Redux/UserSlice/UsserSlice";
import { LoginShema } from "../../../Yup/Validations";
import google from "../../../assets/UserAssets/google.png";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [guser, setGUser] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: LoginShema,

    onSubmit: async (values) => {
      const response = await userLogin(values);
      console.log(response,"kkkkkk")
      if (response.status) {
        console.log(response.status,"lollolol")
        const userDetails = {
          name: response.data.userData.name,
          email: response.data.userData.email,
        };
        dispatch(setUserDetails({ userInfo: userDetails }));
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
      toast(response.data.alert);
    },
  });

  const Glogin = useGoogleLogin({
    onSuccess: (codeResponse) => setGUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  // console.log(guser, "gggg");
  useEffect(() => {
    if (guser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${guser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${guser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res,"hhhh");
          userLogin({email:res.data.email,id:res.data.id}).then((response) => {
            if (response.data.status) {
              localStorage.setItem("token", response.data.token);
              dispatch(
                setUserDetails({
                  name:response.data.userData.name,
                  email:response.data.userData.email,
                  id:response.data.userData._id,
                })
              )
              navigate("/");
            } else {
              console.log(response);
              toast.error(response.data.message);
            }
          });
        })
        .catch((err) => console.log(err));
    }
  }, [guser]);

  return (
    <div className=" grid grid-cols-2 bg-blue-500 h-[50rem] w-[70rem] mt-20 ml-96">
      <div className="loginimg col-span-1 h-[50rem] w-[35rem]  "></div>

      {/* Right side with the login form, centered horizontally and vertically */}
      <div className="col-span-1 bg-opacity-100  bg-brown-50 h-[50rem] flex justify-center items-center">
        <Card color="transparent" className=" shadow-none">
          <div>
            <Typography variant="h4" color="blue-gray">
              Login
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              Enter your details to Login.
            </Typography>
            <div className="flex justify-center items-center">
              <form
                className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
                onSubmit={handleSubmit}
              >
                <div className="mb-4 flex flex-col gap-6">
                  <Input
                    size="lg"
                    name="email"
                    label="Email"
                    variant="standard"
                    onChange={handleChange}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <div className="text-red-500 text-sm ">{errors.email}</div>
                  )}

                  <Input
                    type="password"
                    size="lg"
                    name="password"
                    label="Password"
                    variant="standard"
                    onChange={handleChange}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <div className="text-red-500 text-sm ">
                      {errors.password}
                    </div>
                  )}
                </div>

                <Button type="submit" className="mt-6" fullWidth>
                  Register
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Forgot Password?{" "}
                  <Link to={"/forgot"}>
                    <a href="#" className="font-medium text-gray-900">
                      Click Me
                    </a>
                  </Link>
                </Typography>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Already have an account?{" "}
                  <Link to={"/signup"}>
                    <a href="#" className="font-medium text-gray-900">
                      Sign In
                    </a>
                  </Link>
                </Typography>
              </form>
            </div>
          </div>
          <ToastContainer />

          <div className="flex items-start justify-between">
            <img
              src={google}
              className="h-12 w-12 mt-4 ml-40 cursor-pointer rounded-full bg-white hover:bg-blue-gray-900 p-2"
              onClick={() => Glogin()}
            />
          </div>
        </Card>
      </div>
    </div>
  );
}
