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
import HubList from "../components/HubAdmin/HubList"
import BookingList from "../components/HubAdmin/BookingList";
import AddHu from "../components/HubAdmin/AddHu";
import AddOffer from "../components/HubAdmin/AddOffer";
import { OfferListing } from "../components/HubAdmin/OfferList";
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
                <Route path="/hublist" element={<HubList/>}/>
                <Route path="/bookedlist" element={<BookingList/>}/>
                <Route path="/addoffer" element={<AddOffer/>}/>
                <Route path="/listoffer" element={<OfferListing/>}/>
              
            </Route>  
            </Route>  
        </Routes>

        
    )
}

export default HubAdminRoute;