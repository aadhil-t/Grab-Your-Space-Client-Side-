import { Navigate, Outlet } from "react-router-dom";

function UserProtect(){
    if(localStorage.getItem('token')){
        return <Outlet />;
    }
    else{
        return <Navigate to='/'/>
    }
}

export default UserProtect