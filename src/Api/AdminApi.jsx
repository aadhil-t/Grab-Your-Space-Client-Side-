import axios from "axios"

export const adminApi = axios.create({
    baseURL: import.meta.env.VITE_BaseUrl
})


// ******** ADMIN LOGIN DATA PASSING AREA **********//
export async function Adminlogin(loginData){
    try {
        const data = await adminApi.post('login',loginData)
        return data
    } catch (error) {
        console.log(error)
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