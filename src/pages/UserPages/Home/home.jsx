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
  



function Home() {
  const navigate = useNavigate();

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

      <div className="flex h-[40rem] justify-start items-center bg-[#1B4965] rounded-xl overflow-hidden">
      <div className="ml-7">
        <Card className="mt-6 w-80 rounded-3xl">
          <img
            className="h-96 object-cover rounded-3xl"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </Card>
      </div> 
      <div className="ml-7">
        <Card className="mt-6 w-80 rounded-3xl">
          <img
            className="h-96 object-cover rounded-3xl"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </Card>
      </div> 
      <div className="ml-7">
        <Card className="mt-6 w-80 rounded-3xl">
          <img
            className="h-96 object-cover rounded-3xl"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </Card>
      </div> 
      <div className="ml-7">
        <Card className="mt-6 w-80 rounded-3xl">
          <img
            className="h-96 object-cover rounded-3xl"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </Card>
      </div> 
      <div className="ml-7">
        <Card className="mt-6 w-80 rounded-3xl">
          <img
            className="h-96 object-cover rounded-3xl"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </Card>
      </div> 
      <div className="ml-7">
        <Card className="mt-6 w-80 rounded-3xl">
          <img
            className="h-96 object-cover rounded-3xl"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </Card>
      </div> 
      <div className="ml-7">
        <Card className="mt-6 w-80 rounded-3xl">
          <img
            className="h-96 object-cover rounded-3xl"
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </Card>
      </div> 
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
