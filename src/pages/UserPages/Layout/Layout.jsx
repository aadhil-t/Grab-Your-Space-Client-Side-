import { Outlet } from "react-router-dom"
import Navbar from "../../../components/Common/user/NavBar";

import Footer from "../../../components/Common/user/Footer";
import { ToastContainer } from "react-toastify";


function Layout(){
    return(
        <>
        {/* <div className='grid grid-rows-[1.9rem]'> */}
          <div>
            <Navbar/>
          </div>
          <div className='h-auto min-h-screen bg-white'>
            <Outlet/>
          </div>
          <div>
            <Footer/>
          </div>
        {/* </div> */}
        <ToastContainer/>
      </>
    )
}

export default Layout;