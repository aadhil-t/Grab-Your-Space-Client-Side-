import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import { useEffect } from "react";
import { HubApprovalChange, HubApprovalDetails } from "../../Api/AdminApi";
import {
  Button,   
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";
import HubApprovalModal from "./HubApprovalModal";


const TABLE_HEAD = ["Name", "Location", "Date", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    location: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    location: "Developer",
    date: "23/04/18",
  },
];

function HubAproval() {
const [fetch , Setfetch] = useState(false)
const manageFetch = (state)=>{
    Setfetch(state)
}
//////////////// DATA FETCHING //////////////
  const [data, setData] = useState([]);
  console.log(data, "jjjjjjjjj");
  useEffect(() => {
    const fetchData = async () => {
      const response = await HubApprovalDetails();
      if (response) {
        console.log(response.data, "response reached");
        setData(response.data.data);
      } else {
        console.log("Failed");
      }
    };
    fetchData();
  }, [fetch]);

  return (
    <div>
      <Card className="h-screen w-full">
        {data.length > 0 ?(
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(({hubname, hublocation, hubemail, price, hubmobile, certificate,_id}, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={hubname}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {hubname}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {hublocation}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {hubemail}
                    </Typography>
                  </td>

                  <td className={classes}>
                  {data && (
  <HubApprovalModal 
    data={{ hubname, hublocation, hubemail, price, hubmobile, certificate ,_id }} fn ={manageFetch}
  />
)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>):(
              <div className="flex justify-center items-center h-full">
              <Typography variant="h4" color="blue-gray">
                No data available !
              </Typography>
            </div>
          )}
      </Card>
    </div>
  );
}

export default HubAproval;
