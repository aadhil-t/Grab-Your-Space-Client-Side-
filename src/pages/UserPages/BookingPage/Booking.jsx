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
const stripePromise = loadStripe(
  "pk_test_51O11IzSJfBiixPMTXmoUugjdZRkftipLrwEqi3g4tNLnAHnARpN3IRSijAKk4NbRDbaW8Y2kIUa8hJT79i2S00zI00707Kncmo"
);

export default function Booking() {
  const location = useLocation();
  const { state } = location;
  const id = state?.id; // Get the id from the state
  

  const [datas, setdatas] = useState([]);
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await bookedData(id);
      if (response.status === 200) {
        console.log(response,"responsesssssssssssssss")
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
    
    console.log(datas,"state")
    // console.log(datas.date,"state")
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
        <div className=" mt-9 w-full h-full" style={{ backgroundColor: "#1B4965" }}>
      <span className=" flex justify-center text-[3rem] my-4 font-extrabold text-cyan-50">
        PAYMENT
      </span>
      <Card className="flex-row justify-between items-center  h-[40rem] w-full">
        <div className="mx-10 my-10">
          <Typography className=" text-black text-2xl ">HUB DETAILS</Typography>
          <Typography className="text-black text-lg">
            Hub Name: {datas.bookedhubid.hubname}
          </Typography>
          <Typography className="text-black text-lg">
            Location: {datas.bookedhubid.hublocation}
          </Typography>
          <Typography className="text-black text-lg">
            Date: {datas.date}
          </Typography>

          <Typography className="text-black text-lg">
            No Of Seats:{" "}
            {datas.selectedseats.map((seat, index) => (
              <Fragment key={index}>
                {index > 0 && ", "}
                {seat}
              </Fragment>
            ))}
          </Typography>
        </div>

        <div className="mx-10 my-10 ">
          <Typography className=" text-black text-2xl ">
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

        <div className="w-[20%] mr-5 border-black h-40">
          <Card>
            <Typography className="text-black text-2xl mx-20">
              Price details
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
