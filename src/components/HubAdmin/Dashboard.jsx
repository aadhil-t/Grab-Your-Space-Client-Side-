import React, { useEffect, useState } from "react";
import { DashBoardData } from "../../Api/HubAdminApi";
import { AgChartsReact } from "ag-charts-react";
import moment from "moment";

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
                year: moment(response.data.PreviousMonthStartDate).format("MMM"),
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
      className="flex justify-center items-center h-[55rem]"
      style={{ backgroundColor: "#1B4965" }}
    >
      <div>
        <AgChartsReact options={options} />
      </div>
    </div>
  );
}
