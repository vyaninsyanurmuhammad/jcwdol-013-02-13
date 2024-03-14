import { createSlice } from "@reduxjs/toolkit";
import { getDetailBlogThunk } from "./blog-detail-thunk";
import { blogDetailInitialState } from "./blog-detail-state";

const blogDetailSlice = createSlice({
  name: "blog-detail",
  initialState: blogDetailInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getDetailBlogThunk.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getDetailBlogThunk.fulfilled, (state, action) => {
      state.blog = action.payload;
      state.isLoading = false;
    });
  },
});

export const {} = blogDetailSlice.actions;

export default blogDetailSlice.reducer;
