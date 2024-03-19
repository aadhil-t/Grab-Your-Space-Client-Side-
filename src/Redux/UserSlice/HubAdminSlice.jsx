import {createSlice} from '@reduxjs/toolkit'
 
const initialState ={
 
    id:'',
    name:'',
    email:'',
    mobile:'',
    is_admin:''

}

const hubadminSlice = createSlice({
    name:'HubAdmin',
    initialState,
    reducers:{
        setHubAdminDetails:(state,action)=>{
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

export const {setHubAdminDetails,logoutDetails}= hubadminSlice.actions;
export default hubadminSlice.reducer