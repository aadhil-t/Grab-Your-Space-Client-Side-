import { LockClosedIcon } from "@heroicons/react/24/solid";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dialog,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from "@material-tailwind/react";
import { lightGreen } from "@mui/material/colors";
import { current } from "@reduxjs/toolkit";
import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateStatus } from "../../Api/UserApi";

const CheckoutForm = ({fee,id}) => {
  const [open, setOpen] = useState(false);
  const stripe = useStripe()
  const elements = useElements()
  const [message, setMessage] = useState(null);
  const [isLoading , setLoading] = useState(false);
  const navigate = useNavigate()
  const handleOpen = () => setOpen((curr) => !curr);
    

  const handleSubmit = async(e)=>{
    e.preventDefault()
    if(!stripe || !elements ){
        return 
    }
    setLoading(true)
    const {error, paymentIntent} = await stripe.confirmPayment({
        elements,
        confirmParams:{},
        redirect:"if_required"  
    })
    console.log(paymentIntent, id,"payyyyyyyyyyy")
    if(paymentIntent){
       const status = await updateStatus({id})
       console.log(status,"xxxxxxxxxxxx")
        navigate("/success")
    }
  }

  
  const paymentElementOptions = {
    layout: "tabs",
  };

  return (
    <>
    <div className="flex justify-center">
      <Button className="m-3 w-full shadow-lg rounded-lg bg-black transition duration-300 transform hover:scale-105 hover:shadow-xl " onClick={handleOpen}>
        procced
      </Button>
    </div>

      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="w-full max-w-[24rem] rounded-none">
          <CardHeader
            floated={false}
            shadow={false}
            className="m-0 grid place-items-center h-45 rounded-b-none py- px-4 text-center rounded-none bg-[#023E8A]"
          >
            <div className="   p-6 text-white ">
              <img src="" className="h-20 " />
            </div>
            <Typography variant="h4" color="white" className="mb-5">
              Make your payment
            </Typography>
          </CardHeader>
          <CardBody>
            <div className="flex justify-between">
              <Typography>Total Seat Booked Fee</Typography>
              <Typography>₹ {fee}</Typography>
            </div>
            <Tabs value="card" className="overflow-visible">
              <TabsHeader className="relative z-0 "></TabsHeader>
              <TabsBody className="!overflow-x-hidden !overflow-y-visible">
                <TabPanel value="card" className="p-0">
                  <main className="flex-grow flex items-center justify-center shadow-none">
                    <form
                      id="payment-form"
                      onSubmit={handleSubmit}
                      className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-auto"
                    >
                      <PaymentElement
                        id="payment-element"
                        options={paymentElementOptions}
                        class="w-full p-3 border rounded mb-4 focus:outline-none focus:ring focus:ring-blue-300"
                      />
                      <button
                        disabled={isLoading || !stripe || !elements}
                        id="submit"
                        className="w-full bg-gradient-to-r from-teal-400 to-blue-500 text-white py-3 my-1 rounded-md shadow-md hover:from-teal-500 hover:to-blue-600 focus:outline-none focus:ring focus:ring-teal-300"
                      >
                        <span id="button-text">
                          {isLoading ? (
                            <div className="spinner" id="spinner"></div>
                          ) : (
                            "Pay now"
                          )}
                        </span>
                      </button>
                      {message && (
                        <div id="payment-message" className="mt-4 text-red-500">
                          {message}
                        </div>
                      )}
                    </form>
                  </main>
                  <Typography
                    variant="small"
                    color="gray"
                    className="mt-2 flex items-center justify-center gap-2 font-normal opacity-60"
                  >
                    <LockClosedIcon className="-mt-0.5 h-4 w-4" /> Payments are
                    secure and encrypted
                  </Typography>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
};

export default CheckoutForm;
