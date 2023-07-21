import { createSlice } from "@reduxjs/toolkit";

const tabStateSlice = createSlice({
    name: 'tabState',
    initialState: {
        activeTab: 0,
    },
    reducers: {
        setActiveTab: (state, action) => {
            state.activeTab = action.payload
        }
    }
})

export const { setActiveTab } = tabStateSlice.actions
export default tabStateSlice;