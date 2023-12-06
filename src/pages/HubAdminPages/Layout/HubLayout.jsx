import { Outlet } from "react-router-dom"
import HubNavbar from "../../../components/Common/HubAdmin/Navbar"
import Sidebar from "../../../components/Common/HubAdmin/Sidebar"
import Footer from "../../../components/Common/HubAdmin/Footer"
import { ToastContainer } from "react-toastify"
function HubLayout(){
    return(
  
    <>
    <div className='h-screen grid grid-rows-[4rem] '>
        
      <div> 
        <HubNavbar/> 
      </div>

      <div className='md:grid md:grid-cols-[17rem,1fr]'>
        <div className='invisible md:visible'>
          <Sidebar/>
        </div>

        <div>
          <div>
           <Outlet/>
          </div>

          <div>
            <Footer/>
          </div>
        </div>
      </div>

    </div>
   <ToastContainer />   
  </>
    )
}

export default HubLayout;