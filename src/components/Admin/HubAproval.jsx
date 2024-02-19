import React, { useState } from "react";
import { Card } from "@material-tailwind/react";
import { useEffect } from "react";
import { HubApproved } from "../../Api/AdminApi";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";


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

 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  const [data, setData] = useState([]);
  console.log(data, "jjjjjjjjj");
  useEffect(() => {
    const fetchData = async () => {
      const response = await HubApproved();
      if (response) {
        console.log(response.data, "response reached");
        setData(response.data.data);
      } else {
        console.log("Failed");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Card className="h-screen w-full overflow-scroll">
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
            {data.map(({ hubname, hublocation, hubemail, price, hubmobile, certificate, images }, index) => {
              const isLast = index === TABLE_ROWS.length - 1;
              const classes = isLast
                ? "p-4"
                : "p-4 border-b border-blue-gray-50";

              return (
                <tr key={name}>
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
                    <Button onClick={handleOpen}>view</Button>
                    <Dialog open={open} handler={handleOpen}>
                      <DialogHeader className="font-extrabold flex justify-center">HUB APPROVAL</DialogHeader>
                      <DialogBody className="h-[42rem] ">
                        <div className="">
                          <Typography className="font-normal mb-3">
                            <span className="font-bold text-black">
                              Hub Name:{" "}
                            </span>
                            {hubname}
                          </Typography>
                          <Typography className="font-normal mb-3">
                            <span className="font-bold text-black">
                              Hub Location:{" "}
                            </span>
                            {hublocation}
                          </Typography>
                          <Typography className="font-normal mb-3">
                            <span className="font-bold text-black">
                              Hub Mobile:{" "}
                            </span>
                            {hubmobile}
                          </Typography>
                          <Typography className="font-normal mb-3">
                            <span className="font-bold text-black">
                              Hub Email:{" "}
                            </span>
                            {hubemail}
                          </Typography>
                          <Typography className="font-normal mb-3">
                            <span className="font-bold text-black">
                              Hub price:{" "}
                            </span>
                            {price}
                          </Typography>
                          <img src={certificate} alt=""/>
                        </div>
                      </DialogBody>
                      <DialogFooter className="space-x-2">
                        <Button
                          variant="text"
                          color="blue-gray"
                          onClick={handleOpen}
                        >
                          cancel
                        </Button>
                        <Button
                          variant="gradient"
                          color="green"
                          onClick={handleOpen}
                        >
                          confirm
                        </Button>
                      </DialogFooter>
                    </Dialog>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>
    </div>
  );
}

export default HubAproval;
