import { Routes,Route } from "react-router-dom";
import Signup from "../pages/UserPages/Signup/Signup"
import Login from "../pages/UserPages/Login/login"
import Forgot from "../pages/UserPages/ForgotPassword/Forgot";
import Home from "../pages/UserPages/Home/home";
import Profile from "../components/user/Profile"
import UserPublic from "./UserPublic";
import Layout from "../pages/UserPages/Layout/Layout";
import SignupOtp from "../pages/UserPages/SignupOtp/SignupOtp";
import ChangePassword from "../pages/UserPages/ChangePassword/ChangePassword";
import PassOtp from "../pages/UserPages/OtpPassChange/Otp";
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

        <Route path="/" element={<Layout></Layout>}>
            <Route index element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Route>
    </Routes>
 )   
}

export default UserRoutes