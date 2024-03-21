import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { HubDetailsHome } from "../../../Api/UserApi";

function Home() {
  const [HubData, setHubData] = useState([]);
  console.log(HubData, "its Hubdata");
  const navigate = useNavigate();
  // Array of objects containing image URLs, names, and details
  

  useEffect(() => {
    const fetchData = async () => {
      const response = await HubDetailsHome();
      setHubData(response.data.Hubdata);
      console.log(response);
    };
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="img h-screen  justify-start items-center bg-blue-gray-100">
        <div className=" h-screen  flex flex-col justify-center rounded-lg p-8 shadow-md">
          <h1 className="flex uppercase ml-48 text-[4rem] font-bold text-white mb-6">
            <span></span>Discover Amazing Hubs
          </h1>
          <p className=" ml-48 text-2xl w-1/3 font-bold text-brown-50 mb-8">
            Find the perfect hub for your interests and connect with like-minded
            individuals.
          </p>
          <Button
            size="lg"
            onClick={() => navigate("/hubs")}
            className=" w-48 text-sm ml-48 my-5 text-white border-white hover:text-black hover:bg-white"
            variant="outlined"
          >
            {" "}
            Explore Hubs
          </Button>
        </div>
      </div>

      <div className=" mx-56 mt-20 flex h-[40rem] w-[90rem] justify-start items-center  overflow-hidden">
        <Carousel loop="true" autoplay="true" className="">
          {/* Mapping over the array of objects to create carousel images with names and details */}
          {HubData.map((item, index) => (
            <div className="flex " key={index}>
              {item.images.length > 0 && (
                <img
                  src={item.images[0]} // Displaying only the first image from the array
                  alt={`Image ${index + 1}`}
                  className=" flex h-[37rem] w-[90rem] my-6 mx-4 object-cover rounded-3xl brightness-75 backdrop-blur-lg " 
                />
              )}
              <div className="my-60 mx-[36rem]  flex flex-col justify-center absolute uppercase items-center text-white ">
                <h2 className="text-5xl font-bold font-serif">{item.hubname}</h2><br />
                <p className="text-4xl font-serif font-bold">{item.hublocation}</p><br />
                <p className="text-3xl font-serif font-bold">Seats: {item.seatcount}</p><br />
                <p className="text-2xl font-serif font-bold">Price: {item.price}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <div className="grid-cols-2 h-[40rem] flex justify-center items-center bg-white ">
        <div className="img2 w-[40rem] h-[30rem] bg-blue-300 flex justify-center items-center border"></div>
        <div className="w-[70rem] h-[30rem]  border border-black">
          <h1 className="py-44 justify-center text-[3.30rem]  leading-[4rem] font-extrabold text-center text-black">
            <span className="text-gray-600">“</span>Dont wish for it work for it
            <span className="text-gray-600">”</span>
            <br />
            So
            <span className="text-gray-600"> Grab Your Space</span>
          </h1>
        </div>
      </div>
    </div>
  );
}

<ToastContainer />;

export default Home;
