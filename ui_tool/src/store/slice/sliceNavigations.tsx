import { createSlice } from '@reduxjs/toolkit';

interface State {
  id: number;
  title: string;
  path: string;
  category: string;
  date: string;
}
const initialState: State[] = [];
const sliceNavigations = createSlice({
  name: 'navigations',
  initialState,
  reducers: {
    initalizeNavigations: (state, action) => {
      return action.payload;
    },
  },
});

export const { initalizeNavigations } = sliceNavigations.actions;
export default sliceNavigations;
