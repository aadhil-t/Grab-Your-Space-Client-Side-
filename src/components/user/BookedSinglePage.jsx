import React from 'react';
import { Button, Typography } from '@material-tailwind/react';
import img from "/src/assets/logos/gys-high-resolution-logo-black - Copy.png";
import { useLocation } from 'react-router-dom';

function BookedSinglePage() {
    const location = useLocation();
    const { state } = location;
    const bookedData = state?.bookedData;

    if (!bookedData) {
        return <div>Loading...</div>; 
    }

    // Function to format the date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { month: 'short', day: 'numeric', year: '2-digit' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
        return `Booking on ${formattedDate}`;
    };

    return (
        <div>
            <div className='flex container mx-auto justify-evenly my-40 h-[40rem] border border-black'>
                <div className='my-48'>
                    <Typography variant='h3' className='font-bold'>Booking Details</Typography><br/>
                    <Typography variant='h5' className='text-gray-700'>Name : {bookedData.bookedhubid.hubname}</Typography>
                    <Typography variant='h5' className='text-gray-700'>Date : {formatDate(bookedData.date)}</Typography>
                    <Typography variant='h5' className='text-gray-700'>Selected Seats : {bookedData.selectedseats.map((seat) => seat.label).join(', ')}</Typography><br/>
                    <div className="border border-black p-4 rounded-md">
                    <Typography variant='h5' className='text-gray-700'>Total Amount : {bookedData.totalamount}</Typography>
                    </div><br />
                    <div className="border border-black p-4 rounded-md">
                    <Typography variant='h5' className={` text-gray-700 ${bookedData.paymentstatus === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                       <span className='text-gray-700'>Payment Status : </span>{bookedData.paymentstatus}
                    </Typography>
                    </div>

                </div>
                <div className='my-48'>
                    <Typography variant='h3' className='font-bold'>User Details</Typography><br/>
                    <Typography variant='h5' className='text-gray-700'> Name : {bookedData.bookeduserid.name}</Typography>
                    <Typography variant='h5' className='text-gray-700'> Email : {bookedData.bookeduserid.email}</Typography>
                    <Typography variant='h5' className='text-gray-700'> Number : {bookedData.bookeduserid.mobile}</Typography>
                </div>
                <div className=' w-[30rem]  my-28 '>
                    <img className='object-cover h-[25rem]' src={bookedData.bookedhubid.images[0]} alt="" />
                    <div className='flex justify-end my-14'>
                        <Button className='bg-red-400'>Cancel</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookedSinglePage;
