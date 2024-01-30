import React, { Fragment, useEffect, useState } from "react";
import { Radio, typography } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Card, Typography } from "@material-tailwind/react";
import { useLocation } from "react-router-dom";
import { bookedData } from "../../../Api/UserApi";
import { data } from "autoprefixer";

export default function Booking() {
  const location = useLocation();
  const { state } = location;
  const id = state?.id; // Get the id from the state
  console.log(state);

  const [datas, setdatas] = useState([]);
  console.log(datas, "state");
  console.log(datas,"monuseeeeeee")

  const fetchData = async () => {
    try {
      const response = await bookedData(id);
      if (response.status === 200) {
        setdatas(response.data); // Update the state with the fetched data
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

  return datas[0] ? (
      <div className=" mt-9 w-full h-full"  style={{ backgroundColor: "#1B4965" }}>
      <span className=' flex justify-center text-[3rem] my-4 font-extrabold text-cyan-50'>PAYMENT</span>
        <Card className="flex-row justify-between items-center  h-[40rem] w-full" >
        <div className="mx-10 my-10">
          <Typography className=" text-black text-2xl ">
            HUB DETAILS
          </Typography>
          <Typography className="text-black text-lg">
            Hub Name: {datas[0].bookedhubid.hubname}
          </Typography>
          <Typography className="text-black text-lg">
            Location: {datas[0].bookedhubid.hublocation}
          </Typography>
          <Typography className="text-black text-lg">
            Date: {datas[0].date}
          </Typography>

          <Typography className="text-black text-lg">
            No Of Seats: {" "}
            {datas[0].selectedseats.map((seat, index) => (
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
            Name: {datas[0].bookeduserid.name}
          </Typography>
          <Typography className="text-black text-lg">
            mobile: {datas[0].bookeduserid.mobile}
          </Typography>
          <Typography className="text-black text-lg">
            email: {datas[0].bookeduserid.email}
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
                Total Amount: {""}{datas[0].totalamount}
              </Typography>
            </Typography>
          </Card>
          <Button className=" w-full ">procced</Button>
        </div>
      </Card>
    </div>
  ) : (
    ""
  );
}
