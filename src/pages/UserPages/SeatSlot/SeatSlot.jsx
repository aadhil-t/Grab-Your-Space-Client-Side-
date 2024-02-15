import { Carousel } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Map from "../../../assets/UserAssets/Map.png";
import { useEffect, useState } from "react";
import { Singlehub } from "../../../Api/UserApi";
import { useLocation, useNavigate } from "react-router-dom";
import { BookingApi } from "../../../Api/UserApi";
import image from "../../../assets/logos/gys-high-resolution-logo-black - Copy.png"
import { element } from "prop-types";

function SeatSlot() {
  const [singleHubData, setSingleData] = useState([]);
  console.log(singleHubData, "uuuuuuuuuuuu");
  const navigate = useNavigate();

  const sendDatatoApi = async () => {
    try {
      const Data = { selected, singleHubData, selectedDate, newTotalAmount };
      console.log(Data, "jjjjjjjjjjjjjjjjjjjjj");
      const response = await BookingApi(Data);
      console.log(response, "kokokokokokk");
      if (response.data.booked) {
        let id = response.data.data._id;
        navigate("/booking", { state: { id } });
      } else {
        // Handle the case where booking is not successful
        console.log("Booking failed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const { state } = useLocation();
  const { objId } = state;

  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1); // Minimum date (tomorrow)

  const repeatComponent = [];
  for (let i = 0; i < 60; i++) {
    repeatComponent.push(i + 1);
  }

  const [selected, setSelected] = useState([]);
  console.log(selected.length, "selected");
  const [selectedDate, setSelectedDate] = useState(
    currentDate.toISOString().split("T")[0]
  );

  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 2);

  const selectSeat = (id) => {
    const selectedIndex = selected.indexOf(id);

    if (selected.includes(id)) {
      const newSelected = [...selected];
      newSelected.splice(selectedIndex, 1);
      setSelected(newSelected);
    } else {
      setSelected([...selected, id]);
    }
  };
  const seatPrice = singleHubData.price;
  const newTotalAmount = selected.length * seatPrice;
  // setTotalAmount(newTotalAmount);
  console.log(newTotalAmount, "amountttttt");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const fetchdata = async () => {
    const response = await Singlehub(objId);
    if (response) {
      setSingleData(response.data);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <>
      // Render content when singleHubData is available
      <>
        <div
          className="flex 2 h-[35rem] mt-[2rem] "
          style={{ backgroundColor: "#1B4965" }}
        >
          <div className="col-span-4 w-1/3 h-full">
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

          <div className="mr-5 pb-12 mt-10 w-[79rem] ">
            <Carousel
              className="rounded-xl"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
                <img
                  src={singleHubData.images && singleHubData.images[0]}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src={singleHubData.images && singleHubData.images[1]}
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src={singleHubData.images && singleHubData.images[2]}
                  alt="image 3"
                  className="h-full w-full object-cover"
                />
            </Carousel>
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
                      value={singleHubData.hublocation}
                      disabled
                    />
                  </div>
                </div>
                <h1 className="pl-60 text-[3.30rem] mx-4 leading-[4rem] font-extrabold  text-center text-white">
                  {singleHubData.hubname}
                </h1>
                <h1 className="text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white">
                  {singleHubData.hubDescription}
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
                <div className=" w-11/12 h-[54rem] ">
                  <div className="grid grid-cols-3 grid-rows-1 gap-0 h-[54rem]">
                    <div
                      className="bg-blue-gray-50 rounded-lg grid col-span-3 p-15"
                      style={{ backgroundColor: "#1B4965" }}
                    >
                      <div className="grid grid-cols-10 col-span-3 p-16 gap-14">
                        {Array.from(
                          { length: singleHubData.seatcount },
                          (_, index) => (
                            <div
                              key={index + 1}
                              onClick={() => {
                                selectSeat(index + 1);
                              }}
                              className="bg-white rounded-lg w-24 h-24 p-2 col-span-1"
                            >
                              <div
                                key={index + 1}
                                className={`w-20 cursor-pointer h-20 flex justify-center items-center ${
                                  !selected.includes(index + 1)
                                    ? "bg-blue-400"
                                    : "bg-red-900"
                                }`}
                              >
                                <h1 className="text-3xl font-extrabold">
                                  {index + 1}
                                </h1>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>

                    <div></div>
                    <div className="flex justify-center mt-6 ">
                      <Button onClick={sendDatatoApi} className="w-32 h-10">
                        Book
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div
          className="flex 2 h-[35rem]"
          style={{ backgroundColor: "#1B4965" }}
        >

          <div className="ml-5 pb-12 mt-10 w-[79rem] ">
            <Carousel
              className="rounded-xl"
              navigation={({ setActiveIndex, activeIndex, length }) => (
                <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
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
                <img
                  src={singleHubData.images && singleHubData.images[0]}
                  alt="image 1"
                  className="h-full w-full object-cover"
                />
                <img
                  src={singleHubData.images && singleHubData.images[1]}
                  alt="image 2"
                  className="h-full w-full object-cover"
                />
                <img
                  src={singleHubData.images && singleHubData.images[2]}
                  alt="image 3"
                  className="h-full w-full object-cover"
                />

            </Carousel>
          </div>

          <div className="col-span-4 w-1/3 h-full">
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

        </div>
      </>
    </>
  );
}
export default SeatSlot;
