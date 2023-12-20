import { initializeApp } from 'firebase/app';
import {
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    NextOrObserver,
    User
} from 'firebase/auth';
import { getFirebaseConfig } from './firebase-config';
import {KEY_USER_TOKEN} from "../constants";
import axios from "axios";

const app = initializeApp(getFirebaseConfig());
const auth = getAuth(app);

export const signInUser = async (
    email: string,
    password: string,
    rememberUser: boolean,
    updateUserTokenState:any
) => {
    //todo :test the case for wrong username password
    if (!email && !password) return;
    const user= await signInWithEmailAndPassword(auth, email, password);
    if(user){
        if(rememberUser){
            localStorage.setItem(KEY_USER_TOKEN,user.user.uid);
        }else{
            sessionStorage.setItem(KEY_USER_TOKEN,user.user.uid);
        }
        updateUserTokenState(user.user.uid);
    }
    return user;
}

export const userStateListener = (callback:NextOrObserver<User>) => {
    return onAuthStateChanged(auth, callback)
}

export const SignOutUser = async () => await signOut(auth);

export const newUser = async(email:string, password:string):Promise<any>=>{
    if (!email && !password) return;
    const newUser = await createUserWithEmailAndPassword(auth, email, password)
    axios.post('http://localhost:3000/createUser',
    {userid: newUser.user.uid,
        username: 'username',
        useremail: newUser.user.email})
        .then(res => {
            const persons = res.data;
            console.log(res.data,'response data');
        })
}