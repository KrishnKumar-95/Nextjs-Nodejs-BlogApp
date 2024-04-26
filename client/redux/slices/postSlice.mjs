import { createSlice } from "@reduxjs/toolkit";

const initialState = { posts: [], loading: false };

const postSlice = createSlice({
  name: "postSlice",
  initialState,
  reducers: {
    setPosts(state, action) {
      return { ...state, posts: [...action.payload] };
    },
    toggleLoading(state, action) {
      return { ...state, loading: action.payload };
    },
    appendPost: (state, action) => {
      state.push(action.payload);
    },
    deletePost: (state, action) => {},
  },
});

export const { setPosts, appendPost, deletePost, toggleLoading } =
  postSlice.actions;

export default postSlice.reducer;
