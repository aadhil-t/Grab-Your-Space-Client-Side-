import * as Yup from "yup";

export const SignupSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be at most 20 characters")
    .trim()
    .matches(/^[^\d\s]+$/, "Name cannot contain numbers or whitespace")
    .required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your email"),
  mobile: Yup.number()
  .required("Please Enter Your Mobile Number")
  .positive("Mobile number must be positive")
  .integer("Mobile number must be an integer")
  .test(
    "len",
    "Mobile number must have 10 digits",
    (val) => val && val.toString().length === 10
  ),
  password: Yup.string().min(4).required("Please enter password"),
});

export const EditProfileSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please Enter Your Name"),
  mobile: Yup.string()
    .required("Please Enter Your Mobile Number")
    .matches(/^\d{10}$/, "Mobile number must have 10 digits"),
});

export const LoginShema = Yup.object({
  email: Yup.string().email().required("Please Enter Your email"),
  password: Yup.string().min(3).required("Please enter password"),
});

export const SignupOtpSchema = Yup.object({
  otp: Yup.string()
    .min(4, "otp should contain minimum 4 characters")
    .max(4, "otp should contain maximum 4 characters"),
});

export const ForgotMailSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your email"),
});

export const ChangepassSchema = Yup.object({
  password: Yup.string().min(3).required("Please enter password"),
  confirmpassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

export const OtppassSchema = Yup.object({
  otp: Yup.string()
    .min(4, "otp should contain minimum 4 characters")
    .max(4, "otp should contain maximum 4 characters"),
});

export const ChangeProPassSchema = Yup.object({
  changepassword :Yup.string().min(4).required("Please enter password"),
})

export const SettingNewPassSchema = Yup.object({
  Newpassword: Yup.string().min(3).required("Please enter password"),
  ConfirmPassword: Yup.string().oneOf(
    [Yup.ref("Newpassword"), null],
    "Passwords must match"
  ),
})

export const ReviewRatingSchema = Yup.object({
  rating: Yup.number()
  .required("Rating is required")
  .min(1, "Rating must be at least 1")
  .max(5, "Rating must be at most 5"),
review: Yup.string().required("Please Fill Something")
})

/////////////// HUB ADMIN VALIDATION ////////////////
export const HubAdminSignupSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  mobile: Yup.number()
    .required("Please Enter Your Mobile Number")
    .positive("Mobile number must be positive")
    .integer("Mobile number must be an integer")
    .test(
      "len",
      "Mobile number must have 10 digits",
      (val) => val && val.toString().length === 10
    ),
  password: Yup.string().min(3).required("Please Enter Your Password"),
});

export const HubAdminLoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(4).max(20).required("Please enter your password"),
});

export const HubCreateSchema =Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(20, "Name must be at most 20 characters")
    .trim()
    .matches(/^[^\d\s]+$/, "Name cannot contain numbers or whitespace")
    .required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter a Valid Email"),
  mobile: Yup.string()
    .required("Please Enter Your Mobile Number")
    .matches(/^\d{10}$/, "Mobile number must have 10 digits"),
  location: Yup.string().required("Please Select a Location"),
  seatcount: Yup.number()
    .positive("Please Enter a Positive Seat Count")
    .max(60, "Seat count must be less than or equal to 60")
    .required("Please Enter Seat Count"),
  price: Yup.number()
    .positive("Please Enter a Positive Seat Price")
    .max(1000, "Price must be less than or equal to 1000")
    .required("Please Enter Seat Price"),
});

export const EditHubAdminProfileSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please Enter Your Name"),
  mobile: Yup.number()
    .required("Please Enter Your Mobile Number")
    .positive("Mobile number must be positive")
    .integer("Mobile number must be an integer")
    .test(
      "len",
      "Mobile number must have 10 digits",
      (val) => val && val.toString().length === 10
    ),
});

export const AddOfferSchema = Yup.object({
  offername: Yup.string().min(2).max(20).required("Please Enter Your Name"),
  offerpercentage: Yup.number()
  .required("Please Enter Your Percentage")
  .positive("Percentage  must be positive")
  .integer("Percentage  must be an integer"),
  seatcount: Yup.number()
  .required("Please Enter Your Seat Count")
  .positive("Seat Count must be positive").max(10).min(2)
})