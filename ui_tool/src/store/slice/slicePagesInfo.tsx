import { createSlice } from '@reduxjs/toolkit';

interface State {
  initialState: [];
}
const initialState: State[] = [];
const slicePagesInfo = createSlice({
  name: 'pagesinfo',
  initialState,
  reducers: {
    initalizePagesInfo: (state, action) => {
      state = action.payload;
    },
  },
});

export const { initalizePagesInfo } = slicePagesInfo.actions;
export default slicePagesInfo;
