import { Card, Input, Button, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { ResendOtp, SignupOtpVerify } from "../../../Api/UserApi";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SignupOtpSchema } from "../../../Yup/Validations";
import { useEffect, useState } from "react";
import { GenerateSuccess } from "../../../Toast/toast";

export default function SignupOtp() {
  const navigate = useNavigate();

  const userData = useSelector((state) => state.user);
  console.log(userData, "ttttt");

  const { id } = useParams();
  console.log(id);

  const [timer, setTimer] = useState(60); // Initial timer value in seconds
  const [isResendEnabled, setResendEnabled] = useState(false);

  useEffect(() => {
    let interval;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setResendEnabled(true);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timer]);

  const initialValues = {
    otp: "",
    id: "",
  };
  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: SignupOtpSchema,
    onSubmit: async (values) => {
      const response = await SignupOtpVerify(values, id);
      console.log("koiiii in oyp");
      console.log(response.data, "urapalle");

      if (response) {
        GenerateSuccess(response.data.message)
        localStorage.setItem("token", response.data);
        navigate("/");
      } else {
      }
    },
  });

  const handleResend = async () => {
    const response = await ResendOtp({id}); // API function for resending OTP
    if (response) {
      setTimer(60); // Reset the timer
      setResendEnabled(false);
      GenerateSuccess(response.data.message)
    } else {
    }
  };

  return (
    <div className=" grid grid-cols-2 bg-blue-500 h-[50rem] w-[70rem] mt-20 ml-96">
      <div className="forgot col-span-1 h-[50rem] w-[35rem]  "></div>

      <div className="col-span-1 bg-opacity-100  bg-white h-[50rem] flex justify-center items-center">
        <Card color="transparent" shadow={false}>
          <Typography variant="h4" color="blue-gray">
            Enter your OTP
          </Typography>
          <Typography color="gray" className="mt-1 font-normal"></Typography>

          <form
            className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
            onSubmit={handleSubmit}
          >
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

          {isResendEnabled ? (
            <Button
              className="mt-4"
              fullWidth
              color="blue"
              onClick={handleResend}
            >
              Resend OTP
            </Button>
          ) : (
            <Typography color="gray" className="mt-4 text-center font-normal">
              Resend OTP in {timer} seconds
            </Typography>
          )}
        </Card>
        <ToastContainer />
      </div>
    </div>
  );
}
