import {createSlice} from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: 'roomate_posts',
    initialState: {
        posts: []
    },
    reducers: {
        updatePost: (state, action) => {
            console.log('updating post')
        }
    }
})

export const {updatePost} = postSlice.actions
export default postSlice.reducer