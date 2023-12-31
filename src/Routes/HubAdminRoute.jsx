import { Route, Routes } from "react-router-dom";
import HubAdminLoginForm from "../pages/HubAdminPages/Login/Login";
import HubAdminSignupForm from "../pages/HubAdminPages/Signup/Signup";
import HubLayout from "../pages/HubAdminPages/Layout/HubLayout";
import HubProfileForm from "../components/HubAdmin/Profile";
import Dashborad from "../components/HubAdmin/Dashboard";
import EmailVerify from "../components/HubAdmin/VerifyEmail";
import AddhubForm from "../components/HubAdmin/AddHub";
import HubAdminProtect from "./HubAdminProtect";
import HubAdminPublic from "./HubAdminPublic";
function HubAdminRoute(){
    return(
        <Routes>
            <Route element={<HubAdminPublic/>}>
            <Route path="/login" element={<HubAdminLoginForm/>}/>
            <Route path="/signup" element={<HubAdminSignupForm/>}/>
            </Route>

            <Route element={<HubAdminProtect />} >
            <Route path="/" element={<HubLayout />}>
                <Route path="/dashboard" element={<Dashborad/>}/>
                <Route path="/emailverify" element={<EmailVerify/>}/>
                <Route path="/dashboard/:id/:token" element={<Dashborad/>}/>
                <Route path="/hubprofile" element={<HubProfileForm/>}/>
                <Route path="/addhub" element={<AddhubForm/>}/>
            </Route>  
            </Route>  
        </Routes>

        
    )
}

export default HubAdminRoute;