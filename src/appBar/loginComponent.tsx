import React,{useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {setUserLogin} from "../store/LoginSignupStore";
import {KEY_USER_TOKEN} from "../constants";

export default function LoginComponent(){
    const dispatch = useAppDispatch();
    const userLoggedIn:boolean=useAppSelector((state)=>state.loginSignup.userLoggedIn);
    const userName:string=useAppSelector((state)=>state.loginSignup.username);
    useEffect(() => {
        const userToken = localStorage.getItem(KEY_USER_TOKEN)??"";
        console.log(userToken,'userToken')
        if(userToken.length){
            dispatch(setUserLogin({userToken:userToken,
                userName:userToken.substring(0,5)}))
        }
    });

    return <h3>{userLoggedIn ? userName : <a href={"/login"}>Login</a>}</h3>
}