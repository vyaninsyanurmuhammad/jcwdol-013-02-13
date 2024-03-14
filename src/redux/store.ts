import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blog/blog-slice";
import blogDetailReducer from "./features/blog-detail/blog-detail-slice";

export const store = configureStore({
  reducer: {
    blogReducer,
    blogDetailReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
