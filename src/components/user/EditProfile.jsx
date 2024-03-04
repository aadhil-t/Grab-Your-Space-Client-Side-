import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { UserProfileEditing } from "../../Api/UserApi";
import { EditProfileSchema } from "../../Yup/Validations";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import { GenerateSuccess } from "../../Toast/toast";

export default function ProfileEdit({ data, refetch }) {
  const [open, setOpen] = React.useState(false);

  useParams
  const initialValues = {
    name: data.name || "", // Initialize with data if available
    mobile: data.mobile || "", // Initialize with data if available
  };

  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: EditProfileSchema,
    onSubmit: async (values) => {
      try {
        const response = await UserProfileEditing(values);
        if(response){
          refetch()
          // Handle the response or update your UI as needed
          console.log(response,"edited");
          setOpen(false); // Close the dialog after successful submission
        }
      } catch (error) {
        // Handle any errors here
        console.error(error);
      }
    },
  });

  const handleOpen = () => setOpen(true);

  return (
    <>
      <Button onClick={handleOpen}>Edit Profile</Button>
      <Dialog
        size="sm"
        open={open}
        onClose={() => setOpen(false)} // Close the dialog when the "X" button is clicked
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader className="text-center">
            <Typography variant="h4" color="blue-gray">
              Profile Edit
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your details to edit your profile.
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Typography className="-mb-2" variant="h6">
              Your Name
            </Typography>
            <Input
              name="name"
              label="Name"
              value={values.name}
              size="lg"
              onChange={handleChange}
            />
            {touched.name && errors.name && (
              <div className="text-red-500 text-sm">{errors.name}</div>
            )}

            <Typography className="-mb-2" variant="h6">
              Your Mobile
            </Typography>
            <Input
              name="mobile"
              label="Mobile"
              value={values.mobile}
              size="lg"
              onChange={handleChange}
            />
            {touched.mobile && errors.mobile && (
              <div className="text-red-500 text-sm">{errors.mobile}</div>
            )}
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              variant="gradient"
              onClick={handleSubmit}
              fullWidth
              disabled={isSubmitting}
            >
              Update
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
