import { configureStore } from "@reduxjs/toolkit";
import quoteSlice from "./Slices/quoteSlice";
import likedquoteSlice from "./Slices/likedquoteSlice";
import tagSlice from "./Slices/tagSlice";

const quoteStore = configureStore({
    reducer: {
        quoteReducer: quoteSlice,
        likedquoteReducer:likedquoteSlice,
        tagReducer:tagSlice
    }
})
export default quoteStore