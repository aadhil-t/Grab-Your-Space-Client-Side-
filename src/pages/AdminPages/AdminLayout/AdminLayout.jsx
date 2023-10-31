import { Outlet } from "react-router-dom"
import AdminNavbar from "../../../components/Common/admin/Navbar";
import Sidebar from "../../../components/Common/admin/Sidebar"
import Footer from "../../../components/Common/admin/Footer"
function AdminLayout(){
    return(
  
    <>
    <div className='h-screen grid grid-rows-[4rem] '>
        
      <div> 
        <AdminNavbar/> 
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
  </>
    )
}

export default AdminLayout;