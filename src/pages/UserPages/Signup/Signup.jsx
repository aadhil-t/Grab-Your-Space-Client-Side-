import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { UserSignupWithGoogle, userSignup } from "../../../Api/UserApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserDetails } from "../../../Redux/UserSlice/UsserSlice";
import { Link } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google"; 
import axios from "axios";
import google from "../../../assets/UserAssets/google.png";
import { useFormik } from "formik";
import { SignupSchema } from "../../../Yup/Validations";
import SignupOtp from "../SignupOtp/SignupOtp";
import { GenerateSuccess } from "../../../Toast/toast";

export default function SimpleRegistrationForm() {

  const [Guser, setGoogleUser] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    mobile: "",
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
    validationSchema: SignupSchema,
    onSubmit: async (values) => {
      const response = await userSignup(values);
      console.log("aadhil");

      console.log(response);
      if (response.status == 200) {
          // localStorage.setItem("token", response.data.token);
        dispatch(
          setUserDetails({
            id: response.data._id,
            name: response.data.name,
            mobile: response.data.mobile,
            email: response.data.email,
          })
        );
        GenerateSuccess(response.data.message)
        navigate(`/signupotp/${response.data._id}`);
      }else{
      }

    },
  });



  const Googlesignin = useGoogleLogin({
    onSuccess: (codeResponse) => setGoogleUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  console.log(Guser, "gggg");
  useEffect(() => {
    if (Guser) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${Guser.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${Guser.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
          UserSignupWithGoogle(res.data).then((response) => {
            if (response.data.created) {
              const userDetails = {
                name: response.data.user.name,
                email: response.data.user.email,
              };
              localStorage.setItem("token", response.data.token);
              dispatch(setUserDetails({userInfo: userDetails}))
              navigate("/");
            } else {
              console.log(response);
              toast.error(response.data.message);
            }
          });
        })
        .catch((err) => console.log(err));
    }
  }, [Guser]);


  return (
    <div className="flex h-screen BackgroundSigninimg ">
    <div className="grid grid-cols-2 bg-blue-gray-300 h-[50rem] w-[70rem] mt-20 ml-96 bg-opacity-5  ">
      <div className="signinimg col-span-1 h-[50rem] w-[35rem] "></div>

      <div className="col-span-1 bg-brown-50  h-[50rem] w-[38rem] flex justify-center items-center bg-opacity-40 ">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Enter your details to register.
          </Typography>
          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onClick={handleSubmit}
          >
            <div className="mb-4 flex flex-col gap-6">
              <Input
                name="name"
                size="lg"
                label="Name"
                variant="standard"
                onChange={handleChange}
                value={values.name}
              />  
              {touched.name && errors.name && (
                <div className="text-red-500 text-sm ">{errors.name}</div>
              )}
              <Input
                name="email"
                size="lg"
                label="Email"
                variant="standard"
                onChange={handleChange}
                value={values.email}
              />
              {touched.email && errors.email && (
                <div className="text-red-500 text-sm ">{errors.email}</div>
              )}
              <Input
                name="mobile"
                size="lg"
                label="mobile"
                variant="standard"
                onChange={handleChange}
                value={values.mobile}
              />
              {touched.mobile && errors.mobile && (
                <div className="text-red-500 text-sm ">{errors.mobile}</div>
              )}
              <Input
                name="password"
                type="password"
                size="lg"
                label="Password"
                variant="standard"
                onChange={handleChange}
                value={values.password}
              />
              {touched.password && errors.password && (
                <div className="text-red-500 text-sm ">{errors.password}</div>
              )}
            </div>
       
            <Button className="mt-6" type="submit" fullWidth>
              Register
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <Link to={"/login"}>
                <a href="" className="font-medium text-gray-900">
                  Log In
                </a>
              </Link>
            </Typography>

            <div className="flex items-start justify-between">
              <img
                src={google}
                className="h-12 w-12 mt-4 ml-40 cursor-pointer rounded-full bg-white hover:bg-blue-gray-900 p-2"
                onClick={() => Googlesignin()}
              />
            </div>
          </form>
        </Card>
        <ToastContainer />
      </div>
    </div>
    </div>
  );
}
