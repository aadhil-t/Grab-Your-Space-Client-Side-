import { Route, Routes } from "react-router-dom";
import { HubAdminLogin } from "../pages/HubAdminPages/Login/Login";
import { HubAdminSignup } from "../pages/HubAdminPages/Signup/Signup";
import HubLayout from "../pages/HubAdminPages/Layout/HubLayout";
import HubProfile from "../components/HubAdmin/Profile";
function HubAdminRoute(){
    return(
        <Routes>
            <Route path="/login" element={<HubAdminLogin/>}/>
            <Route path="/signup" element={<HubAdminSignup/>}/>

            <Route path="/" element={<HubLayout></HubLayout>}>
                <Route path="/hubprofile" element={<HubProfile/>}/>
            </Route>    
        </Routes>

        
    )
}

export default HubAdminRoute;