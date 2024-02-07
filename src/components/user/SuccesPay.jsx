import { Typography } from "@material-tailwind/react";
import React from "react";

function SuccesPay() {
  return (
    <>
      {/* component */}
      <div className=" w-full h-screen ">
        <div className="PaymentBgImg flex justify-center items-center bg-gray-100 h-screen">
          <div className=" flex justify-center items-center bg-white p-6 w-[60%] h-[70%]  md:mx-auto">
          <div className="">
            <svg
              viewBox="0 0 24 24"
              className="text-green-600 w-16 h-16 mx-auto my-6"
            >
              <path
                fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
              ></path>
            </svg>
            <div className="text-center">
              <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                Payment Done!
              </h3>
              <p className="text-gray-600 my-2">
                Thank you for completing your secure online payment.
              </p>
              <p> Have a great day!</p>
             
              <div className="flex justify-between">
              <div className="py-10 text-center">
                <a
                  href="/bookedlist"
                  className="inline-block px-6 py-3 text-white font-semibold bg-black hover:bg-gray-600 rounded-lg transition duration-300 ease-in-out"
                  >
                 BOOKINGS
                </a>
              </div>
              <div className="py-10 text-center">
                <a
                  href="/"
                  className="inline-block px-6 py-3 text-white font-semibold bg-black hover:bg-gray-600 rounded-lg transition duration-300 ease-in-out"
                  >
                  GO BACK
                </a>
              </div>
              </div>

            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SuccesPay;
