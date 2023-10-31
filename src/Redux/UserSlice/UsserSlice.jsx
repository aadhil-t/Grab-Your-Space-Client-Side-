import {createSlice} from '@reduxjs/toolkit'
 
const initialState ={
 
    id:'',
    name:'',
    email:'',
    mobile:'',
    is_admin:''

}

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        setUserDetails:(state,action)=>{
            state.id = action.payload.id;
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.mobile = action.payload.mobile;
        },

        logoutDetails:(state) =>{
            state.id ='';
            state.name ='';
            state.mobile ='';
            state.email ='';
        }
    }
})

export const {setUserDetails,logoutDetails}= userSlice.actions;
export default userSlice.reducer