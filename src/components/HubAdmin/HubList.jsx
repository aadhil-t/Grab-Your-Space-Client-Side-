import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { HubData } from '../../Api/HubAdminApi';
// useEffect(()=>{
//     const fetchHubdata = async()=>{
//         const response = await HubData()
//     }
// })

const hubData = [
  {
    id: 1,
    title: "UI/UX Review Check",
    description: "The place is close to Barceloneta Beach...",
    imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 1,
    title: "UI/UX Review Check",
    description: "The place is close to Barceloneta Beach...",
    imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
  },

  // Add more data as needed
];



function HubList() {
    const [hubData,setHubData] = useState([])
    console.log(hubData,"koiiiiiii")

    const fetchHubData = async () => {
        const response = await HubData();
       if(response.status === 200){
        setHubData(response.data)
       }
    }

    useEffect(() => {
        fetchHubData();
    }, []);

  return (
    <div>
        <div className='flex flex-col items-center mt-8'>
        <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
      {hubData && hubData.map((hub) => (
        
        <Card key={hub.id} className="mt-6 w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <img
              src={hub.imageUrl}
              alt="card-image"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
             Name: {hub.hubname}
            </Typography>
            <Typography variant="h5" color="blue-gray" className="mb-2">
             Location: {hub.hubname}
            </Typography>
            <Typography variant="h5" color  ="blue-gray" className="mb-2">
             Mobile: {hub.hubmobile}
            </Typography>
            <Typography>
             Seat count: {hub.seatcount}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Read More</Button>
          </CardFooter>
        </Card>
      ))}
       </div>
      </div>
     </div>
  );
}

export default HubList;
