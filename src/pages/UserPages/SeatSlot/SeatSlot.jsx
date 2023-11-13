import { Typography } from '@material-tailwind/react'
import { Carousel } from "@material-tailwind/react";
// import {FaMapMarkedAlt} from 'react-icons/fa'
import Map from"../../../assets/UserAssets/Map.png"

function SeatSlot() {
  return (
    <>
    <div className='grid w-full grid-cols-12 h-[30rem] mt-[2.10rem]' style={{ backgroundColor: '#1B4965' }}>
      <div className='col-span-4 w-full h-full' > 
      <div className='flex w-full h-full justify-center items-center'>
        <h1 className='text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white'><span className='text-red-300'>“</span>Dont wish for it work for it<span className='text-red-300'>”</span>
        <br />So 
        <span className='text-red-300'> Grab Your Space</span></h1>
      </div>
      </div>
      <div className='col-span-8 h-full hidden md:block p-8'>
      <div className='seat-img1 h-full overflow-hidden'>
      </div>
      </div>
    </div>
    <div className='h-[40rem] w-full overflow-hidden p-4' style={{ backgroundColor: '#1B4965' }}>
      <Carousel
        className="rounded-xl "
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
        <div className='bg-blue-gray-400'>
          <div className="flex h-16 items-center justify-around bg-blue-gray-400">
            <div className="flex">
              <button className='h-10 w-10'>
                 <img src={Map} alt="" />
              </button>
              <div className=''>
                <input className='rounded-md ml-1 w-36 p-1.5 text-lg text-center capitalize font-serif bg-white' type="text" value={'malappuram'} disabled/>
              </div>
            </div>        
            <h1 className='text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white'> Grab Your Space</h1>
            <h1 className='text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white'> </h1>

          </div> 
          <div></div>
        
        </div>
        <div className='bg-blue-gray-400'>
          <div className="flex h-16 items-center justify-around bg-blue-gray-400">
            <div className="flex">
              <button className='h-10 w-10'>
                 <img src={Map} alt="" />
              </button>
              <div className=''>
                <input className='rounded-md ml-1 w-36 p-1.5 text-lg text-center capitalize font-serif bg-white' type="text" value={'malappuram'} disabled/>
              </div>
            </div>        
            <h1 className='text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white'> Grab Your Space</h1>
            <h1 className='text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white'> </h1>

          </div> 
        
        </div>
        <div className='bg-blue-gray-400'>
          <div className="flex h-16 items-center justify-around bg-blue-gray-400">
            <div className="flex">
              <button className='h-10 w-10'>
                 <img src={Map} alt="" />
              </button>
              <div className=''>
                <input className='rounded-md ml-1 w-36 p-1.5 text-lg text-center capitalize font-serif bg-white' type="text" value={'malappuram'} disabled/>
              </div>
            </div>        
            <h1 className='text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white'> Grab Your Space</h1>
            <h1 className='text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white'> </h1>

          </div> 
        
        </div>
      </Carousel>
    </div>

    <div className='grid w-full grid-cols-12 h-[30rem] ' style={{ backgroundColor: '#1B4965' }}>
      <div className='col-span-4 w-full h-full' > 
      <div className='flex w-full h-full justify-center items-center'>
        <h1 className='text-[3.30rem] mx-4 leading-[4rem] font-extrabold text-center text-white'><span className='text-red-300'>“</span>Dont wish for it work for it<span className='text-red-300'>”</span>
        <br />So 
        <span className='text-red-300'> Grab Your Space</span></h1>
      </div>
      </div>
      <div className='col-span-8 h-full hidden md:block p-8'>
      <div className='seat-img1 h-full overflow-hidden'>
      </div>
      </div>
    </div>
    </>
  )
}

export default SeatSlot