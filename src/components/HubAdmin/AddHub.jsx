import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  select,
} from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Formik, useFormik } from "formik";
import { HubCreateSchema } from "../../Yup/Validations";
import { HubCreate } from "../../Api/HubAdminApi";
import { useNavigate } from "react-router-dom";

export default function AddhubForm() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    location: "",
    seatcount: "",
    price: "",
    images: [],
  };

  const { values, errors, touched, handleSubmit, handleChange, setFieldValue } =
    useFormik({
      initialValues: initialValues,
      validationSchema: HubCreateSchema,
      onSubmit: async (values, { resetForm }) => {
        try {
          const formData = new FormData();
          formData.append("name",values.name);
          formData.append("email",values.email);
          formData.append("mobile",values.mobile);
          formData.append("location",values.location);
          formData.append("seatcount",values.seatcount);
          formData.append("price",values.price);
        
          for(let i=0; i< values.images.length; i++){
            formData.append("images",values.images[i])
          }
          
          console.log(formData,"registration")
          const response = await HubCreate(formData);
          if (response) {
            resetForm(initialValues);
            handleOpen();
          }
        } catch (error) {
          console.log(error)
        }
      },
    });

  const handleFileChange = (event) => {
    const selectedFiles = Array.from(event.currentTarget.files);
    console.log("this is the images", selectedFiles);
    setFieldValue("images", selectedFiles);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        className="flex items-center justify-center rounded-2xl  bg-black w-28 h-11 hover:scale-105 shadow-2xl shadow-white"
      >
        Add Hub
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className=" bg-transparent shadow-none"
      >
        <form onSubmit={handleSubmit} action="">
          <Card className="mx-auto w-full max-w-[30rem]">
            <CardBody className="flex flex-col gap-4 overflow-y-auto max-h-[700px]">
              <Typography variant="h4" color="blue-gray">
                Create your Hub
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Enter your Hub details.
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Hub Owner Name
              </Typography>
              <Input
                label="Name"
                size="lg"
                name="name"
                onChange={handleChange}
                value={values.name}
              />
              {touched.name && errors.name && (
                <div className="text-red-500 text-sm">{errors.name}</div>
              )}

              <Typography className="-mb-2" variant="h6">
                Hub Owner Email
              </Typography>
              <Input
                label="Email"
                size="lg"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              {touched.email && errors.email && (
                <div className="text-red-500 text-sm">{errors.email}</div>
              )}

              <Typography className="-mb-2" variant="h6">
                Hub Owner Contact
              </Typography>
              <Input
                label="Contact"
                size="lg"
                name="mobile"
                onChange={handleChange}
                value={values.mobile}
              />
              {touched.mobile && errors.mobile && (
                <div className="text-red-500 text-sm">{errors.mobile}</div>
              )}

              <Typography className="-mb-2" variant="h6">
                Hub Location
              </Typography>
              <div className="w-72">
                <select
                  name="location"
                  onChange={handleChange}
                  value={values.location}
                  className="border rounded w-full py-2 px-3"
                >
                  <option value="">Select Location</option>
                  <option value="Bangalore">Bangalore</option>
                  <option value="Calicut">Calicut</option>
                  <option value="Kochi">Kochi</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Kannur">Kannur</option>
                </select>
              </div>
              {touched.location && errors.location && (
                <div className="text-red-500 text-sm">{errors.location}</div>
              )}

              <Typography className="-mb-2" variant="h6">
                Select Image
              </Typography>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChange(e)}
                style={{ display: "none" }}
                id="image-selector"
              />
      
              <label htmlFor="image-selector" className="cursor-pointer">
                <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 mx-auto text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <p className="mt-1 text-sm text-gray-600 text-center">
                    {values.images ? values.images.name : "No image selected"}
                  </p>
                </div>
              </label>

              <Typography className="-mb-2" variant="h6">
                Attach Certificate
              </Typography>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => handleFileChange(e)}
                style={{ display: "none" }}
                id="image-selector"
              />
      
              <label htmlFor="image-selector" className="cursor-pointer">
                <div className="border border-gray-300 rounded-lg p-4 hover:bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="h-6 w-6 mx-auto text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                  <p className="mt-1 text-sm text-gray-600 text-center">
                    {values.images ? values.images.name : "No image selected"}
                  </p>
                </div>
              </label>

              <Typography className="-mb-2" variant="h6">
                Seat Count
              </Typography>
              <Input
                label="Count"
                size="lg"
                name="seatcount"
                onChange={handleChange}
                value={values.seatcount}
              />
              {touched.seatcount && errors.seatcount && (
                <div className="text-red-500 text-sm">{errors.seatcount}</div>
              )}

              <Typography className="-mb-2" variant="h6">
                Price per seat
              </Typography>
              <Input
                label="price"
                size="lg"
                name="price"
                onChange={handleChange}
                value={values.price}
              />
              {touched.price && errors.price && (
                <div className="text-red-500 text-sm">{errors.price}</div>
              )}
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth>
                Create
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Dialog>
    </>
  );
}
