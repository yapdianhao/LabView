import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageIndex: 0,
};

export const pageIndexSlice = createSlice({
  name: "pageIndex",
  initialState,
  reducers: {
    setPageIndex: (state, action) => {
      console.log("action", action);
      state.pageIndex = action.payload.pageIndex;
    },
  },
});

export default pageIndexSlice.reducer;
