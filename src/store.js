import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/auth/authSlice';
import pageIndexReducer from './features/pageIndex/pageIndexSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        pageIndex: pageIndexReducer,
    }
});

store.subscribe(() => {
    console.log(store.getState());
})