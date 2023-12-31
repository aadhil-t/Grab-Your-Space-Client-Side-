import { Routes,Route } from "react-router-dom";
import Signup from "../pages/UserPages/Signup/Signup"
import Login from "../pages/UserPages/Login/login"
import Forgot from "../pages/UserPages/ForgotPassword/Forgot";
import Home from "../pages/UserPages/Home/home";
import Profile from "../components/user/Profile"
import UserPublic from "./UserPublic";
import UserProtect from './UserProtect'
import Layout from "../pages/UserPages/Layout/Layout";
import SignupOtp from "../pages/UserPages/SignupOtp/SignupOtp";
import ChangePassword from "../pages/UserPages/ChangePassword/ChangePassword";
import PassOtp from "../pages/UserPages/OtpPassChange/Otp";
import SeatSlot from "../pages/UserPages/SeatSlot/SeatSlot";
import Hubs from "../pages/UserPages/Hubs/Hubs";
function UserRoutes(){
 return(
    <Routes>
        <Route element={<UserPublic/>}> 
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/changepass/:id" element={<ChangePassword/>}/>
        <Route path="/passotp/:id" element={<PassOtp/>} />
        <Route path="/signupotp/:id" element={<SignupOtp/>}/>
 
        </Route>

        <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home/>}/>
            <Route element={<UserProtect />}>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/seatslot" element={<SeatSlot/>}/>
            <Route path="/hubs" element={<Hubs/>}/>
            </Route>
        </Route>
    </Routes>
 )   
}

export default UserRoutes