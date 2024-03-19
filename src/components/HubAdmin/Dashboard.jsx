import React, { useEffect, useState } from "react";
import { DashBoardData } from "../../Api/HubAdminApi";
import { AgChartsReact } from "ag-charts-react";
import moment from "moment";
import { FaUserTie } from "react-icons/fa";
import { FaClipboardCheck } from "react-icons/fa";
import { FaRupeeSign } from "react-icons/fa";



export default function Dashboard() {
  const [options, setOptions] = useState({
    data: [],
    series: [
      {
        type: "bar",
        xKey: "year",
        yKey: "propertyBookings",
        fills: ["#3366cc"],
        strokes: ["#ffffff"],
      },
    ],
    legend: {
      enabled: true,
      position: "bottom",
    },
  });

  const [totalUserBooked, setTotalUserBooked] = useState(null); // State to store total user bookings

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await DashBoardData();
        if (response) {
          setOptions((prevOptions) => ({
            ...prevOptions,
            data: [
              {
                year: moment(response.data.PresentMonthStartDate).format("MMM"),
                avgTemp: 2.3,
                propertyBookings: response.data.PresentUserBookedData,
              },
              {
                year: moment(response.data.PreviousMonthStartDate).format(
                  "MMM"
                ),
                avgTemp: 6.3,
                propertyBookings: response.data.PreviousUserBookedData,
              },
              {
                year: moment(response.data.TwoMonthsAgoStartDate).format("MMM"),
                avgTemp: 16.2,
                propertyBookings: response.data.TwoMonthsAgoUserBookedData,
              },
            ],
          }));
          setTotalUserBooked(response.data); // Store total user bookings
          console.log(response, "Reached response");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      className="flex flex-col h-screen"
      style={{ backgroundColor: "#1B4965" }}
    >
      <div className="flex justify-evenly">
        <>
        <div className="flex gap-72">
          <div className=" mx-6 my-7 text-5xl flex flex-row justify-evenly items-center bg-white w-72 h-24 rounded-xl ">
          <FaUserTie />
            <div className=" border-l border-gray-400 pl-3 ">{totalUserBooked && totalUserBooked.TotalUserBooked}
            <div className="text-lg">Total Booked User</div> 
            </div> 
          </div>
          <div className="mx-6 my-7 text-5xl flex flex-row justify-evenly items-center bg-white w-72 h-24 rounded-xl">
          <FaClipboardCheck />
            <div className=" border-l border-gray-400 pl-3 ">{totalUserBooked && totalUserBooked.TotalUserBooked}
            <div className="text-lg">Total Booked</div> 
            </div>
          </div>
          <div className="mx-6 my-7 text-5xl flex flex-row justify-evenly items-center bg-white w-72 h-24 rounded-xl">
          <FaRupeeSign />
            <div className=" border-l border-gray-400 pl-3 ">{totalUserBooked && totalUserBooked.totalAmount}
            <div className="text-lg">Total Payment</div> 
            </div>
          </div>
          </div>
        </>
      </div>
      <div className="mx-6 mt-10 w-[40rem]">
        <AgChartsReact options={options} />
      </div>
    </div>
  );
}
