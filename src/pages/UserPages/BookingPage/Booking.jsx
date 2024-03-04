import React, { Fragment, useEffect, useState } from "react";
import { Radio, typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { bookedData } from "../../../Api/UserApi";
import { data } from "autoprefixer";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../../components/user/CheckoutForm";
import { date } from "yup";
import { GenerateSuccess } from "../../../Toast/toast";
const stripePromise = loadStripe(
  "pk_test_51O11IzSJfBiixPMTXmoUugjdZRkftipLrwEqi3g4tNLnAHnARpN3IRSijAKk4NbRDbaW8Y2kIUa8hJT79i2S00zI00707Kncmo"
);

export default function Booking() {
  const location = useLocation();
  const { state } = location;
  const id = state?.id; // Get the id from the state
  

  const [datas, setdatas] = useState([]);
  console.log(datas,"kkkk")
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await bookedData(id);
      if (response.status === 200) {
        console.log(response.data.data[0],"responsesssssssssssssss")
        setdatas(response.data.data[0]); // Update the state with the fetched data
        setClientSecret(response.data.clientSecret);
        setLoading(false)
      } else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
      fetchData();
    }, [id]);
    

  const appearance = {
    theme:"stripe"
  } 
  const options = {
    clientSecret: clientSecret ,
    appearance,
  };

  return  (
    <>
    { loading ? (
        <Typography variant="h1">loading</Typography>
    ) : (
      
        <div className=" flex mt-24 w-full  ">
         <div> 
          <img  className=" p-4  w-[100rem] object-cover"
           alt="card-image" 
           src={datas.bookedhubid.images[1]} />
          <img  className="p-4 my-2 w-[100rem] object-cover"
           alt="card-image" 
           src={datas.bookedhubid.images[2]} />
           </div>
      <Card className="flex-row justify-between items-center  h-screen w-full">

<div className="flex flex-col p-10 gap-16">
        <div className="mx-10 my-28">
          <Typography variant="h2" className=" text-black text-3xl ">HUB DETAILS</Typography>
          <Typography className="text-black text-lg">
            Hub Name: {datas.bookedhubid.hubname}
          </Typography>
          <Typography className="text-black text-lg">
            Location: {datas.bookedhubid.hublocation}
          </Typography>
          <Typography className="text-black text-lg">
            Date:  {new Date(datas.date).toLocaleDateString()}
          </Typography>

          <Typography className="text-black text-lg">
            No Of Seats:{" "}
            {datas.selectedseats.map((seat, index) => (
              <Fragment key={index}>
                {index > 0 && ", "}
                {seat.label}
              </Fragment>
            ))}
          </Typography>
        </div>

        <div className="mx-10 my-10 ">
          <Typography variant="h2" className=" text-black text-3xl ">
            USER DETAILS
          </Typography>
          <Typography className="text-black text-lg">
            {" "}
            Name: {datas.bookeduserid.name}
          </Typography>
          <Typography className="text-black text-lg">
            mobile: {datas.bookeduserid.mobile}
          </Typography>
          <Typography className="text-black text-lg">
            email: {datas.bookeduserid.email}
          </Typography>
        </div>
        </div>

        <div className="w-[40%] mr-14 border-black">
          <Card>
            <div className="flex flex-col justify-evenly  h-[20rem] shadow-black">
            <Typography variant="h2" className="text-black text-3xl mx-28">
              PAYMENT
            </Typography>
            <Typography>
              <Radio
                className="text-black"
                name="type"
                label="Online Payment"
              />
              <Typography className="text-black text-2xl mx-16">
                Total Amount: {""}
                {datas.totalamount}
              </Typography>
            </Typography>
            </div>
          </Card>
        
          {clientSecret && (<Elements stripe={stripePromise} options={options}>
            <CheckoutForm fee={datas.totalamount} id={datas._id}/>
          </Elements>)}
        </div>
      </Card>
    </div>
    )
}
    </>
  )
}
