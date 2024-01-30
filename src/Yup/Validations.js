import * as Yup from "yup";

export const SignupSchema = Yup.object({
    name: Yup.string().min(2).max(20).required("Please Enter Your Name"),
    email: Yup.string().email().required("Please Enter Your email"),
    mobile: Yup.string()
      .required("Please Enter Your Mobile Number")
      .matches(/^\d{10}$/, "Mobile number must have 10 digits"),
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
  otp: Yup.string().min(4,"otp should contain minimum 4 characters").max(4,"otp should contain maximum 4 characters")
})


export const ForgotMailSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your email"),
})  


export const ChangepassSchema = Yup.object({
  password: Yup.string().min(3).required("Please enter password"),
  confirmpassword: Yup.string()
  .oneOf([Yup.ref('password'), null], 'Passwords must match')

})

export const OtppassSchema = Yup.object({
  otp: Yup.string().min(4,"otp should contain minimum 4 characters").max(4,"otp should contain maximum 4 characters")
})


/////////////// HUB ADMIN VALIDATION ////////////////
export const HubAdminSignupSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  mobile: Yup.number()
  .required("Please Enter Your Mobile Number")
  .positive("Mobile number must be positive")
  .integer("Mobile number must be an integer")
  .test('len', 'Mobile number must have 10 digits', val => val && val.toString().length === 10),
  password: Yup.string().min(3).required("Please Enter Your Password")
}); 


export const HubAdminLoginSchema = Yup.object({
  email: Yup.string().email().required("Please enter your email"),
  password: Yup.string().min(4).max(20).required("Please enter your password")
})

export const HubCreateSchema = Yup.object({
  name: Yup.string().min(2).max(20).required("Please Enter Your Name"),
  email: Yup.string().email().required("Please Enter Your Email"),
  mobile: Yup.number()
  .required("Please Enter Your Mobile Number")
  .positive("Mobile number must be positive")
  .integer("Mobile number must be an integer")
  .test('len', 'Mobile number must have 10 digits', val => val && val.toString().length === 10),
  location: Yup.string().required("Please Select a Location"),
  seatcount: Yup.number().required("Please Enter Seat Count"),
  price: Yup.number().required("Please Enter Seat Price"),
})

export const EditHubAdminProfileSchema = Yup.object({
  name : Yup.string().min(2).max(20).required("Please Enter Your Name"),
  mobile : Yup.number()
  .required("Please Enter Your Mobile Number")
  .positive("Mobile number must be positive")
  .integer("Mobile number must be an integer")
  .test('len', 'Mobile number must have 10 digits', val => val && val.toString().length === 10),
})