import React, { useEffect } from "react";
import { CardHeader, CardBody, Avatar } from "@material-tailwind/react";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Rating } from "@material-tailwind/react";
import { useState } from "react";
import img from "../../../assets/UserAssets/background.jpg";
import offerImg from "../../../assets/UserAssets/Web_150DPI-20191106_WeWork_Gateway-1-Salt-Lake-City_004-1120x630.jpg"
import { MultiSelect } from "react-multi-select-component";
import { BookingApi, Singlehub, UserRating } from "../../../Api/UserApi";
import { useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { ReviewRatingSchema } from "../../../Yup/Validations";
import { GenerateSuccess } from "../../../Toast/toast";

function SeatArrangement() {
//////////////// REVIEW PAGE RERENDER /////////////
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  ///////////// FETCHING SINGLE HUB DATA ////////////
  const [SingleHubData, SetSingleHubData] = useState([]);
  const [ReviewData, SetReviewData] = useState([]);
  const [OfferData, SetOfferData] = useState([]);
  console.log(OfferData,"ohohoooo")
  const [disable, SetDisable] = useState([]);
  const { state } = useLocation();
  const { objId } = state;
  //  let data = {selectedDate,objId}

  const fetchData = async () => {
    const response = await Singlehub({ objId, selectedDate });
    console.log(response.data.ReviewData, "revieeeeeeeeeeeeew");
    if (response) {
      SetReviewData(response.data.ReviewData);
      SetOfferData(response.data.offerData);
      SetSingleHubData(response.data.singleData);
      SetDisable(response.data.selectedSeatsValues);
    }
  };

  ///////////// REVIEW RATING SEND FUNCTION ////////////
  const initialValues = {
    rating: 0,
    review: "",
  };
  const { values, errors, touched, handleSubmit, handleChange, setFieldValue, resetForm } =
    useFormik({
      initialValues: initialValues,
      validationSchema: ReviewRatingSchema,
      onSubmit: async (values) => {
        console.log(values, objId, "Values and objId");
        const response = await UserRating(values, objId);
        console.log(response, "response reached");
        if (response) {
          setTimeout(() => {
            GenerateSuccess(response.data.message)
          }, 200);
          setReviewSubmitted(true);
          console.log(reviewSubmitted,'heloooooooooooo'); // Set reviewSubmitted state to true on successful submission
          console.log("successfull");
          setFieldValue("rating", 0);

        } else {
          console.log("Something went wrong");
        }
      },
    });

  

  ////////////// SENDING BOOK DATA //////////////
  const navigate = useNavigate();
  const SendToApi = async () => {
    try {
      const Data = { selected, selectedDate, TotalAmount, SingleHubData };
      const response = await BookingApi(Data);
      if (response.data.booked) {
          GenerateSuccess(response.data.message)
        let id = response.data.data._id;
        navigate("/booking", { state: { id } });
      } else {
        console.log("Booking Failed");
      }
    } catch (error) {
      console.log(error);
    }
  };
  ///////////// SEAT SELETION //////////////
  const [selected, setSelected] = useState([]);
  const book = [];
  const options = [];
  for (let i = 0; i < SingleHubData.seatcount; i++) {
    const isDisabled = disable.includes(`${i + 1}`);
    options.push({
      label: `${i + 1}`,
      value: `${i + 1}`,
      disabled: isDisabled,
    });
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
  useEffect(() => {
    fetchData();
  }, [selectedDate]);

  ////////////// TOTAL AMOUNT //////////////
  const SeatPrice = SingleHubData.price;
  const selectedSeatsCount = selected.length;

  //   const TotalAmount = selected.length * SeatPrice;
  let discountAmount = 0;

  let TotalAmount = selectedSeatsCount * SeatPrice;
  // Apply discount if 5 or more seats are selected
  if (OfferData && OfferData.seatcount && selectedSeatsCount >= OfferData.seatcount) {
    const discountPercentage = OfferData.offerpercentage; // 20% discount
    discountAmount = (TotalAmount * discountPercentage) / 100;
    TotalAmount -= discountAmount;
  }
  console.log(TotalAmount, "its the total amount");

/////////////// USEEFECT FOR REVIEW RE-RENDER /////////////
  useEffect(() => {
    if (reviewSubmitted) {
      // Refetch data after review submission
      fetchData();
      resetForm()
      setReviewSubmitted(false); // Reset reviewSubmitted state
    }
  }, [reviewSubmitted]);
 

  return (
    <div className="bg-white">
      <div className="flex w-[80%] mx-auto mt-16">
        <div className=" w-full bg-white">
          <Typography className="mt-5" variant="h2">
            {SingleHubData.hubname}
          </Typography>
          <Typography className="my-3">
            Lower Ground Floor, Saket Salcon Rasvilas, Saket District Centre,
            Sector 6, Pushp Vihar, Next to Select City Walk Mall, Delhi 110017
          </Typography>
          <div className="my-4">
            <img
              className="w-full h-[38rem] object-cover rounded-lg"
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
            <Typography variant="h3">Location</Typography>
            <iframe
              className="my-3"
              src="https://www.youtube.com/embed/aL27fX5kv9U"
              width="880"
              height="484"
            ></iframe>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <Typography className="my-8" variant="h4">
                Add Reviews
              </Typography>
              <Typography className="my-3 font-thin" variant="h6">
                Review Ratings
              </Typography>
              <Rating
                name="rating"
                value={values.rating}
                onChange={(newValue) => {
                  console.log(newValue, "its the values");
                  setFieldValue("rating", newValue);
                }}
              />
              {touched.rating && errors.rating && (
                <div className="text-red-500 text-sm ">{errors.rating}</div>
              )}

              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Review Description
              </label>
              <textarea
                id="message"
                name="review" // added name attribute for form submission
                onChange={handleChange}
                rows={4}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your thoughts here..."
                defaultValue={""}
                value={values.review}
              />
              {touched.review && errors.review && (
                <div className="text-red-500 text-sm ">{errors.review}</div>
              )}

              <div className="my-5 flex justify-end">
                <Button type="submit">Add Review</Button>{" "}
                {/* changed Button to submit type */}
              </div>
            </div>
          </form>

          <article className="my-5 overflow-y-scroll max-h-56 border border-gray-300 rounded-md p-2">
            {Array.isArray(ReviewData) ? (
              ReviewData.map((review, index) => (
                <div key={index} className="mb-8">
                  <div className="flex items-center mb-4">
                    <img
                      className="w-10 h-10 me-4 rounded-full"
                      src={img}
                      alt=""
                    />
                    <div className="font-medium dark:text-white">
                      <p>{review.userId && review.userId.name}</p>
                      <p className="text-gray-600">
                        {review.userId && review.userId.email}
                      </p>
                    </div>
                  </div>
                  <footer className=" text-sm text-gray-500 dark:text-gray-400">
                    <Rating value={review.rating} readonly />
                  </footer>
                  <p className="mb-8 text-gray-500 dark:text-gray-400">
                    {review.review}
                  </p>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </article>

          <div className="flex justify-evenly">
            <Typography>Contact Us: {SingleHubData.hubmobile}</Typography>
            <Typography>Email: {SingleHubData.hubemail}</Typography>
          </div>
        </div>

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
        <div className=" ml-5 w-1/2 bg-white">
          <div className="my-[7.6rem]">
            <div className=" ">
              <div className="my-6">
                <img
                  className="w-full h-72 object-cover rounded-lg"
                  src={SingleHubData.images && SingleHubData.images[1]}
                  alt=""
                />
              </div>
              <div className="my-7">
                <img
                  className="w-full h-72 object-cover rounded-lg"
                  src={SingleHubData.images && SingleHubData.images[2]}
                  alt=""
                />
              </div>
            </div>
            <div className="bg-blue-gray-50">
              <Typography className="font-serif my-10" variant="h5">
                <span className="m-2 text-black font-bold">Per seat :</span>{" "}
                {SingleHubData.price}
              </Typography>

              <div className="flex justify-evenly">
                <Typography className="text-gray-700">Pick a date</Typography>
                <Typography className="text-gray-700">
                  Select your slot
                </Typography>
              </div>

              <div className="grid grid-cols-2">
                <div className="flex justify-center h-20 rounded-md mx-5 me-2 bg-white col-span-1">
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
                <div className="flex justify-center h-20 rounded-md mx-5 bg-white col-span-1">
                  <MultiSelect
                    className="w-full"
                    options={options}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="Select"
                  />
                </div>
              </div>

              <Typography className="font-serif my-2" variant="h5">
                <span className="m-2 text-black font-bold">Total Amount :</span>{" "}
                {TotalAmount}
              </Typography>

              {OfferData && selectedSeatsCount >= OfferData.seatcount && (
                <Typography className="font-serif my-2" variant="h5">
                  <span className="m-2 text-black font-bold">Discount :</span>{" "}
                  {discountAmount}
                </Typography>
              )}
            </div>
            <div>
              <Button
                onClick={SendToApi}
                className="w-full  hover:scale-105 duration-300"
              >
                Book
              </Button>
            </div>

            <div className="flex justify-center my-16">
              {OfferData ?(
                <Card
                shadow={false}
                className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
                  style={{ backgroundImage: `url(${offerImg})` }}

                  >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-16 font-bold text-white leading-[1.5]"
                  >
                 { `${OfferData ? OfferData.offerpercentage:""}% Discount on Booking a Row of ${OfferData ?OfferData.seatcount:"" } Seats` }
                  </Typography>
                  <Typography variant="h5" className="mb-4 text-gray-400">
                 {OfferData ? OfferData.offername :""}
                  </Typography>
                </CardBody>
              </Card>) :(

<Card
                shadow={false}
                className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className={`absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center`}
                  style={{ backgroundImage: `url(${offerImg})` }}

                  >
                  <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative py-14 px-6 md:px-12">
                  <Typography
                    variant="h2"
                    color="white"
                    className="mb-28 font-bold text-white leading-[1.5]"
                  >
                    Currently No Offers Available
                  </Typography>
                  
                </CardBody>
              </Card>


              )
              
              }
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SeatArrangement;
