import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { AddOfferSchema } from "../../Yup/Validations";
import { AddOfferApi } from "../../Api/HubAdminApi";
import { GenerateSuccess } from "../../Toast/toast";

function AddOffer({hubId, hubAdminId}) {
  console.log(hubId,hubAdminId,"jjjjj")
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  const initialValues = {
    offername: "",
    offerpercentage:"",
    seatcount: "",
  };

  const { touched, errors, values, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: AddOfferSchema,
    onSubmit: async (values) => {
      const response = await AddOfferApi({ values: { ...values, hubId,hubAdminId } });
      if(response){
       GenerateSuccess(response.data.message);
      }
    },
  });

  return (
    <div>
      <>
        <Button
          className="flex items-center justify-center rounded-2xl text-white bg-black w-32 h-11 hover:scale-105 shadow-2xl shadow-white"
          onClick={handleOpen}
        >
          Add Offer
        </Button>
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <form onClick={handleSubmit}>
            <Card className="mx-auto w-full max-w-[24rem]">
              <CardBody className="flex flex-col gap-4">
                <Typography
                  className="flex justify-center"
                  variant="h4"
                  color="blue-gray"
                >
                  ADD OFFER
                </Typography>
                <Typography className="-mb-2" variant="h6">
                  Offer Name
                </Typography>
                <Input
                  label="Name"
                  size="lg"
                  name="offername"
                  onChange={handleChange}
                  value={values.offername}
                />
                  {touched.offername && errors.offername &&(
                <div className="text-red-500 text-sm">{errors.offername}</div>
            )}


                <Typography className="-mb-2" variant="h6">
                  Offer Percentage
                </Typography>
                <Input
                  label="Percentage"
                  size="lg"
                  name="offerpercentage"
                  onChange={handleChange}
                  value={values.offerpercentage}
                />
                      {touched.offerpercentage && errors.offerpercentage &&(
                <div className="text-red-500 text-sm">{errors.offerpercentage}</div>
            )}

                <Typography className="-mb-2" variant="h6">
                  Seats Count
                </Typography>
                <Input
                  label="Count"
                  size="lg"
                  name="seatcount"
                  onChange={handleChange}
                  value={values.seatcount}
                />
                      {touched.seatcount && errors.seatcount &&(
                <div className="text-red-500 text-sm">{errors.seatcount}</div>
            )}

              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  variant="gradient"
                  onClick={handleOpen}
                  type="submit"
                  fullWidth
                >
                  Create
                </Button>
              </CardFooter>
            </Card>
          </form>
        </Dialog>
      </>
    </div>
  );
}

export default AddOffer;
