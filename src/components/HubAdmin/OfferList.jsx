import { Card, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { OfferListApi } from "../../Api/HubAdminApi";

const TABLE_HEAD = ["OfferName", "Percentage", "Seatcount", "Delete"];

const TABLE_ROWS = [
  {
    offername: "John Michael",
    percentage: "Manager",
    seatcount: "23/04/18",
  },
  {
    offername: "Alexa Liras",
    percentage: "Developer",
    seatcount: "23/04/18",
  },
];

export function OfferListing() {
  const [OfferData, SetOfferData] = useState([]);
  console.log(OfferData, "state");
  const fetchData = async () => {
    const response = await OfferListApi();
    if (response) {
      console.log(response, "Reached ok set");
      SetOfferData(response.data.OfferData);
    } else {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="flex justify-center ">
      <Card className="my-4 h-full w-[98rem] overflow-scroll">
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
            {OfferData.map(
              ({ offername, offerpercentage, seatcount }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={offername}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {offername}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {offerpercentage}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {seatcount}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="border border-red-500 rounded-md px-2 py-1 inline-block hover:bg-red-400">
                        <Typography
                          as="a"
                          href="#"
                          variant="small"
                          color="blue-gray"
                          className="font-medium text-red-500 hover:text-white cursor-pointer"
                        >
                          Delete
                        </Typography>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
}
