import { Typography } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";
// import {FaMapMarkedAlt} from 'react-icons/fa'
import Map from "../../../assets/UserAssets/Map.png";

function multipleComponent() {
  return <div className="col-start-2 bg-deep-orange-300">1</div>;
}
function SeatSlot() {
  const repeatComponent = [];
  for (let i = 0; i < 5; i++) {
    repeatComponent.push(multipleComponent());
  }
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
          <div className="bg-blue-gray-400 ">
            <div className="flex items-center justify-around bg-blue-gray-400">
              <div className="flex">
                <button className="h-10 w-10">
                  <img src={Map} alt="" />
                </button>
                <div className="">
                  <input
                    className="rounded-md ml-1 w-36 p-1.5 text-lg text-center capitalize font-serif bg-white"
                    type="text"
                    value={"malappuram"}
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
            </div>
            <div className="flex justify-center">
              <div className=" w-11/12 h-[52rem] ">
                <div className="grid grid-cols-3 grid-rows-1 gap-0 h-[50rem]">
                  <div className="bg-blue-gray-50 p-16">
                    <div className=" flex justify-around row-span-3 bg-blue-gray-600 h-full py-5">

                      <div className="flex flex-col justify-around h-full">
                        <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-e-2xl">
                          <span className="flex justify-around p-3 font-extrabold">
                            1
                          </span>
                        </div>
                        <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-e-2xl">
                          <span className="flex justify-around p-3 font-extrabold">
                            3
                          </span>
                        </div>
                        <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-e-2xl">
                          <span className="flex justify-around p-3 font-extrabold">
                            5
                          </span>
                        </div>
                        <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-e-2xl">
                          <span className="flex justify-around p-3 font-extrabold">
                            7
                          </span>
                        </div>
                        <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-e-2xl">
                          <span className="flex justify-around p-3 font-extrabold">
                            9
                          </span>
                        </div>
                      </div>

                      <div className=" tableimg col-span-3 bg-gray-500 w-48 h-full  "></div>

                      <div className="flex flex-col justify-around h-full">
                        <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-s-2xl">
                          <span className="flex justify-around p-3 font-extrabold">
                            2
                          </span>
                        </div>
                        <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-s-2xl">
                          <span className="flex justify-around p-3 font-extrabold">
                            4
                          </span>
                        </div>
                        <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-s-2xl">
                          <span className="flex justify-around p-3 font-extrabold">
                            6
                          </span>
                        </div>
                        <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-s-2xl">
                          <span className="flex justify-around p-3 font-extrabold">
                            8
                          </span>
                        </div>
                        <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-s-2xl">
                          <span className="flex justify-around p-3 font-extrabold">
                            10
                          </span>
                        </div>
                      </div>

                    </div>
                  </div>

                  <div className="bg-blue-gray-50">1</div>

                  <div className="bg-blue-gray-50 p-16">
                  <div className=" flex justify-around row-span-3 bg-blue-gray-600 h-full py-5">
                    <div className="flex flex-col justify-around h-full">
                      <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-e-2xl">
                        <span className="flex justify-around p-3 font-extrabold">
                          11
                        </span>
                      </div>
                      <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-e-2xl">
                        <span className="flex justify-around p-3 font-extrabold">
                          13
                        </span>
                      </div>
                      <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-e-2xl">
                        <span className="flex justify-around p-3 font-extrabold">
                          15
                        </span>
                      </div>
                      <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-e-2xl">
                        <span className="flex justify-around p-3 font-extrabold">
                          17
                        </span>
                      </div>
                      <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-e-2xl">
                        <span className="flex justify-around p-3 font-extrabold">
                          19
                        </span>
                      </div>
                    </div>
                    
                    <div className=" tableimg col-span-3 bg-gray-500 w-48 h-full  "></div>
                    
                    <div className="flex flex-col justify-around h-full">
                      <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-s-2xl">
                        <span className="flex justify-around p-3 font-extrabold">
                          12
                        </span>
                      </div>
                      <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-s-2xl">
                        <span className="flex justify-around p-3 font-extrabold">
                          14
                        </span>
                      </div>
                      <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-s-2xl">
                        <span className="flex justify-around p-3 font-extrabold">
                          16
                        </span>
                      </div>
                      <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-s-2xl">
                        <span className="flex justify-around p-3 font-extrabold">
                          18
                        </span>
                      </div>
                      <div className="col-span-1 bg-deep-orange-900 w-24 h-12 rounded-s-2xl">
                        <span className="flex justify-around p-3 font-extrabold">
                          20
                        </span>
                      </div>
                    </div> 
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
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
                    value={"malappuram"}
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
            </div>
          </div>
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
                    value={"malappuram"}
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
