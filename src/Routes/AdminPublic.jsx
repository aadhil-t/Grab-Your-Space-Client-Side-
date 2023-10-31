import {Navigate,Outlet} from 'react-router-dom'

function AdminPublic(){
    if(localStorage.getItem('admintoken')){
        return <Navigate to='/admin/dashboard' />
    }else{
        return <Outlet/>
    }
}

export default AdminPublic;