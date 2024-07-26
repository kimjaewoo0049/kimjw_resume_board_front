//features.userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: "defautlValue", };

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userData: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { userData } = userSlice.actions;
export default userSlice;