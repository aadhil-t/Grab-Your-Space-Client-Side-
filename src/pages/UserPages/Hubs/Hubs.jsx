import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { HubList } from "../../../Api/UserApi";
import { useNavigate } from "react-router-dom";
import image from "../../../assets/logos/gys-high-resolution-logo-black - Copy.png";
import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
 

const cardData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "UI/UX Review Check",
    description:
      'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
  },

  // Add more data items as needed
];

function Hubs() {

  const [active, setActive] = useState(1);

  // Function to set the props for each item based on its index
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  // Function to go to the next item
  const next = () => {
    if (active === 5) return; // Assuming you have 5 items

    setActive(active + 1);
  };

  // Function to go to the previous item
  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const navigate = useNavigate();
  const [hubList, setHubList] = useState([]);
  console.log(hubList, "hhhhhhhh");
  const fetchHubList = async () => {
    const response = await HubList();
    if (response.status === 200) {
      setHubList(response.data);
    }
  };

  useEffect(() => {
    fetchHubList();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <span className="text-[3rem] my-4 font-extrabold "></span>
        <div className="h-full w-full p-10">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9"> */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9">
            {hubList
              .slice()
              .reverse()
              .map((card) => (
                // <Card key={card.id} className="mt-6 md:w-96 mx-auto">
                <Card key={card.id} className="mt-6 md:w-96 mx-auto shadow-lg transition-transform  hover:scale-105 duration-300 bg-white border border-[#00000027] dark:bg-gray-800 dark:border-gray-700">
                  <CardHeader color="blue-gray" className="relative h-56">
                    <img
                      src={card.images[0] ?? image}
                      className="h-full w-full object-cover"
                      alt="card-image"
                    />
                  </CardHeader>
                  <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                      Hubname: {card.hubname}
                    </Typography>
                    <Typography>Location: {card.hublocation}</Typography>
                    <Typography>Email: {card.hubemail}</Typography>
                    <Typography>Mobile: {card.hubmobile}</Typography>
                    <Typography variant="h6">
                      Seat Count: {card.seatcount}
                    </Typography>
                    <Typography variant="h6">Price: {card.price}</Typography>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <a href="/seatarrangment">
                      <Button
                        onClick={() => {
                          if (localStorage.getItem("token")) {
                            navigate(`/seatarrangment`, {
                              state: { objId: card._id },
                            });
                          }
                        }}
                      >
                        {" "}
                        View More{" "}
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
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
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
        </div>

      </div>
    </>

  );
}

export default Hubs;
