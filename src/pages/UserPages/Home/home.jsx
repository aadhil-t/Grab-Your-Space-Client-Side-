import { Button } from "@material-tailwind/react";
import { Typography } from "@material-tailwind/react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate()

  // const handleSubmit = (e) => {
  //   e.preventDefault(); 
  //   navigate("/seatslot")
  // };

  return (
  
      <div className="grid grid-rows-4">
        <div className="h-[40rem] flex justify-center items-center bg-blue-gray-100">
          <div className="img w-[110rem] h-[30rem] bg-blue-300 flex justify-center items-center"></div>
        </div>

        <div className="grid-cols-2 h-[40rem] flex justify-center items-center bg-blue-gray-200">
          <div className="img2 w-[40rem] h-[30rem] bg-blue-300 flex justify-center items-center"></div>
          <div className="w-[70rem] h-[30rem] bg-red-400"></div>
        </div>

        <div className="img3 h-[40rem] flex justify-center items-center bg-blue-gray-300">
          <Button className="w-[10rem] mt-6" fullWidth onClick={()=> navigate("/seatslot")}>
            Booking
          </Button>
          {/* You can add form fields and labels here */}
        </div>
        <div className="h-[40rem] flex justify-center items-center bg-blue-gray-400">
          <Typography className="text-2xl font-serif">DIV 4</Typography>
        </div>
      </div>
  );
}

<ToastContainer />

export default Home;
