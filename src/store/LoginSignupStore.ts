import {createSlice} from "@reduxjs/toolkit";

interface LoginRegisterState{
    login: boolean,
    email:string,
    password:string,
    username:string,
    userLoggedIn:boolean,
    userToken:string,
    rememberUser:boolean
}

interface UserLoginDetails{
    userToken:string,
    userName:string
}

const initialState:LoginRegisterState={
    login:true,
    username:"",
    password:"",
    email:"",
    userLoggedIn:false,
    userToken:"",
    rememberUser:false

}
export const loginRegisterSlice = createSlice({
    name:'login-signup',
    initialState,
    reducers:{
        toggleLoginScreen:(state,action:{payload:null,type:any})=>{
            state.login=!state.login
            console.log('state update')
        },
        setEmail:(state,action)=>{
            state.email=action.payload
        },setPassword:(state,action)=>{
            state.password=action.payload
        },toggleRememberUser:(state,action:{payload:null,type:any})=>{
            state.rememberUser=!state.rememberUser
        },setUserLogin:(state,action:{payload:UserLoginDetails,type:any})=>{
            state.userToken = action.payload.userToken;
            state.username = action.payload.userName;
            state.userLoggedIn=true;
        },removeLoggedUser:(state,action)=>{
            state.userToken='';
            state.userLoggedIn=false;
        }
    }
})

export const {toggleLoginScreen,
setEmail,
setPassword,
setUserLogin,
removeLoggedUser,
toggleRememberUser} = loginRegisterSlice.actions
export default loginRegisterSlice.reducer