import { configureStore } from '@reduxjs/toolkit';
import tabStateSlice from '../pages/adminManageList/tabStateSlice';


export const store = configureStore({
    reducer: {
        tab: tabStateSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch