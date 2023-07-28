import { configureStore } from '@reduxjs/toolkit';
import tabStateSlice from '../pages/adminManageList/tabStateSlice';
import sliceBlockDesignSideBar from '@store/slice/sliceBlockDesignSideBar';
export const store = configureStore({
  reducer: {
    tab: tabStateSlice.reducer,
    sidebar: sliceBlockDesignSideBar.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
