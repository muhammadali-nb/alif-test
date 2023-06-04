import {configureStore} from "@reduxjs/toolkit";
import foodSlice from "@/store/food";

export const store  = configureStore({
    reducer: {
        food: foodSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch