import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   navigate("/seatslot")
  // };

  return (
    <div className="">
      <div
        className="img h-screen  justify-start items-center bg-blue-gray-100"
        style={{ backgroundColor: "#1B4965" }}
      >
        <div className=" h-screen  flex flex-col justify-center rounded-lg p-8 shadow-md">
          <h1 className="flex uppercase ml-48 text-[4rem] font-bold text-white mb-6">
            Discover Amazing Hubs
          </h1>
          <p className=" ml-48 text-2xl w-1/3 font-bold text-brown-50 mb-8">
            Find the perfect hub for your interests and connect with like-minded
            individuals.
          </p>
          <Button size="lg" onClick={()=>navigate("/hubs")} className=" w-48 text-sm ml-48 my-5 text-white border-white hover:text-black hover:bg-white" variant="outlined"> Explore Hubs</Button>
        </div>
      </div>

      <div className="grid-cols-2 h-[40rem] flex justify-center items-center bg-white">
        <div className="img2 w-[40rem] h-[30rem] bg-blue-300 flex justify-center items-center"></div>
        <div className="w-[70rem] h-[30rem] bg-red-400">
          <h1
            className="py-44 justify-center text-[3.30rem]  leading-[4rem] font-extrabold text-center text-white"
            style={{ backgroundColor: "#1B4965" }}
          >
            <span className="text-red-300">“</span>Dont wish for it work for it
            <span className="text-red-300">”</span>
            <br />
            So
            <span className="text-red-300"> Grab Your Space</span>
          </h1>
        </div>
      </div>

      <div className="grid-cols-2 h-[40rem] flex justify-center items-center bg-white">
        <div className="img2 w-[40rem] h-[30rem] bg-blue-300 flex justify-center items-center"></div>
        <div className="w-[70rem] h-[30rem] bg-red-400">
          <h1
            className="py-44 justify-center text-[3.30rem]  leading-[4rem] font-extrabold text-center text-white"
            style={{ backgroundColor: "#1B4965" }}
          >
            <span className="text-red-300">“</span>Dont wish for it work for it
            <span className="text-red-300">”</span>
            <br />
            So
            <span className="text-red-300"> Grab Your Space</span>
          </h1>
        </div>
      </div>

      <div
        className="h-[40rem] flex justify-center items-center "
        style={{ backgroundColor: "#1B4965" }}
      >
        <Typography className="text-2xl font-serif">DIV 4</Typography>
      </div>
    </div>
  );
}

<ToastContainer />;

export default Home;
