import { createSlice } from "@reduxjs/toolkit";
import { getBlogsThunk } from "./blog-thunk";
import { blogInitialState } from "./blog-state";

const blogSlice = createSlice({
  name: "blog",
  initialState: blogInitialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getBlogsThunk.fulfilled, (state, action) => {
      state.blogs = [...action.payload];
    });
  },
});

export const {} = blogSlice.actions;

export default blogSlice.reducer;
