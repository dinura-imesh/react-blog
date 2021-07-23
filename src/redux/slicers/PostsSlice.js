import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import ApiConstants from "../../constants";
import ApiService from "../../services/apiservice";

const fetchUserById = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, thunkAPI) => {
        console.log("loading");
        return await ApiService.loadPosts();
    }
)

export const PostsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        currentIndex: 0
    },
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(fetchUserById.fulfilled, (state, action) => {
            state.posts = action.payload;
            console.log("set");
        });
    }
});

export const {loadPosts} = PostsSlice.actions;
export {fetchUserById};
export default PostsSlice.reducer;