import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import img from "/src/assets/logos/gys-high-resolution-logo-black - Copy.png";
import { useLocation } from 'react-router-dom';
import { BookedSinglePageApi, CancelBookApi } from '../../Api/UserApi';
import { GenerateSuccess } from '../../Toast/toast';

function BookedSinglePage() {
    const location = useLocation();
    const { state } = location;
    const bookedData = state?.bookedData;
// console.log(bookedData._id)
    if (!bookedData) {
        return <div>Loading...</div>; 
    }

 // Function to format the date
const formatDate = (dateString) => {
    try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
            // Invalid date string, return a default message
            return 'Invalid Date';
        }
        const options = { month: 'short', day: 'numeric', year: '2-digit' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return `Booking on ${formattedDate}`;
    } catch (error) {
        // Error occurred while formatting the date
        console.error('Error formatting date:', error);
        return 'Date Error';
    }
};

////////////////// CANCEL DATA SEND ////////////////////
    const [refetch , SetRefetch] = useState(false)
    const handleCancelBook = async()=>{
        try {
            // console.log(UserId,HubId,"kkkkokokoko")
            const response = await CancelBookApi(bookedData._id)
            console.log(response,"Ethipoyiiiiiiii")
            if(response){
                SetRefetch(!false)
                GenerateSuccess(response.data.message)
            }
        } catch (error) {
            console.log(error)
        }
    }
////////////////// FETCHING BOOKED DATA ///////////////
    const [BookedData , setBookedData] = useState({})
    console.log(BookedData,"njna state")
    useEffect(()=>{
        const fetchData = async()=>{
            console.log(bookedData._id,"kokokok")
            try {
                const response = await BookedSinglePageApi(bookedData._id);
                setBookedData(response.data.bookedData)
                console.log(response,"Vanu njan")
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[refetch])
    

    return (
        <div>
            <div className='flex container mx-auto justify-evenly my-40 h-[40rem] border border-black'>
                <div className='my-48'>
                    <Typography variant='h3' className='font-bold'>Booking Details</Typography><br/>
                    <Typography variant='h5' className='text-gray-700'>Name :{BookedData?.bookedhubid?.hubname} </Typography>
                    <Typography variant='h5' className='text-gray-700'>Date :{formatDate(BookedData?.date)} </Typography>
                    <Typography variant='h5' className='text-gray-700'>Selected Seats :{BookedData.selectedseats?.map((seat) => seat.label).join(', ') || 'N/A'} </Typography><br/>
                    <Typography variant='h5' className='p-3 border border-black text-gray-700'>Transaction Id :{BookedData?.transactionid} </Typography><br/>
                    <div className="border border-black p-4 rounded-md">
                    <Typography variant='h5' className='text-gray-700'>Total Amount :{BookedData?.totalamount} </Typography>
                    </div><br />
                    <div className="border border-black p-4 rounded-md">
                    <Typography variant='h5' className={` text-gray-700 ${BookedData.paymentstatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                       <span className='text-gray-700'>Payment Status : </span>{BookedData?.paymentstatus}
                    </Typography>
                    </div>

                </div>
                <div className='my-48'>
                    <Typography variant='h3' className='font-bold'>User Details</Typography><br/>
                    <Typography variant='h5' className='text-gray-700'> Name :{BookedData?.bookeduserid?.name}</Typography>
                    <Typography variant='h5' className='text-gray-700'> Email :{BookedData?.bookeduserid?.email} </Typography>
                    <Typography variant='h5' className='text-gray-700'> Number :{BookedData?.bookeduserid?.mobile} </Typography>
                </div>
                <div className=' w-[30rem]  my-28 '>
                    <img className='object-cover h-[25rem]' src={BookedData?.bookedhubid?.images[0]} alt="" />
                    <div className='flex justify-end my-14'>
                    <Button onClick={() => handleCancelBook()} className='bg-red-400'  disabled={BookedData?.paymentstatus === 'cancel'}>Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookedSinglePage;
