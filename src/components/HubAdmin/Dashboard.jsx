import React, { useEffect, useState } from "react";
import { DashBoardData } from "../../Api/HubAdminApi";
import { AgChartsReact } from "ag-charts-react";
import moment from "moment";
import { FaBook } from "react-icons/fa";

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
        <div className="flex gap-96">
          <div className="mx-6 my-5 text-5xl flex flex-row justify-evenly items-center bg-white w-32 h-24 rounded-xl ">
            <FaBook />
            <div className="bg-yellow-700">jjjj</div>
          </div>
          <div className="mx-6 my-5 text-5xl flex flex-row justify-evenly items-center bg-white w-32 h-24 rounded-xl">
            <FaBook />
            <div className="bg-yellow-700">jjjj</div>
          </div>
          <div className="mx-6 my-5 text-5xl flex flex-row justify-evenly items-center bg-white w-32 h-24 rounded-xl">
            <FaBook />
            <div className="bg-yellow-700">jjjj</div>
          </div>
          </div>
        </>
      </div>
      <div className="mx-6 mt-5 w-[40rem]">
        <AgChartsReact options={options} />
      </div>
    </div>
  );
}
