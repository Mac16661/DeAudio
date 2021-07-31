import { configureStore } from "@reduxjs/toolkit";
import uriReducer from "./uriSlice";

export default configureStore({
    reducer: {
        uri: uriReducer,
    }
})