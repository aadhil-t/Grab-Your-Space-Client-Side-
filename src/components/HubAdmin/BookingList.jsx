import { Button } from "@material-tailwind/react";
import React, { useEffect, useState } from "react"; // Import React
import { BookedhistoryHubAdmin } from "../../Api/HubAdminApi";
import moment from "moment";    
import { Fragment } from "react";

const data = [
    {
      imageUrl: "src/assets/logos/gys-high-resolution-logo-black-transparent.png",
      title: "Noteworthy technology acquisitions 2021",
      description:
        "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    },
  ];

  
function BookingList() {

    const [bookedData, setBookedData] = useState([]);
    useEffect(() => {
        console.log(bookedData[0], "booking list at Hub Admin Side");
      const fetchData = async () => {
        try {
          const response = await BookedhistoryHubAdmin();
          console.log(response.data.data, "pppppppppppppppppppp");
          setBookedData(response.data.data);
        } catch (error) {}
      };
      fetchData();
    }, []);

  return (
    <div className=""style={{ backgroundColor: "#1B4965"}}>

<div className="container mx-auto py-16" >
{bookedData && bookedData.slice().reverse().map((item, index) => (
<a
  key={index}
  href="#"
  className="flex flex-col items-center  bg-blue-gray-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl h-52 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4" >
  {/* <img
    className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
    src={item.imageUrl}
    alt=""
  /> */}

<div className="ml-3">
  <h5 className=" mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span className="text-base text-gray-700"> HUB NAME : </span>{" "}
      {item.bookedhubid && item.bookedhubid.hubname}
    </h5>
  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span className="text-base text-gray-700"> HUB LOCATION  : </span>{" "}
      {item.bookedhubid && item.bookedhubid.hublocation}
    </h5>
  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span className="text-base text-gray-700"> HUB  SEAT PRICE : </span>{" "}
      {item.bookedhubid && item.bookedhubid.price}
    </h5>
  </div>

  <div className="flex flex-col justify-between p-4 leading-normal">
    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span className="text-base  text-gray-700">USER NAME : </span>{" "}
      {item.bookeduserid && item.bookeduserid.name}
    </h5>

    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span className="text-base  text-gray-700">USER MOBILE : </span>{" "}
      {item.bookeduserid && item.bookeduserid.mobile}
    </h5>
    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span className="text-base text-gray-700">USER EMAIL : </span>{" "}
      {item.bookeduserid && item.bookeduserid.email}
    </h5>
  
  </div>

  <div className="flex flex-col justify-between mx-10 leading-norma">
    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span className="text-base text-gray-700"> BOOKED SLOTS : </span>{" "}
      {item.selectedseats.map((seat, index) => (
              <Fragment key={index}>
                {index > 0 && ", "}
                {seat.label}
              </Fragment>
            ))}
    </h5>
    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span className="text-base text-gray-700">BOOKED DATE:</span>{" "}
      {moment(item.date).format("MM DD YYYY")}
    </h5>
    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span className="text-base text-gray-700"> TOTAL AMOUNT : </span>{" "}
      {item.totalamount}
    </h5>
    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span className="text-base text-gray-700">PAYMENT STATUS : </span>{" "}
      <span
        className={
          item.paymentstatus === "success"
            ? "text-green-500"
            : "text-red-500"
        }
      >
        {item.paymentstatus}
      </span>
    </h5>
  </div>
  <Button className=" mx-auto">view</Button>
</a>
))}
</div>
</div>
  )
}

export default BookingList
