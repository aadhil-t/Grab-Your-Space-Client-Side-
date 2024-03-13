import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
  Select,
} from "@material-tailwind/react";
import { HubList } from "../../../Api/UserApi";
import { useNavigate } from "react-router-dom";
import image from "../../../assets/logos/gys-high-resolution-logo-black - Copy.png";
import { IconButton } from "@material-tailwind/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { MultiSelect } from "react-multi-select-component";

const cardData = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "UI/UX Review Check",
    description:
      'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
  },
];






function Hubs() {
  const navigate = useNavigate();
  const [hubList, setHubList] = useState([]);
  console.log(hubList,"Multi select perpose")
  const [pages, setPages] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search, "Searched values");
  const [active, setActive] = useState(1);
  const [selected, setSelected] = useState([]);
  console.log(selected,"kkkkkkkkkk")
  console.log(selected,"jsjsjsjs")
  const per = pages.perpage;
  console.log(per, "pppppppp");
  const [sortData, setSortData] = useState();
  const handleChange = (e) => {
    setSortData(e);
  };

  

  // Function to extract unique hub locations from hubList
  const extractHubLocations = () => {
    const locations = hubList.map((hub) => hub.hublocation);
    return [...new Set(locations)].map((location) => ({
      label: location,
      value: location,
    }));
  };
  
  /////////////// SEARCH ///////////////
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };
  /////////////// PAGINATION ///////////////
  // Function to go to the next item
  const next = () => {
    const totalPages = Math.ceil(pages.Count / pages.perpage);
    if (active === totalPages) return; // Assuming you have 5 items
    setActive(active + 1);
  };
  // Function to go to the previous item
  const prev = () => {
    if (active === 1) return;
    setActive(active - 1);
  };
  // Function to set the props for each item based on its index
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => setActive(index),
  });

  const fetchHubList = async () => {
    const response = await HubList(active, search, sortData, selected);
    console.log(response, "ksksksksks");
    if (response.status === 200) {
      setHubList(response.data.HubData);
      setPages(response.data);
    }
  };

  useEffect(() => {
    fetchHubList();
  }, [active, search, sortData, selected]);


   // Dynamically generate options array for MultiSelect
  const options = extractHubLocations();


  return (
    <>
      <div className="flex flex-col items-center mt-12">
        <span className="text-[3rem] my-4 font-extrabold "></span>
        <div className="h-full w-full p-10">
          <div className="flex justify-between">
            <div className="flex w-1/5 ml-7  rounded-md ">
              <Input
                label="Search"
                 icon={<MagnifyingGlassIcon className=" h-5 w-5" />}
                value={search}
                onChange={handleSearchChange}
                variant="outlined"
              />
            </div>

            <div className="mt-2 ml-[60rem]">
              <h1 className="font-bold">Select Location</h1>
              <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
              />
            </div>

            <div className="mr-7 relative inline-block text-left w-full md:w-52">
              <div className="font-bold mb-2">Price Sort:</div>
              <select
                onChange={(e) => handleChange(e.target.value)}
                className="block appearance-none w-full bg-white border border-gray-500 hover:border-gray-400 px-4 py-2 pr-8 rounded-md leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9"> */}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-10">
            {hubList.map((card) => (
              // <Card key={card.id} className="mt-6 md:w-96 mx-auto">
              <Card
                key={card.id}
                className="mt-6 md:w-96 mx-auto shadow-lg transition-transform  hover:scale-105 duration-300 bg-white border border-[#00000027] dark:bg-gray-800 dark:border-gray-700"
              >
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
    </>
  );
}

export default Hubs;
