import React, { useEffect } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import { useState } from "react";
import img from "../../../assets/UserAssets/background.jpg";
import { MultiSelect } from "react-multi-select-component";
import { BookingApi, Singlehub } from "../../../Api/UserApi";
import { useLocation, useNavigate } from "react-router-dom";

function SeatArrangement() {
  //   const options = [
  //     { label: "Grapes 🍇", value: "grapes" },
  //     { label: "Mango 🥭", value: "mango" },
  //     { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  //   ];

  ////////////// SENDING BOOK DATA //////////////
  const navigate = useNavigate()
  const SendToApi = async()=>{
    try {
        const Data = {selected, selectedDate, TotalAmount, SingleHubData}
        console.log(Data,"sending Data");
        const response = await BookingApi(Data);
        console.log(response,"Send Data RESPONSE reached");
        if(response.data.booked){
            let id = response.data.data._id;
            navigate("/booking", { state: { id } });
        }else{
            console.log("Booking Failed")
        }
    } catch (error) {
        console.log(error)
    }
  }
   ///////////// FETCHING SINGLE HUB DATA ////////////
   const [SingleHubData, SetSingleHubData] = useState([]);
   console.log(SingleHubData, "enter to Adil");
   const { state } = useLocation();
   const { objId } = state;
 
   const fetchData = async () => {
     const response = await Singlehub(objId);
     if (response) {
       SetSingleHubData(response.data);
     }
   };
   useEffect(() => {
     fetchData();
   }, []);
 
  ///////////// SEAT SELETION //////////////
  const [selected, setSelected] = useState([]);
  const options = [];
  for (let i = 0; i < SingleHubData.seatcount; i++) {
    options.push({ label: `${i + 1}`, value: `${i + 1}` });
    // options.push(i + 1);
  }
  console.log(selected, "SelectedSeat");

  //////////// DATE SELECTION /////////////
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };
  let currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1); // Minimum date (tomorrow)

  const maxDate = new Date();
  maxDate.setDate(currentDate.getDate() + 2);

  const [selectedDate, setSelectedDate] = useState(
    currentDate.toISOString().split("T")[0]
  );
  console.log(selectedDate, "Date");

 ////////////// TOTAL AMOUNT //////////////
 const SeatPrice = SingleHubData.price;
 const TotalAmount = selected.length * SeatPrice
 console.log(TotalAmount,"its the total amount")
 
 
  return (
    <div className="bg-white">
      <div className="flex container mx-auto mt-16">
        <div className=" w-full bg-deep-orange-300">
          <Typography className="mt-5" variant="h2">
            {SingleHubData.hubname}
          </Typography>
          <Typography className="my-3">
            Lower Ground Floor, Saket Salcon Rasvilas, Saket District Centre,
            Sector 6, Pushp Vihar, Next to Select City Walk Mall, Delhi 110017
          </Typography>
          <div className="my-4">
            <img
              className="w-full h-70 object-cover rounded-lg"
              src={SingleHubData.images && SingleHubData.images[0]}
              alt=""
            />
          </div>
          <div className="my-6">
            <Typography variant="h2">Discreption</Typography>
            <Typography className="my-3">
              Innov8 Saket Ras Vilas is located right beside one of India’s most
              famous shopping arena - The Select City. Pastel shades along with
              swings, amphitheatre and abstract cool seating installation in the
              dedicated recreation zones make the workplace a truly dynamic
              place to work at. Along the visual axis, you will find a concrete
              finish that exudes a strong demeanour. The rugged and a grey tone
              finish further accentuates the workplace, giving a more-youth
              centric feel. Let’s revolutionise work at Innov8 Saket
            </Typography>
          </div>
          <div>
            <Typography variant="h4">Add Reviews</Typography>
            <Typography className=" my-3 font-thin" variant="h6">
              Review Ratings
            </Typography>
            <Rating value={0} />

            <label
              htmlFor="message"
              className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Review Description
            </label>
            <textarea
              id="message"
              rows={4}
              className=" block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              defaultValue={""}
            />
            <div className="my-2 flex justify-end">
              <Button>Add Review</Button>
            </div>
          </div>
          <div>
            <Typography variant="h3">Location</Typography>
            <iframe
              className="my-3"
              src="https://www.youtube.com/embed/aL27fX5kv9U"
              width="880"
              height="484"
            ></iframe>
          </div>
          <div className="flex justify-evenly">
            <Typography>Contact Us: {SingleHubData.hubmobile}</Typography>
            <Typography>Email: {SingleHubData.hubemail}</Typography>
          </div>
        </div>

        <div className="ml-5 w-1/2 bg-blue-gray-500">
          {/* <div className="mx-10 my-7 bg-white w-96 ">
        <div className="flex flex-row justify-center gap-8">
            <div className="w-80 h-10 bg-red-400"></div>
            <div className="w-80 h-10 bg-red-200"></div>
        </div>
        <div className="flex flex-row justify-center my-3 gap-8">
            <div className="w-80 h-10 bg-black"></div>
            <div className="w-80 h-10 bg-blue-gray-50"></div>
        </div>
    </div> */}
          <div className="h-44 mt-16 bg-blue-gray-50">
            <Typography className="font-serif">
                Per seat :{SingleHubData.price}
                </Typography>
            <div className="grid grid-cols-2   ">
              <div className="flex justify-center h-20 rounded-md my-3 mx-5 me-2 bg-blue-gray-200 col-span-1">
                <input
                  className="text-center w-full"
                  type="date"
                  id="dateInput"
                  value={selectedDate}
                  min={currentDate.toISOString().split("T")[0]}
                  max={maxDate.toISOString().split("T")[0]}
                  onChange={handleDateChange}
                />
              </div>
              <div className="flex justify-center  h-20 rounded-md my-3 mx-5 bg-blue-gray-200 col-span-1">
                {/* <pre>{JSON.stringify(selected)}</pre> */}
                <MultiSelect
                  className="w-full"
                  options={options}
                  value={selected}
                  onChange={setSelected}
                  labelledBy="Select"
                />
              </div>
            </div>
            <Typography>
                Total Amount :{TotalAmount}
            </Typography>
          </div>

          <div>
            <Button onClick={SendToApi} className="w-full">Book</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatArrangement;
