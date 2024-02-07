import AdminLogin from "../pages/AdminPages/AdminLogin/AdminLogin"
import Dashboard from "../pages/AdminPages/Dashboard/Dashboard"
import AdminPublic from "./AdminPublic"
import { Routes,Route } from "react-router-dom"
import AdminLayout from "../pages/AdminPages/AdminLayout/AdminLayout"
import AdminProtect from "./AdminProtect"
import Users from "../components/Admin/Users"
import HubAdminList from "../components/Admin/HubAdminList"
function AdminRoute(){
    return(
        <Routes>
            <Route element={<AdminPublic/>}>
                <Route path="/login" element={<AdminLogin/>}/>
            </Route>
            
            <Route element={<AdminProtect/>}> 
            <Route path="/" element={<AdminLayout />}>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/users" element={<Users/>}/>        
                <Route path="/hubadminlist" element={<HubAdminList/>}/>        
            </Route>    
            </Route>
        </Routes>       
    )
}

export default AdminRoute;