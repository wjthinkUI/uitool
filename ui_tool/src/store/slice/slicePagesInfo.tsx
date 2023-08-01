import { createSlice } from '@reduxjs/toolkit';

interface State {
  id: number;
  title: string;
  path: string;
  isParent: boolean;
  category: string;
  date: string;
}
const initialState: State[] = [];
const slicePagesInfo = createSlice({
  name: 'pagesinfo',
  initialState,
  reducers: {
    initalizePagesInfo: (state, action) => {
      return action.payload;
    },
  },
});

export const { initalizePagesInfo } = slicePagesInfo.actions;
export default slicePagesInfo;
