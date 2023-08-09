import { createSlice } from "@reduxjs/toolkit";

const sliceEditMode = createSlice({
    name: "editMode",
    initialState: {
        value: false,
    },
    reducers: {
        setEditMode: (state, action) => {
            state.value = action.payload;
        }
    }
});

export const { setEditMode } = sliceEditMode.actions;
export default sliceEditMode;