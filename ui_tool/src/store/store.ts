import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tabStateSlice from '../pages/adminManageList/tabStateSlice';
import sliceBlockDesignSideBar from '@store/slice/sliceBlockDesignSideBar';
import sliceModal from './slice/sliceModal';
export const store = configureStore({
  reducer: {
    tab: tabStateSlice.reducer,
    sidebar: sliceBlockDesignSideBar.reducer,
    modal: sliceModal.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
