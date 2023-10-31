import { Outlet } from "react-router-dom"
import Navbar from "../../../components/Common/user/NavBar";


function Layout(){
    return(
        <>
        <div className='grid grid-rows-[1.9rem]'>
          <div>
            <Navbar/>
          </div>
          <div className='h-auto min-h-screen bg-blue-100'>
            <Outlet/>
          </div>
          <div>
            {/* <Footer/> */}
          </div>
        </div>
      </>
    )
}

export default Layout;