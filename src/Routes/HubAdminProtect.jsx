import { Navigate, Outlet } from "react-router-dom";



function HubAdminProtect(){
  
    const hubtoken = localStorage.getItem("hubtoken")

    if(hubtoken){
       return <Outlet />
    }else{
        return <Navigate to="/hub/login" />
    }
}

export default HubAdminProtect;


