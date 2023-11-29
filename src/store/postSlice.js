import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts.filter((post) => post.$id !== action.payload.$id);
    },
  },
});

export const { addPost, deletePost } = postSlice.actions;

export default postSlice.reducer;
