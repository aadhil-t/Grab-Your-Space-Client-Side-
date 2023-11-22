import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Typography, Button } from '@material-tailwind/react';

function Hubs() {
  const cardData = [
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'UI/UX Review Check',
        description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      },
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'UI/UX Review Check',
        description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      },
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'UI/UX Review Check',
        description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      },
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'UI/UX Review Check',
        description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      },
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'UI/UX Review Check',
        description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      },
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'UI/UX Review Check',
        description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      }, 
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'UI/UX Review Check',
        description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      }, 
      {
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
        title: 'UI/UX Review Check',
        description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      }, 
      // Add more data items as needed
  ];

  return (
    <>
      <div className='flex flex-col items-center mt-8 ' style={{ backgroundColor: '#1B4965' }}>
        <span className='text-[3rem] my-4 font-extrabold text-cyan-50'>HUBS</span>
        <div className='h-full w-full p-8 '>
          <div className='  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 '>
            {cardData.map((card) => (
              <Card key={card.id} className='mt-6 md:w-96 mx-auto'>
                <CardHeader color='blue-gray' className='relative h-56'>
                  <img src={card.imageUrl} className='h-full w-full object-cover' alt='card-image' />
                </CardHeader>
                <CardBody>
                  <Typography variant='h5' color='blue-gray' className='mb-2'>
                    {card.title}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardBody>
                <CardFooter className='pt-0'>
                <a href="/seatslot"><Button>Read More</Button></a>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Hubs;
