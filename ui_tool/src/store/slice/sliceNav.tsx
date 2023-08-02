import { createSlice } from '@reduxjs/toolkit';

interface State {}
const initialState = {
  id: 0,
  title: '',
  url: '',
  duplTitle: '',
  duplUrl: '',
  blankOption: false,
};
const sliceNav = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    initalize: (state, action) => {
      return action.payload;
    },
  },
});

export const {} = sliceNav.actions;
export default sliceNav;
