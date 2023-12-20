import React,{useState} from "react";
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import {toggleLoginScreen, setEmail, setPassword, setUserLogin, toggleRememberUser} from "../../store/LoginSignupStore";

import styled from "styled-components";
import Login from "./component/login";
import Signup from "./component/signup";
import {newUser, signInUser} from "../../firebase/firebase";

function LoginSignup() {
    const loginScreen = useAppSelector((state)=>state.loginSignup.login);
    const email:string=useAppSelector((state)=>state.loginSignup.email);
    const password:string=useAppSelector((state)=>state.loginSignup.password);
    const rememberUser:boolean=useAppSelector((state)=>state.loginSignup.rememberUser);

    const dispatch = useAppDispatch();
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <a href="" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                         alt="logo"/>
                    Flowbite
                </a>
                {loginScreen?<Login
                        toggleLoginScreen={()=>dispatch(toggleLoginScreen(null))}
                        email={email}
                        password={password}
                        setPassword={(value:string)=>{dispatch(setPassword(value))}}
                        setEmail={(value:string)=>{dispatch(setEmail(value))}}
                        loginUser={()=>{signInUser(email
                            ,password
                            ,rememberUser
                            ,(userToken:string,userName:string)=>dispatch(setUserLogin({userToken,userName})))}}
                        toggleRememberMe={()=>dispatch(toggleRememberUser(null))}
                        shouldRememberUser={rememberUser}/>

                    :<Signup
                        toggleSignupScreen={()=>dispatch(toggleLoginScreen(null))}
                        email={email}
                        password={password}
                        setPassword={(value:string)=>{dispatch(setPassword(value))}}
                        setEmail={(value:string)=>{dispatch(setEmail(value))}}
                        createUser={()=>{newUser(email,password)}}/>}

            </div>
        </section>
    );
}

export default LoginSignup;