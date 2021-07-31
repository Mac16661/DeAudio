import { createSlice } from "@reduxjs/toolkit";

export const uriSlice = createSlice({
    name: "uri",
    initialState: {
        location: {
            name: null,
            uri: null,
            id: null,
        }
    },
    reducers: {
        setLocation: (state, action) => {
            state.location = action.payload;
        },
    },
});

export const {setLocation} = uriSlice.actions;

export const selectLocation = (state) => state.uri.location;

export default uriSlice.reducer;