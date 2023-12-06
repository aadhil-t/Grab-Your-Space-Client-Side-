import {Navigate, Outlet} from 'react-router-dom'

function AdminProtect(){
    if(localStorage.getItem('admintoken')){
        // eslint-disable-next-line react/prop-types
        return <Outlet/>
    }else{
        return <Navigate to='/admin/login' />
    }
}

export default AdminProtect;