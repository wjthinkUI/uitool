import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import tabStateSlice from '../pages/adminManageList/tabStateSlice';
import sliceBlockDesignSideBar from '@store/slice/sliceBlockDesignSideBar';
import sliceModal from './slice/sliceModal';
import slicePagesInfo from './slice/slicePagesInfo';
import sliceNavigations from './slice/sliceNavigations';
import sliceEditPage from './slice/sliceEditPage';
import sliceModalToggle from './slice/sliceModalToggle';
import sliceTable from './slice/sliceBlockList';
export const store = configureStore({
  reducer: {
    editPage: sliceEditPage.reducer,
    tab: tabStateSlice.reducer,
    sidebar: sliceBlockDesignSideBar.reducer,
    modal: sliceModal.reducer,
    pagesinfo: slicePagesInfo.reducer,
    navigations: sliceNavigations.reducer,
    modalToggle: sliceModalToggle.reducer,
    table: sliceTable.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
