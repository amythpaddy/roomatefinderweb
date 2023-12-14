import {configureStore} from '@reduxjs/toolkit'
import postReducer from "./PostStore";
export default configureStore({
    reducer:{
        posts:postReducer
    },
})
