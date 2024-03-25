import { Button, IconButton, Input } from "@material-tailwind/react";
import React, { useEffect, useState } from "react"; // Import React
import { Bookedhistory } from "../../Api/UserApi";
import moment from "moment";
import { Fragment } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { setActive } from "@material-tailwind/react/components/Tabs/TabsContext";

const data = [
  {
    imageUrl: "src/assets/logos/gys-high-resolution-logo-black-transparent.png",
    title: "Noteworthy technology acquisitions 2021",
    description:
      "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
  },
];

export function BookedList() {
  const [bookedData, setBookedData] = useState([]);
  const [pages, setPages] = useState([]);
  const [active , setActive] = useState(1)
  console.log(active,"activeeeeeee")
  const navigate = useNavigate()
  console.log(bookedData, "llllllllllllll");

  ////////////// PAGINATION ////////////////
    // Function to go to the next item
  const next = () =>{
    const totalPages = Math.ceil(pages.count / pages.perpage);
    if(active === totalPages) return;
    setActive(active + 1);
  }
  // Function to go to the previous item
  const prev = () =>{
    if(active === 1) return;
    setActive(active - 1);
  }
   // Function to set the props for each item based on its index
   const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

 
  ///////////// FETCH DATA //////////////
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Bookedhistory(active);
        console.log(response.data.data, "pppppppppppppppppppp");

        setBookedData(response.data.data);
        setPages(response.data)
      } catch (error) {}
    };
    fetchData();
  }, [active]);

  return (
    <div className="flex-col">

      <div className="container mx-auto py-24 ">
          
        {bookedData &&
          bookedData
            .slice()
            .reverse()
            .map((item, index) => (
              <a
                key={index}
                className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-7xl h-52 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 mb-4"
              >
                <div>
                  <div className="w-72 h-52">
                    <img
                      className="w-full h-full object-cover"
                      src={item.bookedhubid?.images?.[0]}
                      alt=""
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <span className="text-base  text-gray-700"> </span>{" "}
                    {item.bookedhubid?.hubname}
                  </h5>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <span className="text-base text-gray-700"> </span>{" "}
                    {item.bookedhubid?.hublocation}
                  </h5>
                </div>

                <div className="flex flex-col justify-between mx-10 leading-norma">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <span className="text-base text-gray-700">
                      {" "}
                      BOOKED SLOTS :{" "}
                    </span>{" "}
                    {item.selectedseats.map((seat, index) => (
                      <Fragment key={index}>
                        {index > 0 && ", "}
                        {seat.label}
                      </Fragment>
                    ))}
                  </h5>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <span className="text-base text-gray-700">
                      BOOKED DATE:
                    </span>{" "}
                    {moment(item.date).format("MM DD YYYY")}
                  </h5>
                </div>
                <Button className=" mx-auto" onClick={()=>navigate('/bookedsinglepage', {state: {bookedData:item}})}>view</Button>
              </a>
            ))}
      </div>

      <div className=" flex justify-center items-center gap-4">
          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={prev} 
            disabled={active === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>

          <div className="flex items-center gap-2">
            {pages.Count &&
              [...Array(Math.ceil(pages.Count / pages.perpage))].map(
                (_, index) => (
                  <IconButton key={index + 1} {...getItemProps(index + 1)}>
                    {index + 1}
                  </IconButton>
                )
              )}
          </div>

          <Button
            variant="text"
            className="flex items-center gap-2"
            onClick={next}
            disabled={active === Math.ceil(pages.Count / pages.perpage)}
          >
            Next <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
    </div>
  );
}
