   import { Navigate, Outlet } from "react-router-dom";

   function UserPublic(){
    if(localStorage.getItem('token')){
        return <Navigate to='/' />
    }else{
      return <Outlet/>
        // return props.children;
    }
   }

   export default UserPublic;