import { createSlice } from "@reduxjs/toolkit";
import { CreatePostModel } from "../model/PostsModel";

interface StateModel {
  posts: CreatePostModel[];
  postCount: number;
}

const initialState: StateModel = {
  posts: [],
  postCount: 0,
};
export const postSlice = createSlice({
  name: "roomate_posts",
  initialState,
  reducers: {
    updatePost: (
      state,
      action: { payload: CreatePostModel[]; type: string },
    ) => {
      state.posts = action.payload;
      state.postCount = action.payload.length;
    },
    appendPost: (state, action: { payload: CreatePostModel; type: string }) => {
      state.posts.push(action.payload);
      state.postCount++;
    },
  },
});

export const { updatePost, appendPost } = postSlice.actions;
export default postSlice.reducer;
