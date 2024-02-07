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
        className="h-[40rem]  justify-center items-center "
        style={{ backgroundColor: "#1B4965" }}
      >
        {/* <div className=" max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="\src\assets\UserAssets\top-view-tidy-Crop2.jpg"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div> */}
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
    </div>
  );
}

<ToastContainer />;

export default Home;
