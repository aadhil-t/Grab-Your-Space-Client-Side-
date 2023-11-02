import {Typography} from "@material-tailwind/react"
import { ToastContainer,toast } from "react-toastify";
// import UserAssest from "../../../assets/UserAssets/Web_150DPI-20191106_WeWork_Gateway-1-Salt-Lake-City_004-1120x630.jpg"
function Home(){
    return(
        // <div className="h-[90rem]">
            
        //     <div className='flex justify-center  bg-blue-400 text-red-900 h-[40rem] w-[95rem]'><p className="mt-72">Div 1</p></div>
        //     <div className=' bg-red-400 text-blue-900 h-[40rem] w-[95rem]'><p className="">Div 2</p></div>
        //     <h1>WELCOME TO HOME PAGE</h1>
        // </div>
        <div className="grid grid-rows-4">

            <div className="h-[40rem] flex justify-center items-center bg-blue-gray-100">
               <div className="img w-[110rem] h-[30rem] bg-blue-300 flex justify-center items-center ">
               </div>
            </div>

            <div className="grid-cols-2 h-[40rem] flex justify-center items-center bg-blue-gray-200">
            <div className="w-[40rem] h-[30rem] bg-blue-300 flex justify-center items-center ">
               </div>
               <div className="w-[70rem] h-[30rem] bg-red-400"></div>
            </div>

            <div className="h-[40rem] flex justify-center items-center bg-blue-gray-300">
            <Typography className="text-2xl font-serif">DIV 3</Typography>
            </div>
            <div className="h-[40rem] flex justify-center items-center bg-blue-gray-400">
            <Typography className="text-2xl font-serif">DIV 4</Typography>
            </div>

        </div>
    )
}
<ToastContainer/>

export default Home;
