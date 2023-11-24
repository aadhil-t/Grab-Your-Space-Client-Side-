import { Typography } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
import Button from "@material-tailwind/react";
// import {FaMapMarkedAlt} from 'react-icons/fa'
import Map from "../../../assets/UserAssets/Map.png";
import { useState } from "react";

function multipleComponent() {
  return <div className="col-start-2 bg-deep-orange-300">1</div>;
}

let h = [];
h.length = 6;

function SeatSlot() {
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1); // Minimum date (tomorrow)

  const repeatComponent = [];
  for (let i = 0; i < 60; i++) {
    repeatComponent.push(i + 1);
  }
  const [selected, setSelected] = useState([]);
  const [selectedDate, setSelectedDate] = useState(
    currentDate.toISOString().split("T")[0]
  );

  // Calculate maximum allowed date (3 days in the future)
  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 2);

  // let selected = [];

  const selectSeat = (id) => {
    // Handle the click event for the specific seat with the provided id
    const selectedIndex = selected.indexOf(id);

    if (selected.includes(id)) {
      // If the id is already in the array, remove it
      const newSelected = [...selected];
      newSelected.splice(selectedIndex, 1);
      setSelected(newSelected);
    } else {
      // If the id is not in the array, add it
      setSelected([...selected, id]);
    }

    // Add your logic here
    console.log(selected);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <>
      <div
        className="grid w-full grid-cols-12 h-[30rem] mt-[2rem]"
        style={{ backgroundColor: "#1B4965" }}
      >
        <div className="col-span-4 w-full h-full">
          <div className="flex w-full h-full justify-center items-center">
            <h1 className="text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white">
              <span className="text-red-300">“</span>Dont wish for it work for
              it<span className="text-red-300">”</span>
              <br />
              So
              <span className="text-red-300"> Grab Your Space</span>
            </h1>
          </div>
        </div>
        <div className="col-span-8 h-full hidden md:block p-8">
          <div className="seat-img1 h-full overflow-hidden"></div>
        </div>
      </div>
      <div
        className="h-[60rem] w-full  p-4"
        style={{ backgroundColor: "#1B4965" }}
      >
        <Carousel
          className="rounded-xl "
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4  flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <div className="bg-blue-gray-400">
            <div className="flex h-16 items-center justify-around bg-blue-gray-400">
              <div className="flex">
                <button className="h-10 w-10">
                  <img src={Map} alt="" />
                </button>
                <div className="">
                  <input
                    className="rounded-md ml-1 w-36 p-1.5 text-lg text-center capitalize font-serif bg-white"
                    type="text"
                    value={"calicut"}
                    disabled
                  />
                </div>
              </div>
              <h1 className="text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white">
                {" "}
                Grab Your Space
              </h1>
              <h1 className="text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white">
                {" "}
              </h1>
              <input
                type="date"
                id="dateInput"
                value={selectedDate}
                min={currentDate.toISOString().split("T")[0]}
                max={maxDate.toISOString().split("T")[0]}
                onChange={handleDateChange}
              />
            </div>

            <div className="flex justify-center">
              <div className=" w-11/12 h-[52rem] ">
                <div className="grid grid-cols-3 grid-rows-1 gap-0 h-[50rem]">
                  <div
                    className="bg-blue-gray-50 grid grid-cols-12 col-span-3 p-16"
                    style={{ backgroundColor: "#1B4965" }}
                  >
                    {repeatComponent.map((result, index) => (
                      <>
                        <div
                          key={index + 1}
                          onClick={() => {
                            selectSeat(index + 1);
                          }}
                          className="bg-white w-24 h-24 p-2 col-span-1"
                        >
                          <div
                            key={index + 1}
                            className={`w-20 cursor-pointer h-20 flex justify-center items-center ${
                              !selected.includes(result)
                                ? "bg-blue-400"
                                : "bg-red-900"
                            }`}
                          >
                            <h1 className="text-3xl font-extrabold">
                              {result}
                            </h1>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>

      <div
        className="grid w-full grid-cols-12 h-[30rem] "
        style={{ backgroundColor: "#1B4965" }}
      >
        <div className="col-span-4 w-full h-full">
          <div className="flex w-full h-full justify-center items-center">
            <h1 className="text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white">
              <span className="text-red-300">“</span>Dont wish for it work for
              it<span className="text-red-300">”</span>
              <br />
              So
              <span className="text-red-300"> Grab Your Space</span>
            </h1>
          </div>
        </div>
        <div className="col-span-8 h-full hidden md:block p-8">
          <div className="seat-img1 h-full overflow-hidden"></div>
        </div>
      </div>
    </>
  );
}

export default SeatSlot;
