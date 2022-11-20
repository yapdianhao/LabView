import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pageIndex: 0
};

export const pageIndexSlice = createSlice({
    name: 'pageIndex',
    initialState,
    reducers: {
        setPageIndex: (state, action) => {
            state.pageIndex = {...action.payload};
        },
    },
});

export default pageIndexSlice.reducer;