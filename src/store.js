import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/auth/authSlice';
import pageIndexReducer from './slices/pageIndex/pageIndexSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        pageIndex: pageIndexReducer,
    }
});

store.subscribe(() => {
    console.log(store.getState());
})