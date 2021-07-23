import { configureStore } from '@reduxjs/toolkit'
import postsReducer from "./slicers/PostsSlice";

export default configureStore({
    reducer: {
        posts: postsReducer
    },
})