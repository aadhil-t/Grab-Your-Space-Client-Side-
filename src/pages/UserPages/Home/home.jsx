import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function  Home() {

    const navigate = useNavigate()

  // const handleSubmit = (e) => {
  //   e.preventDefault(); 
  //   navigate("/seatslot")
  // };

  return (
  
          <div className="grid grid-rows-4">

        <div className="grid-cols-2 h-[40rem] flex justify-center items-center bg-white">
          <div className="img2 w-[40rem] h-[30rem] bg-blue-300 flex justify-center items-center"></div>
          <div className="w-[70rem] h-[30rem] bg-red-400">
          <h1 className="py-44 justify-center text-[3.30rem]  leading-[4rem] font-extrabold text-center text-white" style={{ backgroundColor: "#1B4965" }}>
                <span className="text-red-300">“</span>Dont wish for it work for
                it<span className="text-red-300">”</span>
                <br />
                So
                <span className="text-red-300"> Grab Your Space</span>
              </h1>
          </div>
        </div>
        <div className="h-[40rem] flex justify-center items-center bg-blue-gray-100" style={{ backgroundColor: "#1B4965" }}>
      <div className="img w-[110rem] h-[30rem] bg-blue-300 flex flex-col justify-center items-center rounded-lg p-8 shadow-md">
        <h1 className="text-4xl font-bold text-black mb-6">Discover Amazing Hubs</h1>
        <p className="text-lg text-black mb-8">Find the perfect hub for your interests and connect with like-minded individuals.</p>
        <Button
          className="w-[15rem] h-[5rem] text-xl mt-6 bg-blue-500 hover:bg-blue-600"
          fullWidth
          onClick={() => navigate("/hubs")}
        >
          Explore Hubs
        </Button>
      </div>
    </div>

        <div className="grid-cols-2 h-[40rem] flex justify-center items-center bg-white">
          <div className="img2 w-[40rem] h-[30rem] bg-blue-300 flex justify-center items-center"></div>
          <div className="w-[70rem] h-[30rem] bg-red-400">
          <h1 className="py-44 justify-center text-[3.30rem]  leading-[4rem] font-extrabold text-center text-white" style={{ backgroundColor: "#1B4965" }}>
                <span className="text-red-300">“</span>Dont wish for it work for
                it<span className="text-red-300">”</span>
                <br />
                So
                <span className="text-red-300"> Grab Your Space</span>
              </h1>
          </div>
        </div>

        <div className="h-[40rem] flex justify-center items-center "style={{ backgroundColor: "#1B4965" }}>
          <Typography className="text-2xl font-serif">DIV 4</Typography>
        </div>
      </div>
  );
}

<ToastContainer />

export default Home;
