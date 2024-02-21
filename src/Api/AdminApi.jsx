
import adminRedquest from "../Utils/AdminRequest"

// export const adminApi = axios.create({
//     baseURL: import.meta.env.VITE_AdminBaseUrl 
// })
const   adminApi = adminRedquest

// ******** ADMIN LOGIN DATA PASSING AREA **********//
export async function Adminlogin(loginData){
    try {
        console.log("object")
        const data = await adminApi.post('/login',loginData)
        return data
    } catch (error) {
        console.log(error.message)
    }
}

export async function UsersList(){
    try {
        console.log('heyy');
        const data = await adminApi.get('/users')
        console.log(data)   
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function UserBlock(id){
    try {
        console.log("Api ill kerii")
        const data = await adminApi.put(`/userblock/${id}`)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const Hubadminlist = async()=>{
    try {
        console.log("reached Admin Api")
        const data = await adminApi.get(`/hubadminlist`)
        console.log(data)
        return data
    } catch (error) {
     console.log(error)   
    }
}


export const HubApprovalDetails = async()=>{
    try {
        console.log("Entered To HubApproval Api")
        const Data = await adminApi.get('/hubapprovaldetails');
        console.log(Data,"Data reached")
        return Data
    } catch (error) {
        console.log(error)
    }
}

export const HubApprovalChange = async(value,id)=>{
    console.log(value,id,"dddd")
    try {
        console.log(value,"Hub verify Api")
        const Data = await adminApi.post('/hubverifychange',value,id)
        console.log(Data,"Hub Admin verify Api")
        return Data 
    } catch (error) {
        console.log(error)
    }
}