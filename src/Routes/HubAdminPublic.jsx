import { Navigate, Outlet } from "react-router-dom";

function HubAdminPublic(){
    const hubtoken = localStorage.getItem("hubtoken")

    if(hubtoken){
        return <Navigate to="/hub/dashboard"/>
    }else{
        return <Outlet/>
    }
}

export default HubAdminPublic