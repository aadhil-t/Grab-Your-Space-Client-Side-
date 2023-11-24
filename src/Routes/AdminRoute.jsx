import AdminLogin from "../pages/AdminPages/AdminLogin/AdminLogin"
import Dashboard from "../pages/AdminPages/Dashboard/Dashboard"
import AdminPublic from "./AdminPublic"
import { Routes,Route } from "react-router-dom"
import AdminLayout from "../pages/AdminPages/AdminLayout/AdminLayout"
import AdminProtect from "./AdminProtect"
import Users from "../components/Admin/Users"
function AdminRoute(){
    return(
        <Routes>
            <Route element={<AdminPublic/>}>
                <Route path="/login" element={<AdminLogin/>}/>
            </Route>
            
            <Route element={<AdminProtect/>}> 
            <Route path="/" element={<AdminLayout></AdminLayout>}>
                <Route index element={<Dashboard/>}/>
                <Route path="/users" element={<Users/>}/>        
            </Route>    
            </Route>
        </Routes>       
    )
}

export default AdminRoute;