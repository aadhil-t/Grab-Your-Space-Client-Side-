import React, { useEffect } from "react";
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
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { EditHubAdminProfileSchema } from "../../Yup/Validations";
import { EditHubAdminPro } from "../../Api/HubAdminApi";

export default function EditHubAdminProfile({data,onDataUpdate}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const initialValues = {
    name:data.name||"",
    mobile:data.mobile||"",
  }

  const {
    touched,
    errors,
    values,
    handleChange,
    handleSubmit,
    setValues,
  } = useFormik ({
    initialValues : initialValues,
    validationSchema : EditHubAdminProfileSchema,
    onSubmit : async(values)=>{
        console.log(values,"enter in edit formik ");
        const response = await EditHubAdminPro(values)
        onDataUpdate(true)
    }
  })

  useEffect(() => {
    // Set form values when data prop changes
    setValues({
      name: data.name || "",
      mobile: data.mobile || "",
    });
  }, [data]); 


  return (
    <>
      <Button
        className="flex items-center justify-center rounded-2xl text-white bg-black w-32 h-11 hover:scale-105 shadow-2xl shadow-white"
        onClick={handleOpen}
      >

        Edit Profile
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <form className="" onClick={handleSubmit}>
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Edit Profile
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter your Details
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Your Name
            </Typography>
            <Input label="Name" size="lg" 
                name="name"
                onChange={handleChange}
                value={values.name}
            />
            {touched.name && errors.name &&(
                <div className="text-red-500 text-sm">{errors.name}</div>
            )}

            <Typography className="-mb-2" variant="h6">
              Your Contact
            </Typography>
            <Input label="Contact" size="lg" 
                name="mobile"
                onChange={handleChange}
                value={values.mobile}
            />
             {touched.mobile && errors.mobile &&(
                <div className="text-red-500 text-sm">{errors.mobile}</div>
            )}
            
          </CardBody>
          <CardFooter className="pt-0">
            <Button type="submit" variant="gradient" onClick={handleOpen} fullWidth>
              submit
            </Button>
          </CardFooter>
        </Card>
        </form>
      </Dialog>
    </>
  );
}
